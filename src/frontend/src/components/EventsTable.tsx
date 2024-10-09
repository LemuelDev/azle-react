import React from 'react'

const EventsTable = () => {
  return (
    // sample format and data for FE
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-start pt-10'>
        
        <div className="card bg-base-100 w-[350px] shadow-xl">
          <figure className='h-[180px]'>
            <img
              src="./reforest.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tree Planting Campaign!</h2>
            <p>Mining and Deforestation are one of the serious problems of community.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Check Event</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-[350px] shadow-xl">
          <figure className='h-[180px]'>
            <img
              src="./reforest.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tree Planting Campaign!</h2>
            <p>Mining and Deforestation are one of the serious problems of community.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Check Event</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-[350px] shadow-xl">
          <figure className='h-[180px]'>
            <img
              src="./reforest.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tree Planting Campaign!</h2>
            <p>Mining and Deforestation are one of the serious problems of community.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Check Event</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-[350px] shadow-xl">
          <figure className='h-[180px]'>
            <img
              src="./reforest.jpg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tree Planting Campaign!</h2>
            <p>Mining and Deforestation are one of the serious problems of community.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Check Event</button>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default EventsTable