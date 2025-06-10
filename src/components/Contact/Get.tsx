"use client"

import type React from "react"
import { useState } from "react"

function Get() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreed: false,
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    agreed: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Reset errors
    setErrors({
      name: "",
      email: "",
      message: "",
      agreed: "",
    })

    // Validate fields
    const newErrors = {
      name: "",
      email: "",
      message: "",
      agreed: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please fill out this field"
    }

    if (!formData.agreed) {
      newErrors.agreed = "Please agree to the privacy policy"
    }

    // If there are errors, set them and return
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors)
      return
    }

    // If no errors, submit the form
    console.log("Form submitted:", formData)
    alert("Message sent successfully!")
    // Add your form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <div className="min-h-screen bg-white p-8 max-w-6xl rounded-2xl">
      <div className="">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-4 rounded-xl bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-300 text-base ${
                  errors.name ? "ring-2 ring-red-500" : ""
                }`}
                placeholder="Jane Smith"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-4 rounded-xl bg-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-gray-300 text-base ${
                  errors.email ? "ring-2 ring-red-500" : ""
                }`}
                placeholder="jane@framer.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className={`w-full px-4 py-4 rounded-xl bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent resize-none text-base ${
                errors.message ? "ring-2 ring-red-500 border-red-500" : ""
              }`}
              placeholder="Type something here..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black"
              />
              <label htmlFor="agreed" className="text-base text-gray-700">
                I Agree with Privacy Policy and Cookie Policy
              </label>
            </div>
            {errors.agreed && <p className="text-red-500 text-sm mt-1">{errors.agreed}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 px-6 rounded-xl font-medium hover:bg-gray-900 transition-colors text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Get
