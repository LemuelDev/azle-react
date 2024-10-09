import React from 'react'

const VolunteerListTable = () => {
  return (

    <>
       <div 
        className="overflow-x-auto mt-4">
        <table 
        className="table table-zebra">
          <thead>
            <tr>
              <th 
              className="text-lg">Name</th>
              <th 
              className="text-lg">Contact Number</th>
              <th 
              className="text-lg">Address</th>
              <th 
              className="text-lg">Age</th>
              <th 
              className="text-lg">Gender</th>
              <th 
              className="text-lg">Event</th>
              <th 
              className="text-center text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
           <tr>
            <td 
            className="max-lg:min-w-[230px]">Juan Dela Cruz</td>
            <td>09475817672</td>
            <td 
            className="max-lg:min-w-[200px]">Candelaria Zambales</td>
            <td>19</td>
            <td>Male</td>
            <td>Tree Planting Campaign</td>
            <td>
              <div 
              className="flex items-center justify-center gap-2">
                  <button 
                  className="delete-btn text-white py-3 px-6 bg-red-500 hover:bg-red-600 rounded-md"
                        data-file-id=""
                        data-toggle-modal="#deleteConfirmationModal">
                    DELETE
                </button>
                </div>
            </td>
          </tr>

          </tbody>
        </table>
      </div>

      {/* if no volunteers */}
      {/* <div 
      className="flex flex-col mt-10 items-center justify-center">
        <div 
        className="text-3xl font-bold  mb-4">No Volunteers at the moment.</div>
        <p
        className="text-xl mb-6">It looks like there are no active users at the moment.</p>
      </div> */}
     
    </>
       
  )
}

export default VolunteerListTable