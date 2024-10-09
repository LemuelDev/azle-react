import React from 'react'
import EventsTable from '../components/EventsTable'

const Events = () => {
  return (
    <>
      <div className='flex justify-between items-center gap-4 px-4'>
        <h1 className="text-3xl font-bold">Events</h1>
        <button className='btn btn-primary'>
          Add Event
        </button>
      </div>
      <EventsTable/>
  </>
  )
}

export default Events