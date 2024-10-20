import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div id='contact' className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-wrap max-w-6xl bg-white rounded-lg shadow-lg">
        {/* Contact Information Section */}
        <div className="w-full p-8 md:w-1/2 bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">Sent us a message <span role="img" aria-label="envelope"></span></h2>
          <p className="mt-4 text-gray-600">
          We'd love to hear from you! Whether you have a question about our events, need assistance, or just want to provide feedback, our team is ready to assist you. Please fill out the form with your details, and we'll get back to you as soon as possible.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center text-gray-800">
              <FiMail className="mr-2 text-green-600" />
              <span>burcejosh19@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-800">
              <FiPhone className="mr-2 text-green-600" />
              <span>0966-724-8923</span>
            </div>
            <div className="flex items-center text-gray-800">
              <FiMapPin className="mr-2 text-green-600" />
              <span>Candelaria, Zambales, Sinabacan</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Tuch</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-2 border rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full px-4 py-2 mt-2 border rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Write your message here</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full px-4 py-2 mt-2 min-h-[200px] border rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;