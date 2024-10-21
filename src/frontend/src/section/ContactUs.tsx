import React, { FormEvent, useState, ChangeEvent } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    email: ''
  });
  const [result, setResult] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const dataToSubmit = new FormData();

    dataToSubmit.append("access_key", "8a667c17-d254-4252-8a39-8c9497dfdf6b");
    dataToSubmit.append("subject", "GreenFuture Volunteer has a New Message");
    dataToSubmit.append("name", formData.name);
    dataToSubmit.append("phone", formData.phone);
    dataToSubmit.append("email", formData.email);
    dataToSubmit.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', phone: '', message: '' , email: '' });
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An error occurred while submitting the form");
    }
  };

  return (
    <div id='contact' className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-wrap max-w-6xl bg-white rounded-lg shadow-lg">
        {/* Contact Information Section */}
        <div className="w-full p-8 md:w-1/2 bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800">Send us a message</h2>
          <p className="mt-4 text-gray-600">
            We'd love to hear from you! Whether you have a question about our events, need assistance, or just want to provide feedback, our team is ready to assist you. Please fill out the form with your details, and we'll get back to you as soon as possible.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center text-gray-800">
              <FiMail className="mr-2 text-green-600" />
              <span>johnlemuelencina30@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-800">
              <FiPhone className="mr-2 text-green-600" />
              <span>0966-724-8923</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
                className="w-full px-4 py-2 mt-2 border rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
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
          <p className="mt-4 text-gray-600">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;