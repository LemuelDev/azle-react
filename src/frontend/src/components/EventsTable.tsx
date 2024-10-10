import React from 'react'

const EventsTable = () => {
  return (
    // sample format and data for FE

    <>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-start pt-10'>
        
         <div className="card bg-base-100 w-[350px] max-h-[450px] shadow-xl">
            <figure className='min-h-[180px] max-h-[180px]'>
              <img
                src="./reforest.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tree Planting Campaign!</h2>
              <p className=""> 
                  <span className='font-bold'> Date:</span> October 13, 2024
              </p>
              <p className=""> 
                 <span className='font-bold'>Time:</span> 8am
              </p>
              <p className=""> 
                  <span className='font-bold'>Address:</span> Sinabacan Candelaria Zambales
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Event</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-[350px] max-h-[450px] shadow-xl">
            <figure className='min-h-[180px] max-h-[180px]'>
              <img
                src="./reforest.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tree Planting Campaign!</h2>
              <p className=""> 
                  <span className='font-bold'> Date:</span> October 13, 2024
              </p>
              <p className=""> 
                 <span className='font-bold'>Time:</span> 8am
              </p>
              <p className=""> 
                  <span className='font-bold'>Address:</span> Mambog Botolan Candelaria Zambales
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Event</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-[350px] max-h-[450px] shadow-xl">
            <figure className='min-h-[180px] max-h-[180px]'>
              <img
                src="./reforest.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tree Planting Campaign!</h2>
              <p className=""> 
                  <span className='font-bold'> Date:</span> October 13, 2024
              </p>
              <p className=""> 
                 <span className='font-bold'>Time:</span> 8am
              </p>
              <p className=""> 
                  <span className='font-bold'>Address:</span> Sinabacan Candelaria Zambales
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Event</button>
              </div>
            </div>
          </div>
    </div>

       {/* if no event data */}
       {/* <div className="flex flex-col gap-4 justify-center items-center px-4 pt-40">
       <h1 className="text-3xl font-bold text-gray-400 ">No Events at the moment!</h1>
       <a href="" className='btn btn-primary text-white'>Create Event</a> 
       </div> */}
    </>

   
  )
}

export default EventsTable