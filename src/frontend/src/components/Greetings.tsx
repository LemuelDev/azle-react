import React from 'react'

const Greetings = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center px-4 pt-40">
        <h1 className="text-3xl font-bold text-gray-400 ">Welcome Back, Admin!</h1>
                  
        {/* Boxicon with additional styling */}
        <div>
            <i className='bx bx-user text-6xl text-gray-500'></i>
        </div>
    </div>
  )
}

export default Greetings