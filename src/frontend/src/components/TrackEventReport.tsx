import React from 'react'

const TrackEventReport = () => {
  return (
    <>
    <div className='flex justify-between items-center gap-4 px-4'>
        <h1 className="text-3xl font-bold pb-4">Track Event Report</h1>
    </div>

    <div className='flex justify-center items-center pt-8'>
      <div className="card card-side bg-base-100 shadow-xl">
          <figure className='max-h-[550px] h-auto'>
            <img
              src="./reforest.jpg"
              alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tree Planting Campaign!</h2>
            <p>Event Report Details Here.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Edit Event Report</button>
              <button className="btn btn-error text-white">Delete</button>
            </div>
          </div>
        </div>
    </div>
   
  </>
  )
}

export default TrackEventReport