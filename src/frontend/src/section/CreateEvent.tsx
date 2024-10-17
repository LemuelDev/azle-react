import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface FormData {
  event_name: string;
  event_details: string;
  event_date: string;
  event_time: string;
  event_address: string;
  event_image: File | null; // Handle file uploads
}

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    event_name: '',
    event_details: '',
    event_date: '',
    event_time: '',
    event_address: '',
    event_image: null,
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        event_image: e.target.files[0],
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create a FormData object to send file and other data
    const form = new FormData();
    form.append('event_name', formData.event_name);
    form.append('event_details', formData.event_details);
    form.append('event_date', formData.event_date);
    form.append('event_time', formData.event_time);
    form.append('event_address', formData.event_address);
    if (formData.event_image) {
      form.append('event_image', formData.event_image);
    }

    console.log(form);

    try {
      const response = await axios.post(`${import.meta.env.VITE_CANISTER_URL}/create-event`, form, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      console.log('Event created:', response.data);

      navigate('/events'); 
    } catch (error) {
      console.error('Error creating event:', error);
      // Handle the error (show error message)
    }
  };

  return (
    <>
      <div className='flex justify-between items-center gap-4 px-4 pb-8'>
        <h1 className="text-3xl font-bold">Create Event</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-8 grid-cols-1 md:grid-cols-2 items-start text-left px-8 max-w-[1000px] mx-auto p-6 shadow-lg rounded-lg">
        <div className="grid max-md:col-span-2">
          <label htmlFor="event_name" className="text-lg">Event Name:</label>
          <input
            type="text"
            name="event_name"
            id="event_name"
            value={formData.event_name}
            onChange={handleChange}
            className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
            required
          />
        </div>

        <div className="grid max-md:col-span-2">
          <label htmlFor="event_details" className="text-lg">Event Details:</label>
          <textarea
            name="event_details"
            id="event_details"
            value={formData.event_details}
            onChange={handleChange}
            className="shadow-lg rounded-md p-2 min-h-[120px] min-w-[50px] bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
            required
          />
        </div>

        <div className="grid max-md:col-span-2">
          <label htmlFor="event_date" className="text-lg">Event Date:</label>
          <input
            type="date"
            name="event_date"
            id="event_date"
            value={formData.event_date}
            onChange={handleChange}
            className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
            required
          />
        </div>

        <div className="grid max-md:col-span-2">
          <label htmlFor="event_time" className="text-lg">Event Time:</label>
          <input
            type="time"
            name="event_time"
            id="event_time"
            value={formData.event_time}
            onChange={handleChange}
            className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
            required
          />
        </div>

        <div className="grid max-md:col-span-2">
          <label htmlFor="event_address" className="text-lg">Event Address:</label>
          <input
            type="text"
            name="event_address"
            id="event_address"
            value={formData.event_address}
            onChange={handleChange}
            className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
            required
          />
        </div>

        <div className="grid max-md:col-span-2">
          <label htmlFor="event_image" className="text-lg">Event Picture:</label>
          <input
            type="file"
            name="event_image"
            id="event_image"
            onChange={handleFileChange}
            className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
            required
          />
        </div>

        <button type='submit' className="px-10 py-3 max-w-[250px] col-span-2 mx-auto rounded-md bg-lime-600 hover:bg-lime-700 text-white mt-4 text-lg font-bold">
          Create Event
        </button>
      </form>
    </>
  );
};

export default CreateEvent;
