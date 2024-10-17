import React from 'react'
import { useState, useEffect } from 'react';
import VolunteerListTable from '../components/VolunteerListTable'
import axios from "axios";
import {  toast } from "react-toastify";
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
  },[]);

  return (
    <>
         <div className='flex justify-between items-center gap-4 px-4'>
            <h1 className="text-3xl font-bold">Volunteer List</h1>
        </div>
        <VolunteerListTable volunteers={volunteerData}/>
    </>
  )
}

export default VolunteerList