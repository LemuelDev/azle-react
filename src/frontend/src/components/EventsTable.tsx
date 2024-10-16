import React from 'react';
import { Link } from 'react-router-dom';

interface Event {
  event_id: number;
  event_name: string;
  event_details: string;
  event_date: string;
  event_time: string;
  event_address: string;
  event_image: string;
}

interface EventsTableProps {
  events: Event[];
}

const EventsTable: React.FC<EventsTableProps> = ({ events }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-start pt-10'>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.event_id} className="card bg-base-100 w-[350px] max-h-[450px] shadow-xl">
            <figure className='min-h-[180px] max-h-[180px]'>
              <img
                src={event.event_image}
                alt={event.event_name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{event.event_name}</h2>
              <p>
                <span className='font-bold'>Date:</span> {event.event_date}
              </p>
              <p>
                <span className='font-bold'>Time:</span> {event.event_time}
              </p>
              <p>
                <span className='font-bold'>Address:</span> {event.event_address}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Event</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='flex flex-col items-center justify-center h-64 col-span-3'>
          <p className="text-lg text-gray-600">No current events yet.</p>
          <Link to={'/admin/create-event'} className='btn btn-primary mt-4'>
            Create Event
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventsTable;
