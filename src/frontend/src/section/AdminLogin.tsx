import React from 'react'

const AdminLogin = () => {
  return (
    <section className="flex h-screen max-sm:grid ">
        

            <div className="flex justify-center items-center w-1/2 max-sm:w-full border-r-2">
                <div className="flex justify-center items-center gap-6 max-lg:flex-col max-sm:flex-row h-auto py-4">
                    <h4 className="text-4xl max-lg:text-3xl max-sm:text-2xl font-bold text-black text-center">Volunteer Climate Action </h4>
                    {/* <img src="{{ asset('images/tooth-whitening.png') }}" alt="" className="rounded-md w-40 h-160 max-lg:h-130 max-sm:100 max-sm:w-20 align-middle" /> */}
                </div>
            </div>
            
            <div className="flex justify-center items-center w-1/2 max-sm:w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/mesh-gradient.png')` }}>
                <div className="text-center py-6">
                    <h4 className="text-3xl font-bold  mb-4 tracking-widest">LOGIN</h4>
                    <form action="" method="POST"  className="grid gap-4 items-center text-left">
                     
                        <div className="grid">
                            <label htmlFor="username" className="text-lg  tracking-wider">Username:</label>
                            <input type="text" name="username" id="username" placeholder="Username" className="rounded-md px-10 py-3 bg-gray-500 hover:bg-gray-200 text-black placeholder:text-black"/>
                        </div>
                        <div className="grid">
                            <label htmlFor="password" className="text-lg  tracking-wider">Password:</label>
                            <input type="password" placeholder="Password" name="password" id="password" className="rounded-md px-10 py-3 bg-gray-500 text-black placeholder:text-black"/>
                        </div>
                        <button className="px-10 py-3 rounded-md bg-blue-600 hover:bg-blue-700 mt-4 text-lg tracking-wide ">LOGIN</button>
                    </form>
                </div>
            </div>

        

    </section>
  )
}

export default AdminLogin