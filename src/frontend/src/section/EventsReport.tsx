import React from 'react'
import EventsReportTable from '../components/EventsReportTable'


const EventsReport = () => {
  return (
    <>
      <div className='flex justify-between items-center gap-4 px-4'>
        <h1 className="text-3xl font-bold">Event Reports</h1>
      </div>
      <EventsReportTable/>
    </>
  )
}

export default EventsReport