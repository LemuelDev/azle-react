import React from 'react'
import VolunteerListTable from '../components/VolunteerListTable'

const VolunteerList = () => {
  return (
    <>
         <div className='flex justify-between items-center gap-4 px-4'>
            <h1 className="text-3xl font-bold">Volunteer List</h1>
        </div>
        <VolunteerListTable/>
    </>
  )
}

export default VolunteerList