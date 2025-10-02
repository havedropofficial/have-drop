"use client";
import { useState } from "react";

export default function Forms() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [modal, setModal] = useState({ open: false, success: true, message: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setModal({ open: true, success: true, message: "Message was send"});
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setModal({ open: true, success: false, message: "Failed to send ⚠️" });
      }
    } catch (err) {
      console.error(err);
      setModal({ open: true, success: false, message: "Failed to send ⚠️" });
    }
  };

  const closeModal = () => setModal({ ...modal, open: false });

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md md:w-1/2">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300"
        >
          Send Message
        </button>
      </form>

      {modal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/55 bg-opacity-1 z-50">
          <div className="bg-white rounded-xl p-6 w-96 text-center shadow-lg">
            <h2 className={`text-2xl font-bold mb-4 ${modal.success ? "text-green-600" : "text-red-600"}`}>
              {modal.success ? "Success" : "Wrong"}
            </h2>
            <p className="mb-6">{modal.message}</p>
            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
