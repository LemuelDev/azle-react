import React from 'react'

const CreateEventReport = () => {
  return(
    <>
    <div className='flex justify-between items-center gap-4 px-4 pb-8'>
      <h1 className="text-3xl font-bold">Create Event Report</h1>
    </div>
    <form
          // onSubmit={}
          className="grid gap-8 grid-cols-1  md:grid-cols-2 items-start text-left px-8 max-w-[1000px] mx-auto p-6 shadow-lg rounded-lg"
        >
          <div className="grid max-md:col-span-2">
            <label htmlFor="event_name" className="text-lg">
              Event Name:
            </label>
           <select 
             name="event_name"
             id="event_name"
             // value={}
             // onChange={(e) => setUsername(e.target.value)}
             className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black w-full"
             required // Added required attribute
           >
            {/* fetch events from the db */}
            <option value="sample">sample event 1</option>
            <option value="sample2">sample event 2</option>
            <option value="sample3">sample event 3</option>
           </select>
          </div>

          <div className="grid max-md:col-span-2">
            <label htmlFor="event_details" className="text-lg">
              Report Description:
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


          <div className="grid max-md:col-span-2 lg:col-span-3 lg:max-w-[400px] lg:mx-auto">
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

          <button className="px-10 py-3 max-w-[350px] col-span-2 mx-auto rounded-md bg-lime-600 hover:bg-lime-700 text-white mt-4 text-lg font-bold">
            Create Event Report
          </button>
        </form>
 </>
  )
}

export default CreateEventReport