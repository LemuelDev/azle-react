import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
const CreateEventReport = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [eventName, setEventName]  = useState("");
    const [eventReportDescription, setEventReportDescription] = useState("");
    const [availableEvents, setAvailableEvents] = useState([]);

    useEffect(() => {
      const fetchEvents = async () => {
          try {   
              const response = await axios.get(`${import.meta.env.VITE_CANISTER_URL}/get-events`);
              setAvailableEvents(response.data.data);
          }catch(error) {
              toast.error("Error fetching events");
          }
      }
      fetchEvents();

  });

  const handleEventNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEventName(e.target.value);
  };

  const handleEventReportDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEventReportDescription(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_CANISTER_URL}/create-event-report`, {
          report_description: eventReportDescription,
          eventName: eventName
      });
      localStorage.setItem("createEventReport", "true");
      navigate('/admin/event-reports'); // Redirect after successful update
    } catch (error) {
      console.error('Error updating event report: ', error);
      toast.error('Error updating event report');
    } finally {
      setIsLoading(false);
    }
  };

  return(
    <>
    <div className='flex justify-between items-center gap-4 px-4 pb-8'>
      <h1 className="text-3xl font-bold">Create Event Report</h1>
    </div>
    <form
          onSubmit={handleSubmit}
          className="grid gap-8 grid-cols-1  md:grid-cols-2 items-start text-left px-8 max-w-[1000px] mx-auto p-6 shadow-lg rounded-lg"
        >
          <div className="grid max-md:col-span-2">
            <label htmlFor="event_name" className="text-lg">
              Event Name:
            </label>
            <select 
             name="event_name"
             id="event_name"
              value={eventName}
              onChange={handleEventNameChange}
             className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
             required // Added required attribute
           >
             {
              availableEvents.length > 0 ? 
              availableEvents.map((event) => (
                <option 
                  value={event} 
                  key={event} 
                >
                  {event}
                </option>
              )) : null
            }
           </select>
          </div>

          <div className="grid max-md:col-span-2">
            <label htmlFor="event_details" className="text-lg">
              Report Description:
            </label>
            <textarea
              name="event_details"
              id="event_details"
              value={eventReportDescription}
              onChange={handleEventReportDescriptionChange}
              className="shadow-lg rounded-md p-2 min-h-[120px] min-w-[50px] bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
              required // Added required attribute
            />
          </div>

          <button 
          type='submit'
          disabled={isLoading}
          className="px-10 py-3 max-w-[350px] col-span-2 mx-auto rounded-md bg-lime-600 hover:bg-lime-700 text-white mt-4 text-lg font-bold">
          {isLoading ? 'Creating...' : 'Create Event Report'}
          </button>
        </form>
 </>
  )
}

export default CreateEventReport