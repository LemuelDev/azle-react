import React from 'react'
import EventsReportTable from '../components/EventsReportTable'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';

interface Event {
  event_id: number;
  event_name: string;
  event_details: string;
  event_date: string;
  event_time: string;
  event_address: string;
}

interface EventReport {
  event_reports_id: number;
  report_description: string;
  report_img: string;
  event: Event;
}


const EventsReport = () => {

  const[eventReport, setEventReportData] = useState<EventReport[]>([]);

  useEffect(() => {
    
    const fetchData = async () => {
        try{
          const response = await axios.get(`${import.meta.env.VITE_CANISTER_URL}/get-event-reports`);
          setEventReportData(response.data.data);
        }catch{
          toast.error("Error fetching data from event reports.")
        }
    }

    fetchData();

    const createEventReport = localStorage.getItem("createEventReport");
    if(createEventReport === "true") {
        toast.success("Event created successfully");
        localStorage.setItem("createEventReport", "false");
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

  }, []);

  return (
    <>
      <div className='flex justify-between items-center gap-4 px-4'>
        <h1 className="text-3xl font-bold">Event Reports</h1>
        {eventReport.length > 0 && (
          <Link to={'/admin/create-event'} className='btn btn-primary'>
            Add Event
          </Link>
        )}
      </div> 
      <EventsReportTable eventReports={eventReport} />
    </>
  )
  
}

export default EventsReport