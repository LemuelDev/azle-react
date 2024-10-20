import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './animation.css';
import Footer from './Footer';
import ContactUs from './ContactUs';
import UpcommingEvents from './UpcommingEvents';

interface Event {
  event_id: number;
  event_name: string;
  event_details: string;
  event_date: string;
  event_time: string;
  event_address: string;
}

interface EventReport {
  event_reports_id: number;
  report_description: string;
  event: Event;
}

const Homepage = () => {
  const [eventData, setEventData] = useState<Event[]>([]);
  const [eventReport, setEventReportData] = useState<EventReport[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_CANISTER_URL}/get-events`
        );
        const response2 = await axios.get(
          `${import.meta.env.VITE_CANISTER_URL}/get-event-reports`
        );
        setEventData(response.data.data);
        setEventReportData(response2.data.data);
      } catch (error) {
        toast.error("Error fetching data from database");
      }
    };
    fetchData();
  }, []);

    const heroStyle = {
      background: "linear-gradient(#003a077b, rgba(0, 58, 7, 0.7)), url('/bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

  return (
    <section>
       <section className="min-h-screen w-auto" style={heroStyle}>
        {/* <Navbar/> */}
            <div className='relative z-10 flex items-center justify-center text-center gap-4 flex-col sm:pt-60 pt-40  max-w-[950px] mx-auto px-4'>
                <h3 className='text-4xl sm:text-6xl font-bold leading-[60px] text-green-200'>
                    GreenFuture Volunteer
                </h3>
                <p className='pt-4 text-xl tracking-wide text-white'>
                    Join us at Greenfuture in the fight against climate change.
                </p>
            </div>
        </section>
        
        {/* <Hero/> */}

        <section className='w-auto min-h-[90vh] pt-10'>
            <div className=' py-8 mt-10 flex max-md:flex-col-reverse  gap-8 items-center px-6 max-w-[1100px] mx-auto'>
                    <div id='animate' className='grid grid-cols-2 gap-2 md:max-w-[50%]'>
                    <img src="/climate pic.webp" alt="" className='rounded-xl w-full h-full' />
                    <img src="/action pic.jpg" alt="" className='rounded-xl w-full h-full' />
                    <img src="/Climate_Action.jpg" alt="" className='rounded-xl w-full h-full' />
                    <img src="/3rs2.png" alt="" className='rounded-xl w-full h-full' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-4xl font-bold text-center md:text-left pt-4'>Innovative Solutions for a Greener Future </h4>
                    </div>
                </div>
        </section>
        {/* para sa events */}
        
        <UpcommingEvents eventData={eventData}/>

        {/* para sa Event Recent */}
            <section id='recent' className="relative bg-cover bg-center h-[80vh] bg-[url('/energy-efficiency.jpeg')]">
                <div className="absolute inset-0 bg-green-900 opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4 text-white">Act Now for a Better Tomorrow</h1>
                    <p className="text-lg mb-6 text-white">Join our climate change movement and be a part of the solution.</p>
                    <div className='flex justify-center items-center mt-8'>
                    <Link to={'/eventreports'}
                    className="bg-green-500 hover:bg-green-700 text-white py-4 px-6 rounded-full shadow-lg transition duration-300">
                      View Recent Events</Link>
                    </div>
                </div>
            </section>

        <section className='w-auto min-h-[75vh]'>
            <div className='py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto'>
                    <div id='animate' className=''>
                        <p className='text-lg tracking-wide leading-10'>
                        Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                        It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                        The goal encourages global cooperation to reduce carbon emissions, enhance disaster risk management, and promote sustainable practices to protect ecosystems and ensure a sustainable future for all. 
                        </p>
                    </div>
                    <div>
                    <img id='animate' src="/climate action2.png" alt="" className='rounded-xl w-full h-auto'/>
                    </div>
                
                </div>
        </section>
        
        <section className=' w-auto pt-8 min-h-[90vh]'>
            <div id='animate' className='py-8 mt-20 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto'>
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


        <section id='climateAction' className='w-auto min-h-[100vh]'>
             <div id='animate' className='text-center pt-10'>
                <h4 className='mb-8 text-4xl text-center font-bold text-green-600'
               >Climate Action: Turning Ideas into Impact<br/>
           </h4>
            </div>
            <div className='py-16 mt-8 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto'>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/renewable energy.webp" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Transition to Renewable Energy</h4>
                        <p className='text-md max-w-[400px] '>Shift from fossil fuels to clean energy sources like solar, wind, hydro, and geothermal power.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/energy-efficiency.jpeg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Energy Efficiency</h4>
                        <p className='text-md max-w-[400px] '>Implement energy-saving practices in homes, businesses, and industries by using efficient appliances and optimizing energy usage.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/reforest.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Reforestation and Afforestation</h4>
                        <p className='text-md max-w-[400px] '>Protect existing forests and plant new trees to absorb carbon dioxide, creating carbon sinks.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/electric vehicle.webp" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Promote Electric Vehicles (EVs)</h4>
                        <p className='text-md max-w-[400px] '>Encourage the use of electric cars, buses, and bikes to reduce pollution from traditional combustion engines.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/3rs.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Reduce, Reuse, and Recycle</h4>
                        <p className='text-md max-w-[400px] '>Minimize waste production and encourage recycling programs to reduce the amount of waste in landfills, which produce harmful greenhouse gases.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/conserve water.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Conservation of Water Resources</h4>
                        <p className='text-md max-w-[400px] '>Protect water bodies and adopt water-efficient practices in agriculture, industry, and households to safeguard this vital resource.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/plant based diet.jpg" alt="" className='rounded-xl w-[120px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Adopt a Plant-Based Diet</h4>
                        <p className='text-md max-w-[400px] '>Reducing meat consumption can lower methane emissions from livestock and decrease the land and water used for animal farming.</p>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-4 '>
                    <div id='animate'>
                        <img src="/resilient climate.webp" alt="" className='rounded-xl w-[100px] h-[100px]' />
                    </div>
                    <div id='animate'>
                        <h4 className='text-xl font-bold py-2'>Invest in Climate-Resilient Infrastructure</h4>
                        <p className='text-md max-w-[400px] '>Develop infrastructure that can withstand the impacts of climate change, such as floods, heat waves, and rising sea levels.</p>
                    </div>
                </div>
                   
            </div>
        </section>

        {/* <footer className='w-auto h-auto bg-[#76f4C4]'>
            <div className='max-w-[1000px] mx-auto py-16 px-4 grid gap-4'>
                <div className=' text-center'>
                    <h4 className='text-2xl font-bold '>"The greatest threat to our planet is the belief that someone else will save it." </h4>
                </div>
            </div>
            <p className='text-center pb-4'>All rights reserved 2024</p>
        </footer> */}
        <ContactUs/>
        <Footer/>
        <ToastContainer/>

    </section>
  );
};

export default Homepage;
