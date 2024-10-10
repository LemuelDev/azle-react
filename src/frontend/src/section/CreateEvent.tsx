import React from 'react'

const CreateEvent = () => {
  return (
   <>
      <div className='flex justify-between items-center gap-4 px-4 pb-8'>
        <h1 className="text-3xl font-bold">Create Event</h1>
      </div>
      <form
            // onSubmit={}
            className="grid gap-8 grid-cols-1  md:grid-cols-2 items-start text-left px-8 max-w-[1000px] mx-auto p-6 shadow-lg rounded-lg"
          >
            <div className="grid max-md:col-span-2">
              <label htmlFor="event_name" className="text-lg">
                Event Name:
              </label>
              <input
                type="text"
                name="event_name"
                id="event_name"
                // value={}
                // onChange={(e) => setUsername(e.target.value)}
                className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
                required // Added required attribute
              />
            </div>

            <div className="grid max-md:col-span-2">
              <label htmlFor="event_details" className="text-lg">
                Event Details:
              </label>
              <textarea
                name="event_details"
                id="event_details"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="shadow-lg rounded-md p-2 min-h-[120px] min-w-[50px] bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
                required // Added required attribute
              />
            </div>

            
            <div className="grid max-md:col-span-2">
              <label htmlFor="event_date" className="text-lg">
                Event Date:
              </label>
              <input
                type='date'
                name="event_date"
                id="event_date"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
                required // Added required attribute
              />
            </div>

            <div className="grid max-md:col-span-2">
              <label htmlFor="event_time" className="text-lg">
                Event Time:
              </label>
              <input
                type='time'
                name="event_time"
                id="event_time"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
                required // Added required attribute
              />
            </div>

            <div className="grid max-md:col-span-2">
              <label htmlFor="event_address" className="text-lg">
                Event Address:
              </label>
              <input
                type='text'
                name="event_address"
                id="event_address"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
                required // Added required attribute
              />
            </div>

            <div className="grid max-md:col-span-2">
              <label htmlFor="event_picture" className="text-lg">
                Event Picture:
              </label>
              <input
                type='file'
                name="event_picture"
                id="event_picture"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
                required // Added required attribute
              />
            </div>

            {/* {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )} */}

            <button className="px-10 py-3 max-w-[250px] col-span-2 mx-auto rounded-md bg-lime-600 hover:bg-lime-700 text-white mt-4 text-lg font-bold">
              Create Event
            </button>
          </form>
   </>
  )
}

export default CreateEvent