"use client";

import { useState } from "react";

export default function EnquiryForm({ prefilledProduct = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: prefilledProduct,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submission:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--on-surface)] mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)] transition-colors duration-200 text-[var(--on-surface)]"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--on-surface)] mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)] transition-colors duration-200 text-[var(--on-surface)]"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[var(--on-surface)] mb-2"
        >
          Phone *
        </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)] transition-colors duration-200 text-[var(--on-surface)]"
            placeholder="+91 89393 28000"
          />
      </div>

      {/* Product */}
      <div>
        <label
          htmlFor="product"
          className="block text-sm font-medium text-[var(--on-surface)] mb-2"
        >
          Product (Optional)
        </label>
        <input
          type="text"
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)] transition-colors duration-200 text-[var(--on-surface)]"
          placeholder="Which product are you interested in?"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--on-surface)] mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)] transition-colors duration-200 text-[var(--on-surface)] resize-none"
          placeholder="Tell us about your enquiry..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[var(--primary)] text-[var(--surface)] py-3 px-6 rounded hover:bg-[var(--secondary)] transition-colors duration-200 font-medium"
      >
        Send Enquiry
      </button>
    </form>
  );
}
