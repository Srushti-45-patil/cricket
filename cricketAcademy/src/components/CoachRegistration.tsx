import React, { useState } from "react";
import registerback from "/assets/registerback.jpeg";
import { useNavigate } from "react-router-dom";

const CoachRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    bloodGroup: "",
    specializations: "",
    certificates: null as File | null,
    experience: "",
    academyLocation: "Mumbai",
    coachingType: "Group",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formPayload.append(key, value as any);
      }
    });

    try {
      const response = await fetch("http://localhost:8000/api/cricket/coaches/", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) throw new Error("Failed to submit coach data");

      navigate("/dashboard");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Coach registration failed.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${registerback})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-900">
          Coach Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Height", name: "height" },
              { label: "Weight", name: "weight" },
              { label: "Blood Group", name: "bloodGroup" },
            ].map(({ label, name }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">{label}</label>
                <input
                  type="text"
                  name={name}
                  value={formData[name as keyof typeof formData] as string}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder={`Enter ${label}`}
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Specializations in cricket</label>
            <input
              type="text"
              name="specializations"
              value={formData.specializations}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Specializations"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Certificates</label>
            <input type="file" onChange={handleFileChange} className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Experience in years</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter Experience"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Admission Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Academy Location</label>
              <select
                name="academyLocation"
                value={formData.academyLocation}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option>Mumbai</option>
                <option>Hyderabad</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Coaching Type</label>
              <select
                name="coachingType"
                value={formData.coachingType}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option>Group</option>
                <option>Personal</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoachRegistration;
