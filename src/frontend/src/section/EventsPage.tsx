import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';

interface Event {
    event_id: number;
    event_name: string;
    event_details: string;
    event_date: string;
    event_time: string;
    event_address: string;
  }

const EventsPage = () => {

    const [eventData, setEventData] = useState<Event[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_CANISTER_URL}/get-events`
          );
          setEventData(response.data.data);
        } catch (error) {
          toast.error("Error fetching data from database");
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
      
        <section id='events' className="pt-20 pb-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
                <h4 className='mb-8 text-4xl text-center font-bold text-green-600'
                  >Upcoming Events <br/>
              </h4>

            {/* Conditional Rendering */}
            {eventData.length === 0 ? (
                <div className="text-center text-gray-600">
                  No upcoming events at the moment.
                </div>
              ) : (
                <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {eventData.map((event) => (
                    <div 
                      key={event.event_id} 
                      className="bg-white shadow-lg rounded-lg overflow-hidden min-w-[300px] max-w-[300px] w-full"
                    >
                      <img
                      src="/resilient climate.webp"
                        alt={event.event_name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{event.event_name}</h3>
                        <p className="text-gray-600">
                          Date:
                          {new Date(event.event_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                        <p className="text-gray-600">Address: {event.event_address}</p>
                        <p className="text-gray-800">
                          Time: 
                          {new Date(`1970-01-01T${event.event_time}`).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true, // For 12-hour format with AM/PM
                          })}
                        </p>
                        <p className="text-gray-800 mt-4 truncate">{event.event_details}</p>
                        <div className="mt-4">
                          <Link
                          to={'/volunteer'}
                          state={{event}}
                          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            
          </div>
          <ToastContainer/>
        </section>

        <Footer/>
      </section>

  )
}

export default EventsPage