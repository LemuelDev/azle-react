import React from 'react'
import EventsTable from '../components/EventsTable'
import { useState, useEffect } from 'react'
import axios from "axios";
import {  toast, ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';

interface Event {
  event_id: number;
  event_name: string;
  event_details: string;
  event_date: string;
  event_time: string;
  event_address: string;
}
const Events = () => {

  const [eventData, setEventData] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_CANISTER_URL}/get-events`);
        setEventData(response.data.data); 
        
      } catch (error) {
        toast.error("Error fetching data from database");
      } 
    };
    fetchData();
    
    const createEvent = localStorage.getItem("createEvent");
    if(createEvent === "true") {
        toast.success("Event created successfully");
        localStorage.setItem("createEvent", "false");
    }

    const deletionSuccess = localStorage.getItem("deletionSuccess");
    if(deletionSuccess === "true") {
      toast.success("Event deleted successfully");
      localStorage.setItem("deletionSuccess", "false");
    }

    const updateSuccess = localStorage.getItem("updateSuccess");
    if(updateSuccess === "true") {
      toast.success("Event updated successfully");
      localStorage.setItem("updateSuccess", "false");
    }
   
  },[]);

  return (
    <>
      <div className='flex justify-between items-center gap-4 px-4'>
        <h1 className="text-3xl font-bold">Events</h1>
        {eventData.length > 0 && (
          <Link to={'/admin/create-event'} className='btn btn-primary'>
            Add Event
          </Link>
        )}
      </div>
      <EventsTable events={eventData} />
      <ToastContainer/>
    </>
  );
  
}

export default Events