import React from 'react'

const Homepage = () => {
  return (
    <section>
       <section
        className="min-h-screen w-auto bg-cover bg-center"
        style={{ backgroundImage: `url('/mesh-gradient.png')` }}
        >
        <div className='flex items-center justify-center text-center gap-4 flex-col pt-60 lg:pt-80 max-w-[950px] mx-auto px-4'>
            <h3 className='text-5xl text-white font-bold leading-[60px] '>Join the Movement for a Greener Tomorrow</h3>
            <p className='pt-4 text-xl tracking-wide text-white'>Be the change. Volunteer for climate action and help protect the planet for future generations.</p>
            <a href="" className=' outline-none px-10 py-3 rounded-lg text-black text-lg bg-[#FEFAE0] hover:bg-[#e6e1c2] mt-4 '>Volunteer</a>
        </div>
        </section>

        <section className=' w-auto pt-8 min-h-[70vh]'>
            <div className='py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto'>
                <div>
                    <h4 className='text-4xl font-bold text-left'>A Sustainable Development Goal for Climate Action</h4>
                </div>
                <div className=''>
                    <p className='text-lg tracking-wide'>
                    Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                     It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                     The goal encourages global cooperation to reduce carbon emissions, enhance disaster risk management, and promote sustainable practices to protect ecosystems and ensure a sustainable future for all. 
                    </p>
                </div>
            </div>
        </section>

        <section>
        <div className='py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto'>
                <div>
                   <img src="" alt="" />
                </div>
                <div className=''>
                    <p className='text-lg tracking-wide'>
                    Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                     It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                     The goal encourages global cooperation to reduce carbon emissions, enhance disaster risk management, and promote sustainable practices to protect ecosystems and ensure a sustainable future for all. 
                    </p>
                </div>
            </div>
        </section>

    </section>
  )
}

export default Homepage