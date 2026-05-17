import { useState } from "react";
import axios from "axios";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );

      setMessage(response.data.message);

      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
      });
    } catch (error) {
      setMessage("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
      <h1 className="text-3xl font-bold mb-2 text-center">
        AI Lead Automation
      </h1>

      <p className="text-gray-500 text-center mb-6">
        Get your personalized business audit report
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="url"
          name="website"
          placeholder="Company Website"
          value={formData.website}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          {loading ? "Generating Report..." : "Generate Audit Report"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">
          {message}
        </p>
      )}
    </div>
  );
}

export default LeadForm;