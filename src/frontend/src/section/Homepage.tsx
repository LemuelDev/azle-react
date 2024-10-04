import React from 'react'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <section>
        <Navbar/>
       <section
        className="min-h-screen w-auto bg-cover bg-center"
        style={{ backgroundImage: `url('/mesh-gradient.png')` }}
        >
        <div className='flex items-center justify-center text-center gap-4 flex-col pt-40 sm:pt-60  max-w-[950px] mx-auto px-4'>
            <h3 className='sm:text-5xl text-4xl text-white font-bold leading-[60px] '>Join the Movement for a Greener Tomorrow</h3>
            <p className='pt-4 text-xl tracking-wide text-white'>Be the change. Volunteer for climate action and help protect the planet for future generations.</p>
            <a href="" className=' outline-none px-10 py-3 rounded-lg text-black text-lg bg-[#FEFAE0] hover:bg-[#e6e1c2] mt-4 '>Volunteer</a>
        </div>
        </section>

        <section className=' w-auto pt-8 min-h-[90vh]'>
            <div className='py-8 mt-20 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto'>
                <div>
                    <h4 className='text-4xl font-bold text-left pt-4'>A Sustainable Development Goal for Climate Action</h4>
                </div>
                <div className=''>
                    <p className='text-lg tracking-wide leading-10'>
                     Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                     It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                     The goal encourages global cooperation to reduce carbon emissions, enhance disaster risk management, and promote sustainable practices to protect ecosystems and ensure a sustainable future for all. 
                    </p>
                </div>
            </div>
        </section>

        <section className='w-auto min-h-[75vh]'>
            <div className='py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto'>
                    <div className=''>
                        <p className='text-lg tracking-wide leading-10'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                        It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                        The goal encourages global cooperation to reduce carbon emissions, enhance disaster risk management, and promote sustainable practices to protect ecosystems and ensure a sustainable future for all. 
                        </p>
                    </div>
                    <div>
                    <img src="/mesh-gradient.png" alt="" className='rounded-xl w-full h-auto' />
                    </div>
                
                </div>
        </section>


        <section className='w-auto min-h-[90vh] pt-10'>
            <div className='py-8 mt-10 flex max-md:flex-col-reverse  gap-8 items-center px-6 max-w-[1100px] mx-auto'>
                    <div className='grid grid-cols-2 gap-2 md:max-w-[50%]'>
                    <img src="/mesh-gradient.png" alt="" className='rounded-xl w-full h-auto' />
                    <img src="/mesh-gradient.png" alt="" className='rounded-xl w-full h-auto' />
                    <img src="/mesh-gradient.png" alt="" className='rounded-xl w-full h-auto' />
                    <img src="/mesh-gradient.png" alt="" className='rounded-xl w-full h-auto' />
                    </div>
                    <div>
                        <h4 className='text-4xl font-bold text-center md:text-left pt-4'>Innovative Solutions for a Greener Future </h4>
                    </div>
                </div>
        </section>

        <section className='w-auto min-h-[100vh] pt-20'>
             <div className='text-center pt-10'>
                <h4 className='text-4xl font-bold  pt-4'>Climate Action: Turning Ideas into Impact</h4>
            </div>
            <div className='py-16 mt-8 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto'>
                <div className='flex items-start justify-center gap-4 '>
                    <div>
                        <img src="/mesh-gradient.png" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold py-2'>Transition to Renewable Energy</h4>
                        <p className='text-md max-w-[400px] '>Shift from fossil fuels to clean energy sources like solar, wind, hydro, and geothermal power.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div>
                        <img src="/mesh-gradient.png" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold py-2'>Energy Efficiency</h4>
                        <p className='text-md max-w-[400px] '>Implement energy-saving practices in homes, businesses, and industries by using efficient appliances and optimizing energy usage.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div>
                        <img src="/mesh-gradient.png" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold py-2'>Reforestation and Afforestation</h4>
                        <p className='text-md max-w-[400px] '>Protect existing forests and plant new trees to absorb carbon dioxide, creating carbon sinks.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div>
                        <img src="/mesh-gradient.png" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold py-2'>Promote Electric Vehicles (EVs)</h4>
                        <p className='text-md max-w-[400px] '>Encourage the use of electric cars, buses, and bikes to reduce pollution from traditional combustion engines.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div>
                        <img src="/mesh-gradient.png" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold py-2'>Reduce, Reuse, and Recycle</h4>
                        <p className='text-md max-w-[400px] '>Minimize waste production and encourage recycling programs to reduce the amount of waste in landfills, which produce harmful greenhouse gases.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div>
                        <img src="/mesh-gradient.png" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold py-2'>Conservation of Water Resources</h4>
                        <p className='text-md max-w-[400px] '>Protect water bodies and adopt water-efficient practices in agriculture, industry, and households to safeguard this vital resource.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div>
                        <img src="/mesh-gradient.png" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold py-2'>Adopt a Plant-Based Diet</h4>
                        <p className='text-md max-w-[400px] '>Reducing meat consumption can lower methane emissions from livestock and decrease the land and water used for animal farming.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div>
                        <img src="/mesh-gradient.png" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold py-2'>Invest in Climate-Resilient Infrastructure</h4>
                        <p className='text-md max-w-[400px] '>Develop infrastructure that can withstand the impacts of climate change, such as floods, heat waves, and rising sea levels.</p>
                    </div>
                </div>
                   
            </div>
        </section>


        <footer className='w-auto h-auto bg-[#76f4C4]'>
            <div className='max-w-[1000px] mx-auto py-16 grid gap-4'>
                <div className=' text-center'>
                    <h4 className='text-2xl font-bold '>"The greatest threat to our planet is the belief that someone else will save it." </h4>
                </div>
                <p className='text-lg text-right'>– Robert Swan</p>
            </div>
        </footer>



    </section>
  )
}

export default Homepage