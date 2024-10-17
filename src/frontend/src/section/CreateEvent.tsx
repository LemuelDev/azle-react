import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();

  // Individual form states
  const [eventName, setEventName] = useState<string>('');
  const [eventDetails, setEventDetails] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [eventTime, setEventTime] = useState<string>('');
  const [eventAddress, setEventAddress] = useState<string>('');
  const [eventImage, setEventImage] = useState<File | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Create a new FormData object
    const formData = new FormData();
    formData.append('event_name', eventName);
    formData.append('event_details', eventDetails);
    formData.append('event_date', eventDate);
    formData.append('event_time', eventTime);
    formData.append('event_address', eventAddress);
  
    // Only append the image if it's not null
    if (eventImage) {
      formData.append('event_image', eventImage);
    }
    
    // Sending the form data to your API
    try {
      const response = await axios.post(`${import.meta.env.VITE_CANISTER_URL}/create-event`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Navigate or show success message
      navigate('/events');
    } catch (error) {
      console.error("Error creating event:", error);
      // Handle error (e.g., show toast)
    }
  };
  

  // Individual change handlers
  const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const handleEventDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEventDetails(e.target.value);
  };

  const handleEventDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventDate(e.target.value);
  };

  const handleEventTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventTime(e.target.value);
  };

  const handleEventAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventAddress(e.target.value);
  };

  const handleEventImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null; // Get the selected file
    setEventImage(file);
  };

  return (
    <>
      <div className='flex justify-between items-center gap-4 px-4 pb-8'>
        <h1 className="text-3xl font-bold">Create Event</h1>
      </div>
      <form 
      onSubmit={handleSubmit} 
      encType="multipart/form-data"
      className="grid gap-8 grid-cols-1 md:grid-cols-2 items-start text-left px-8 max-w-[1000px] mx-auto p-6 shadow-lg rounded-lg">
        <div className="grid max-md:col-span-2">
          <label htmlFor="event_name" className="text-lg">Event Name:</label>
          <input
            type="text"
            name="event_name"
            id="event_name"
            value={eventName}
            onChange={handleEventNameChange}
            className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
            required
          />
        </div>

        <div className="grid max-md:col-span-2">
          <label htmlFor="event_details" className="text-lg">Event Details:</label>
          <textarea
            name="event_details"
            id="event_details"
            value={eventDetails}
            onChange={handleEventDetailsChange}
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
            value={eventDate}
            onChange={handleEventDateChange}
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
            value={eventTime}
            onChange={handleEventTimeChange}
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
            value={eventAddress}
            onChange={handleEventAddressChange}
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
            accept='images/*'
            onChange={handleEventImageChange}
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
