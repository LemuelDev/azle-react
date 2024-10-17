import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
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
  setVolunteerData: React.Dispatch<React.SetStateAction<Volunteer[]>>;
}

const VolunteerListTable: React.FC<VolunteerListTableProps> = ({ volunteers, setVolunteerData }) => {
  const [selectedVolunteerId, setSelectedVolunteerId] = useState<number | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDeleteClick = (volunteerId: number) => {
    setSelectedVolunteerId(volunteerId);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedVolunteerId) {
      try{
        const response = await axios.post(`${import.meta.env.VITE_CANISTER_URL}/delete-volunteer`, {volunteer_id: selectedVolunteerId});  
        console.log(response.data.message);
        setModalOpen(false);
        setSelectedVolunteerId(null); 
        setVolunteerData(volunteers.filter(volunteer => volunteer.volunteer_id !== selectedVolunteerId));
        localStorage.setItem("deletionSuccess", "true");
        toast.success(response.data.message);
        localStorage.setItem("deletionSuccess", "false");
      }catch(error){
        console.log("Error deleting volunteer: ", error);
        toast.error("Error deleting volunteer")
      }
    
    }
  };

  return (
    <>
      {volunteers.length > 0 ? (
        <div className="overflow-x-auto mt-4">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th className="text-lg">Name</th>
                <th className="text-lg">Contact Number</th>
                <th className="text-lg">Address</th>
                <th className="text-lg">Age</th>
                <th className="text-lg">Gender</th>
                <th className="text-lg">Event</th>
                <th className="text-center text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer) => (
                <tr key={volunteer.volunteer_id}>
                  <td className="max-lg:min-w-[230px]">
                    {volunteer.firstname} {volunteer.middlename} {volunteer.lastname} {volunteer.extensionname}
                  </td>
                  <td>{volunteer.contact_name}</td>
                  <td className="max-lg:min-w-[200px]">{volunteer.address}</td>
                  <td>{volunteer.age}</td>
                  <td>{volunteer.gender}</td>
                  <td>Tree Planting Campaign</td>
                  <td>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="delete-btn text-white py-3 px-6 bg-red-500 hover:bg-red-600 rounded-md"
                        onClick={() => handleDeleteClick(volunteer.volunteer_id)}
                      >
                        DELETE
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Confirmation Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-lg font-bold py-3">Confirm Deletion</h2>
                <p>Are you sure you want to delete this volunteer?</p>
                <div className="flex justify-end py-4 mt-4">
                  <button
                    className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-300 rounded"
                    onClick={() => setModalOpen(false)} // Close modal without action
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                    onClick={confirmDelete} // Confirm deletion
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col mt-10 items-center justify-center">
          <div className="text-2xl text-gray-600 pt-16 mb-4">No Volunteers at the moment.</div>
        </div>
      )}
    </>
  );
};

export default VolunteerListTable;
