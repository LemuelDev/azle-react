import React from 'react'

const AdminProfile = () => {
  return (
   <div>
       <h1 className="text-3xl font-bold pb-4 py-2 tracking-wide max-lg:text-center">Admin Profile</h1>
                
                <div className="grid gap-6 shadow-xl rounded-xl">
                    <div className="shadow-sm rounded-xl p-8">
                        {/* <h4 className="py-4 text-xl font-bold tracking-wide">Admin </h4> */}
                        <div className="grid grid-cols-1  gap-6 ">
                            <div className="flex gap-4 justify-start items-center max-w-[400px]">
                                <label htmlFor="">Username:</label>
                                <input type="text" readOnly value={'Admin'}  className=" bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"/>
                            </div>
                            <div className='grid grid-col-'>
                                  <h1>Update Password</h1>
                                  
                            </div>
                        </div>  
                    </div>
                </div>
    </div>
  )
}

export default AdminProfile