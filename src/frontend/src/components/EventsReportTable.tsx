import React from 'react'
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

interface EventReport {
  event_reports_id: number;
  report_description: string;
  report_img: string;
  event: Event;
}

interface EventReportTableProps{
  eventReports: EventReport[];
}



const EventsReportTable: React.FC<EventReportTableProps> = ({eventReports}) => {
  return (
   <>
    {
      eventReports.length > 0 ?
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-start pt-10'>
    
      {
       eventReports.map((eventReport) => (
        <div className="card bg-base-100 w-[350px] max-h-[450px] shadow-xl">
          <figure className="min-h-[180px] max-h-[180px]">
            <img src={eventReport.report_img} alt={eventReport.event.event_name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{eventReport.event.event_name}</h2>
            
            {/* Truncated description */}
            <p className="line-clamp-3">
              {eventReport.report_description}
            </p>
            
            <div className="card-actions justify-end">
              <Link to={'/admin/track-event-report'} className="btn btn-primary">
                View Report
              </Link>
            </div>
          </div>
        </div>
        ))
      }

    </div>
    :
     <div className="flex flex-col gap-4 justify-center items-center px-4 pt-40">
        <h1 className="text-2xl font-bold text-gray-400 ">No Event Reports at the moment!</h1>
        <Link to={'/admin/create-event-report'} className='btn btn-primary text-white'>Create Event Reports</Link> 
   </div> 

    }
 
</>
  )
}

export default EventsReportTable