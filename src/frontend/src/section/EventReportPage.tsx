import React from 'react'
import Footer from './Footer'
const EventReportPage = () => {
  
  return (
    <section className='w-full min-h-screen bg-gray-100'>
            {/* Hero Section */}
            <div className='relative bg-[url("/energy-efficiency.jpeg")] bg-cover bg-center h-[70vh] flex items-center justify-center'>
                <div className='bg-black bg-opacity-50 w-full h-full absolute'></div>
                <div className='relative text-center text-white z-10 px-6'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4 text-white'>
                        Act Now for a Better Tomorrow
                    </h1>
                    <p className='text-lg md:text-xl mb-6 text-white'>
                        Join us in taking urgent actions to combat climate change and strengthen resilience to climate-related hazards.
                    </p>

                </div>
            </div>

            <div className='text-center pt-8 '  id="eventReport">
                <h2 className='text-3xl font-bold text-green-500'>Recent Event</h2>
            </div>

            {/* About Event report */}
            <div className='py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center'>
                <div>
                    <img src="/plant based diet.jpg" alt="Tree Planting Campaign" className='w-full h-full rounded-lg shadow-md' />
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

            <hr className='w-[70vw] m-auto'/>

            <div className='py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center'>
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

                <hr className='w-[70vw] m-auto'/>

            <div className='py-16 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center'>
                <div>
                    <img src="/conserve water.jpg" alt="Tree Planting Campaign" className='w-full h-full rounded-lg shadow-md' />
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

            {/* Call to Action Section */}
            <Footer/>
        </section>
  )
}

export default EventReportPage