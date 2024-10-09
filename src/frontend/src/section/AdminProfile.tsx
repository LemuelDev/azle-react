import React from 'react'

const AdminProfile = () => {
  return (
   <div>
       <h1 className="text-3xl font-bold pb-4 py-2 tracking-wide max-lg:text-center">Admin Profile</h1>
                
                <div className="grid gap-6 shadow-xl rounded-xl">
                    <div className="shadow-sm rounded-xl p-8">
                        {/* <h4 className="py-4 text-xl font-bold tracking-wide">Admin </h4> */}
                        <div className="grid grid-cols-2  gap-6 items-center ">
                           <div className="flex max-sm:flex-col gap-4 items-center col-span-2 ">
                                <div className="flex gap-4 justify-start items-center">
                                        <label htmlFor="">Username:</label>
                                        <input type="text" readOnly value={'Admin'}  className=" bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"/>
                                    </div>
                                    <div className='max-w-[600px]'>
                                        <button className='px-7 py-3 rounded-md outline-none bg-green-500 hover:bg-green-600 text-white'> Edit Username </button>
                                    </div>
                           </div>
                            <div className='grid gap-4 grid-cols-1 col-span-2 max-w-[770px] '>
                                <h1 className='text-xl font-bold py-3 max-sm:text-center'>Update Password</h1>
                                <div className="flex gap-4 justify-start items-center w-full">
                                    <label htmlFor="" className='min-w-[150px]'>Current Password:</label>
                                    <input type="text"  className=" bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"/>
                                 </div>
                                 <div className="flex gap-4 justify-start items-center w-full">
                                    <label htmlFor="" className='min-w-[150px]'>New Password:</label>
                                    <input type="text"  className=" bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"/>
                                 </div>
                                 <div className="flex gap-4 justify-start items-center w-full">
                                    <label htmlFor="" className='min-w-[150px]'>Confirm Password:</label>
                                    <input type="text"  className=" bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"/>
                                 </div>
                                 <div className='max-w-[400px] pt-6'>
                                    <button className=' py-3 px-8 bg-violet-500 hover:bg-violet-600 text-white text-lg rounded-lg outline-none'>Update Password</button>
                                 </div>
                            </div>
                        </div>  
                    </div>
                </div>
    </div>
  )
}

export default AdminProfile