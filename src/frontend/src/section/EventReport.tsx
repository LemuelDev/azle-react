import React from 'react'
import Footer from "./Footer";
const EventReport = () => {
  return (
    <>  
      <section className='w-full min-h-screen bg-gray-100'>
         
            <section className="relative bg-cover bg-center h-[80vh] bg-[url('/energy-efficiency.jpeg')]">
                <div className="absolute inset-0 bg-green-900 opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4">Act Now for a Better Tomorrow</h1>
                    <p className="text-lg mb-6">Join our climate change movement and be a part of the solution.</p>
                    <div className='flex justify-center items-center mt-8'>
                        <svg className="w-[48px] animate-bounce  h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                        </svg>
                    </div>
                </div>
            </section>
            <div className='text-center pt-8 mb-8 '  id="eventReport">
                <h2 className='text-5xl font-bold text-green-600'>Recent Event</h2>
            </div>

            {/* About Event report */}
            <div className='border-t-2 border-t-green-500  py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center'>
                <div>
                    <img src="/energy-efficiency.jpeg" alt="Tree Planting Campaign" className='w-full h-full rounded-lg shadow-md' />
                </div>
                <div className='space-y-6'>
                    <h2 className='text-3xl font-bold text-black'>Tree Planting</h2>
                    <p className='text-lg tracking-wide leading-8 text-gray-700'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts. It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                    </p>
                    <div className='mt-5 py-3 rounded-lg pl-2 border-l-4 border-green-500 bg-green-100'>
                        <p className='text-gray-700 text-sm'>
                            <strong>Date of event:</strong> <span className='text-gray-500'>Thursday, October 17, 2024</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Time:</strong> <span className='text-gray-500'>09:43 PM</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Address of event:</strong> <span className='text-gray-500'>Sinabacan, Cande, Zambales</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='border-t-2 border-t-green-500  py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center'>
                <div className='space-y-6'>
                    <h2 className='text-3xl font-bold text-black'>Tree Planting</h2>
                    <p className='text-lg tracking-wide leading-8 text-gray-700'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts. It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                    </p>
                    <div className='mt-5 py-3 rounded-lg pl-2 border-l-4 border-green-500 bg-green-100'>
                        <p className='text-gray-700 text-sm'>
                            <strong>Date of event:</strong> <span className='text-gray-500'>Thursday, October 17, 2024</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Time:</strong> <span className='text-gray-500'>09:43 PM</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Address of event:</strong> <span className='text-gray-500'>Sinabacan, Cande, Zambales</span>
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/energy-efficiency.jpeg" alt="Tree Planting Campaign" className='w-full h-full rounded-lg shadow-md' />
                </div>
            </div>

            <div className='border-t-2 border-t-green-500  py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center'>
                <div>
                    <img src="/energy-efficiency.jpeg" alt="Tree Planting Campaign" className='w-full h-full rounded-lg shadow-md' />
                </div>
                <div className='space-y-6'>
                    <h2 className='text-3xl font-bold text-black'>Tree Planting</h2>
                    <p className='text-lg tracking-wide leading-8 text-gray-700'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts. It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                    </p>
                    <div className='mt-5 py-3 rounded-lg pl-2 border-l-4 border-green-500 bg-green-100'>
                        <p className='text-gray-700 text-sm'>
                            <strong>Date of event:</strong> <span className='text-gray-500'>Thursday, October 17, 2024</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Time:</strong> <span className='text-gray-500'>09:43 PM</span>
                        </p>
                        <p className='text-gray-700 text-sm'>
                            <strong>Address of event:</strong> <span className='text-gray-500'>Sinabacan, Cande, Zambales</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* include the footer */}
            <Footer/>
        </section>

    </>
  )
}

export default EventReport
