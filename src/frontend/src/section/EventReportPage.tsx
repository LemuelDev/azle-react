import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

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

const EventReportPage = () => {
  const [eventReport, setEventReportData] = useState<EventReport[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_CANISTER_URL}/get-event-reports`);
        setEventReportData(response.data.data);
      } catch {
        toast.error("Error fetching data from event reports.");
      }
    };

    fetchData();
  }, []);

  return (
    <section className='w-full min-h-screen bg-gray-100'>
      {/* Hero Section */}
      <div className='relative bg-[url("/energy-efficiency.jpeg")] bg-cover bg-center h-[70vh] flex items-center justify-center'>
        <div className='bg-black bg-opacity-50 w-full h-full absolute'></div>
        <div className='relative text-center text-white z-10 px-6'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 text-white'>
            Act Now for a Better Tomorrow
          </h1>
          <p className='text-lg md:text-xl mb-6 text-white'>
            Join us in taking urgent actions to combat climate change and strengthen resilience to climate-related hazards.
          </p>
        </div>
      </div>

      <div className='text-center pt-8' id="eventReport">
        <h2 className='text-3xl font-bold text-green-500'>Recent Events</h2>
      </div>

      {/* About Event Reports */}
      {eventReport.length > 0 ? (
        eventReport.map((report) => (
          <div key={report.event_reports_id} className='py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start'>
            <div>
              <img src="Climate_Action.jpg" alt={report.event.event_name} className='w-full h-full rounded-lg shadow-md' />
            </div>
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold text-black'>{report.event.event_name}</h2>
              <p className='text-lg tracking-wide leading-8 text-gray-700'>
                {report.report_description}
              </p>
              <div className='mt-5 py-3 rounded-lg pl-2 border-l-4 border-green-500 bg-green-100'>
                <p className='text-gray-700 text-sm'>
                  <strong>Date of event:</strong> <span className='text-gray-500 font-bold'>  
                    {new Date(report.event.event_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}</span>
                </p>
                <p className='text-gray-700 text-sm'>
                  <strong>Time:</strong> <span className='text-gray-500 font-bold'>
                  {new Date(`1970-01-01T${report.event.event_time}`).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true, // For 12-hour format with AM/PM
                    })}
                  </span>
                </p>
                <p className='text-gray-700 text-sm'>
                  <strong>Address of event:</strong> <span className='text-gray-500 font-bold'>{report.event.event_address}</span>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='text-center py-16'>
          <p className='text-xl text-gray-600 text-center'>No event reports available at this time.</p>
        </div>
      )}

      <Footer />
    </section>
  );
}

export default EventReportPage;
