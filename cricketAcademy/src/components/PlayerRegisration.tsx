import React, { useState } from "react";
import registerback from "/assets/registerback.jpeg";
import { useNavigate } from "react-router-dom";

const PlayerRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    bloodGroup: "",
    skillName: "",
    skillLevel: "Beginner",
    preferredRole: "",
    coachingPreference: "Group Coaching",
    academyLocation: "Mumbai",
    achievements: "",
    certificates: null as File | null,
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, certificates: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const userId = localStorage.getItem("user_id"); // make sure you stored this after login/registration
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }
  
    const formPayload = new FormData();
    formPayload.append("user", userId); // ✅ This maps to `user_id` in your player table
    formPayload.append("height", formData.height);
    formPayload.append("weight", formData.weight);
    formPayload.append("blood_group", formData.bloodGroup);
    formPayload.append("skill_name", formData.skillName);
    formPayload.append("skill_level", formData.skillLevel);
    formPayload.append("preferred_role", formData.preferredRole);
    formPayload.append("coaching_preference", formData.coachingPreference);
    formPayload.append("academy_location", formData.academyLocation);
    formPayload.append("achievements", formData.achievements);
    if (formData.certificates) {
      formPayload.append("certificates", formData.certificates);
    }
  
    try {
      const response = await fetch("http://localhost:8000/api/cricket/player-details/", {
        method: "POST",
        body: formPayload,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        return;
      }
  
      const data = await response.json();
      console.log("Player registered:", data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };


  return (
    <div
      className="h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${registerback})` }}
    >
      <div className="relative z-10 p-4 md:p-8">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 md:p-8 w-full max-w-2xl mx-auto overflow-hidden">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-900">Registration</h2>
          <form className="space-y-2" onSubmit={handleSubmit}>
            {/* Health Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Health Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Height", name: "height", placeholder: "Enter Height" },
                  { label: "Weight", name: "weight", placeholder: "Enter Weight" },
                  { label: "Blood Group", name: "bloodGroup", placeholder: "Enter Blood Group" },
                ].map(({ label, name, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium text-gray-700">{label}</label>
                    <input
                      type="text"
                      name={name}
                      value={formData[name as keyof typeof formData] as string}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="input-field"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3>Parent Details</h3>
              <input type="text" placeholder="Parent Name" name="parentName" onChange={handleChange} className="p-2 border rounded" />
              <input type="tel" name="parentPhone" placeholder="Parent Phone" onChange={handleChange} className="p-2 border rounded ml-35" />
            </div>

            {/* Skill Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Skill Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Skill Name</label>
                  <input
                    type="text"
                    name="skillName"
                    value={formData.skillName}
                    onChange={handleChange}
                    placeholder="Enter Your Skills"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Skill Level</label>
                  <select name="skillLevel" value={formData.skillLevel} onChange={handleChange} className="input-field">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Admission Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Admission Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Role</label>
                  <input
                    type="text"
                    name="preferredRole"
                    value={formData.preferredRole}
                    onChange={handleChange}
                    placeholder="Batsman"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Coaching Preference</label>
                  <select name="coachingPreference" value={formData.coachingPreference} onChange={handleChange} className="input-field">
                    <option>Group Coaching</option>
                    <option>Personal Coaching</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Preferred Academy Location</label>
                  <select name="academyLocation" value={formData.academyLocation} onChange={handleChange} className="input-field">
                    <option>Mumbai</option>
                    <option>Hyderabad</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Achievements in cricket</label>
                  <textarea
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleChange}
                    placeholder="Enter your achievements in cricket"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Certificates</label>
                  <input type="file" onChange={handleFileChange} className="input-field" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayerRegistration;