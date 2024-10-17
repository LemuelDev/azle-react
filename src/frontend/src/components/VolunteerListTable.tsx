import React from 'react'

interface Volunteer {
  volunteer_id: number;
  firstname: string;
  lastname: string;
  middlename: string;
  extensionname: string;
  contact_name: string;
  gender: string;
  age: string;
  address: string;
}

interface VolunteerListTableProps {
    volunteers: Volunteer[];
}

const VolunteerListTable: React.FC<VolunteerListTableProps> = ({volunteers}) => {
  return (

    <>
      {
        volunteers.length > 0 ? 
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
              {
                volunteers.map((volunteer) => (
                  <tr key={volunteer.volunteer_id}>
                    <td 
                    className="max-lg:min-w-[230px]">{volunteer.firstname} {volunteer.middlename} {volunteer.lastname} {volunteer.extensionname}</td>
                    <td>{volunteer.contact_name}</td>
                    <td 
                    className="max-lg:min-w-[200px]">{volunteer.address}</td>
                    <td>{volunteer.age}</td>
                    <td>{volunteer.gender}</td>
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
                ))
              }
              </tbody>
            </table>
      </div>
      :
      <div 
      className="flex flex-col mt-10 items-center justify-center">
        <div 
        className="text-3xl text-gray-600  pt-8 mb-4">No Volunteers at the moment.</div>
      </div> 
      }

   
     
    </>
       
  )
}

export default VolunteerListTable