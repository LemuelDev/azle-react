import React from 'react'

const AdminLogin = () => {
  return (
    <section className=" flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat "  style={{ backgroundImage: `url('/mesh-gradient (1).png')` }}>
        
            
            <div className="flex justify-center items-center max-w-[500px] shadow-lg rounded-md px-10 py-6  bg-cover bg-center bg-no-repeat" >
               
                <div className="grid  gap-4 text-center py-6">
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <img src="./favicon.ico" alt="" />
                        <h4 className="text-3xl font-bold">Admin Login</h4>
                    </div>
                    <form action="" method="POST"  className="grid gap-4 items-center text-left px-8">
                        <div className="grid">
                            <label htmlFor="username" className="text-lg">Username:</label>
                            <input type="text" name="username" id="username"  className=" shadow-lg rounded-md px-10 py-3 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black"/>
                        </div>
                        <div className="grid">
                            <label htmlFor="password" className="text-lg">Password:</label>
                            <input type="password"  name="password" id="password" className=" shadow-lg rounded-md px-10 py-3 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black"/>
                        </div>
                        <button className="px-10 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white mt-4 text-lg font-bold">LOGIN</button>
                    </form>
                </div>
            </div>

        

    </section>
  )
}

export default AdminLogin