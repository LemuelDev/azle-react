import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import { Link } from 'react-router-dom';

const TrackEventReport: React.FC = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { eventReport } = location.state || {};

    const [eventReportID, setEventReportID] = useState<number | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

      
  if (!eventReport) {
    return <p className='pt-40 text-center text-lg font-bold'>No event data found.</p>;
  }

  const handleDeleteClick = (eventReportId: number) => {
    setEventReportID(eventReportId);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    if (eventReportID) {
      setIsLoading(true);
      try{
        const response = await axios.post(`${import.meta.env.VITE_CANISTER_URL}/delete-event-report`, {event_reports_id: eventReportID});  
        setModalOpen(false);
        setEventReportID(null); 
        localStorage.setItem("deletionSuccess", "true");
        navigate("/admin/events");
      }catch(error){
        console.log("Error deleting event: ", error);
        toast.error("Error deleting event")
      }finally{
        setIsLoading(false);
      }
    }
  };

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
            <h2 className="card-title">{eventReport.event_name}</h2>
            <p>{eventReport.report_description}</p>
            <div className="card-actions justify-end">
              <Link 
              to={"/admin/track-event-report/edit"}
              state={{eventReport}}
              className="btn btn-primary"
              >Edit Event Report</Link>
              <button className="btn btn-error text-white" onClick={() => handleDeleteClick(eventReport.event_id)}>Delete</button>
            </div>
          </div>
        </div>
    </div>

        {/* Confirmation Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-lg font-bold py-3">Confirm Deletion</h2>
                <p>Are you sure you want to delete this event report?</p>
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
                    disabled={isLoading}
                  >
                    {isLoading ? 'Deleting..' : 'Confirm'}
                  </button>
                </div>
              </div>
            </div>
          )}
   
  </>
  )
}

export default TrackEventReport