import React from 'react'
import { useState, useEffect } from 'react';
import VolunteerListTable from '../components/VolunteerListTable'
import axios from "axios";
import {  toast, ToastContainer} from "react-toastify";
import { Link } from 'react-router-dom';

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

const VolunteerList = () => {

  const [volunteerData, setVolunteerData] = useState<Volunteer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_CANISTER_URL}/get-volunteers`);
        setVolunteerData(response.data.data); 
        
      } catch (error) {
        toast.error("Error fetching data from database");
      } 
    };
    fetchData();

    const deletionSuccess = localStorage.getItem("deletionSuccess");
    if(deletionSuccess === "true") {
      toast.success("Event deleted successfully");
      localStorage.setItem("deletionSuccess", "false");
    }
    
  },[]);

    // Function to delete a volunteer
    const deleteVolunteer = async (volunteerId: number) => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_CANISTER_URL}/delete-volunteer`, { volunteer_id: volunteerId });
        toast.success(response.data.data.message); // Adjust as needed based on your response structure
        
        // Refetch the volunteer data after deletion
        const fetchData = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_CANISTER_URL}/get-volunteers`);
            setVolunteerData(response.data.data); 
          } catch (error) {
            toast.error("Error fetching data from database");
          } 
        };
        fetchData(); // Call the function to refetch volunteers
      } catch (error) {
        console.error("Error deleting volunteer:", error);
        toast.error("Error deleting volunteer");
      }
    };

  return (
    <>
         <div className='flex justify-between items-center gap-4 px-4'>
            <h1 className="text-3xl font-bold">Volunteer List</h1>
        </div>
        <VolunteerListTable volunteers={volunteerData} setVolunteerData={setVolunteerData}/>
        <ToastContainer/>
    </>
  )
}

export default VolunteerList