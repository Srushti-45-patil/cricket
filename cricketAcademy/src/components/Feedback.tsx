
import { useState } from "react";
import { sessions } from "../constants/Sessions";
import { matches } from "../constants/Matches";
import { Star } from "lucide-react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState<{ [key: string]: any }>({
    generic: { Feedback_text: "", Rating: 0, Suggestions: "" },
  });

  const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeedbacks((prev) => ({
      ...prev,
      [key]: { ...prev[key], [name]: value },
    }));
  };

  const handleRatingChange = (key: string, rating: number) => {
    setFeedbacks  ((prev) => ({
      ...prev,
      [key]: { ...prev[key], Rating: rating },
    }));
  };

  const handleSubmit = (type: string, id: number | "generic", toId = 999, e: React.FormEvent) => {
    e.preventDefault();
    const feedbackData = {
      Feedback_Type: type,
      Feedback_From_id: 101, // Replace with logged-in user ID
      Feedback_To_id: toId,  // Replace appropriately
      ...feedbacks[id],
    };
    console.log("Submitting Feedback:", feedbackData);
    alert("Thank you for your feedback!");
    setFeedbacks((prev) => ({
      ...prev,
      [id]: { Feedback_text: "", Rating: 0, Suggestions: "" },
    }));
  };

  const concludedSessions = sessions.filter((s) => new Date(s.date) < new Date());
  const pastMatches = matches.filter((m) => new Date(m.date) < new Date());

  const renderRatingStars = (key: string) => {
    const rating = feedbacks[key]?.Rating || 0;
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={24}
            className={`cursor-pointer transition-colors ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => handleRatingChange(key, star)}
          />
        ))}
      </div>
    );
  };

  const renderForm = (type: string, id: string | number) => (
    <form onSubmit={(e) => handleSubmit(type, id, 999, e)} className="space-y-2 mt-2">
      <div>
        <label className="block font-semibold text-gray-700">Feedback Text</label>
        <textarea
          name="Feedback_text"
          value={feedbacks[id]?.Feedback_text || ""}
          onChange={(e) => handleChange(id.toString(), e)}
          className="w-full p-2 border rounded shadow-sm bg-white text-black placeholder-gray-500 font-normal"
          placeholder="Write your main feedback..."
          required
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700 mb-1">Rating</label>
        {renderRatingStars(id.toString())}
      </div>

      <div>
        <label className="block font-semibold text-gray-700">Suggestions</label>
        <textarea
          name="Suggestions"
          value={feedbacks[id]?.Suggestions || ""}
          onChange={(e) => handleChange(id.toString(), e)}
          className="w-full p-2 border rounded shadow-sm bg-white text-black placeholder-gray-500 font-normal"
          placeholder="Any suggestions to improve?"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Submit Feedback
      </button>
    </form>
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg border border-gray-300 space-y-10">
      {/* Session Feedback */}
      <div>
        <h2 className="text-2xl font-bold mb-5 text-center text-blue-600">Session Feedback</h2>
        <div className="grid grid-cols-3 gap-4">
          {concludedSessions.length > 0 ? (
            concludedSessions.map((session) => (
              <div key={session.id} className="p-4 bg-gray-100 rounded shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">Session: {session.sessionType}</h3>
                <p><strong>Date:</strong> {session.date}</p>
                <p><strong>Time:</strong> {session.time}</p>
                <p><strong>Coach:</strong> {session.coachAssigned}</p>
                {renderForm("Session", session.id)}
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No concluded sessions available for feedback.</p>
          )}
        </div>
      </div>

      {/* Match Feedback */}
      <div>
        <h2 className="text-2xl font-bold mb-5 text-center text-green-600">Match Feedback</h2>
        <div className="grid grid-cols-3 gap-4">
          {pastMatches.length > 0 ? (
            pastMatches.map((match) => (
              <div key={match.id} className="p-4 bg-gray-100 rounded shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">Match: {match.matchType}</h3>
                <p><strong>Date:</strong> {match.date}</p>
                {renderForm("Match", `match-${match.id}`)}
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No past matches available for feedback.</p>
          )}
        </div>
      </div>

      {/* General Feedback */}
      <div>
        <h2 className="text-2xl font-bold mb-5 text-center text-purple-600">General Feedback</h2>
        <div className="max-w-xl mx-auto bg-gray-100 p-4 rounded shadow-md">
          {renderForm("Generic", "generic")}
        </div>
      </div>
    </div>
  );
};

export default Feedback;