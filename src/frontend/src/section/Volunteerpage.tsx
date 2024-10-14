import React from 'react'
import { useEffect } from 'react';
import  { useState } from 'react';


const Volunteerpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',       
    middlename: '',
    extensionname: '',
    contact: '',
    gender: '',
    address: '',
    email: '',
});

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Volunteer Data Submitted:', formData);
// };

const currentDate = new Date();

const dateInWords = currentDate.toLocaleDateString('en-US', {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric',
});

const timeInWords = currentDate.toLocaleTimeString('en-US', {
hour: '2-digit',
minute: '2-digit',
hour12: true,
});
   
return (
  <div className="bg-gray-100 min-h-screen">
          <section className="relative bg-cover bg-center h-[80vh] bg-[url('/bg.png')]">
              <div className="absolute inset-0 bg-green-900 opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                  <h1 className="text-5xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100">Act Now for a Better Tomorrow</h1>
                  <p className="text-lg mb-6"
                  data-aos="fade-up"
                  data-aos-delay="100">Join our climate change movement and be a part of the solution.</p>
                  <a href="#sign-up" className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
                  data-aos="fade-up"
                  data-aos-delay="300">Become a Volunteer</a>
              </div>
          </section>

          
          {/* <section className="py-16 bg-white">
              <div className="container mx-auto px-4 text-center"
                  data-aos="fade-up"
                  data-aos-delay="100">
                  <h2 className="text-3xl font-bold text-green-600 mb-6"
                  data-aos="fade-up"
                  data-aos-delay="100">Our Key Initiatives</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className='h-[60vh] w-[50w]'>
                          <img src="/resilient climate.webp" alt="" className='w-full h-full'/>
                      </div>
                      <div className=''>
                          <p className='text-lg tracking-wide leading-10'
                          data-aos="fade-up"
                          data-aos-delay="300">
                          Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                          It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness.
                          The goal encourages global cooperation to reduce carbon emissions, enhance disaster risk management, and promote sustainable practices to protect ecosystems and ensure a sustainable future for all. 
                          </p>
                      </div>
                  </div>
              </div>
          </section> */}
          
          <section className=' w-auto pt-8 min-h-[90vh]'>
              <div className='pt-4'>

                  <h4 className='text-4xl text-center font-bold text-green-600'
                  >Event Discription <br/>
                  
                  </h4>
              </div>
              <div className='py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto'>
                  <div>
                      <div className='h-[60vh] w-[50w]'
                      data-aos="fade-up"
                      data-aos-delay="100">
                          <img src="/resilient climate.webp" alt="" className='w-full h-full rounded-lg shadow-md'/>
                          
                      </div>
                  </div>
                  <div className=''>
                  <div>
                      <p className='text-lg tracking-wide leading-10'
                          data-aos="fade-up"
                          data-aos-delay="300">
                          Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts.
                          It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness. 
                      </p>
                      {/* date of events */}
                      <div className='block items-start justify-start mt-5 py-3 rounded-lg pl-2 border-l-4  border-green-500 bg-green-100' 
                          data-aos="fade-up"
                          data-aos-delay="300">
                          <span className='text-gray-700 text-sm text-center'>Date of event: <span className='text-gray-500'>{dateInWords}</span></span><br/>
                          <span className='text-gray-700 text-sm text-center'>Time: <span className='text-gray-500'>{timeInWords}</span></span><br/>
                          <span className='text-gray-700 text-sm text-center'>Address of event: <span className='text-gray-500'>
                              Sinabacan, Cande, Zambales
                          </span></span><br/>
                      </div>
                  </div>
                  </div>
              </div>
              
          </section>
          
          <div className="bg-gray-100 min-h-screen">
          <section id="sign-up" className="py-16 bg-green-50">
              <div className="w-[80%] mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold text-green-600 mb-6"
                  data-aos="fade-up"
                  data-aos-delay="100">Sign Up to Make a Difference</h2>
                  <div className='grid grid-cols-1 rounded-xl md:grid-cols-2 shadow-xl '>
                      <div className=''
                      data-aos="fade-up"
                      data-aos-delay="300">
                          <img src="/signupbg.png" alt="" className='md:w-full h-full '/>
                      </div>
                  <form /*onSubmit={handleSubmit}*/ className="w-full mx-auto bg-white p-8 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay="300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                              <label htmlFor="firstname" className="block text-left mb-2 text-sm font-medium text-gray-900">First Name</label>
                              <input
                                  type="text"
                                  id="firstname"
                                  name="firstname"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                  placeholder="Your first name"
                                  value={formData.firstname}
                                  // onChange={handleChange}
                                  required
                              />
                          </div>
                          <div>
                              <label htmlFor="lastname" className="block text-left mb-2 text-sm font-medium text-gray-900">Last Name</label>
                              <input
                                  type="text"
                                  id="lastname"
                                  name="lastname"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                  placeholder="Your last name"
                                  value={formData.lastname}
                                  // onChange={handleChange}
                                  required
                              />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div>
                              <label htmlFor="middlename" className="block text-left mb-2 text-sm font-medium text-gray-900">Middle Name</label>
                              <input
                                  type="text"
                                  id="middlename"
                                  name="middlename"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                  placeholder="Your middle name"
                                  value={formData.middlename}
                                  // onChange={handleChange}
                              />
                          </div>
                          <div>
                              <label htmlFor="extensionname" className="block text-left mb-2 text-sm font-medium text-gray-900">Extension Name</label>
                              <input
                                  type="text"
                                  id="extensionname"
                                  name="extensionname"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                  placeholder="Your extension name"
                                  value={formData.extensionname}
                                  // onChange={handleChange}
                              />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div>
                              <label htmlFor="contact" className="block text-left mb-2 text-sm font-medium text-gray-900">Contact No.</label>
                              <input
                                  type="text"
                                  id="contact"
                                  name="contact"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                  placeholder="Your contact number"
                                  value={formData.contact}
                                  // onChange={handleChange}
                                  required
                              />
                          </div>
                          <div>
                              <label htmlFor="gender" className="block text-left mb-2 text-sm font-medium text-gray-900">Gender</label>
                              <select
                                  id="gender"
                                  name="gender"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                  value={formData.gender}
                                  // onChange={handleChange}
                                  required
                              >
                                  <option value="">Select your gender</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                              </select>
                          </div>
                      </div>

                      <div className="mt-4">
                          <label htmlFor="address" className="block text-left mb-2 text-sm font-medium text-gray-900">Address</label>
                          <input
                              type="text"
                              id="address"
                              name="address"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                              placeholder="Your address"
                              value={formData.address}
                              // onChange={handleChange}
                              required
                          />
                      </div>

                      <div className="mt-4">
                          <label htmlFor="email" className="block text-left mb-2 text-sm font-medium text-gray-900">Email</label>
                          <input
                              type="email"
                              id="email"
                              name="email"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                              placeholder="Your email"
                              value={formData.email}
                              // onChange={handleChange}
                              required
                          />
                      </div>

                      <button
                          type="submit"
                          className="bg-green-600 text-white py-3 px-8 rounded-full mt-6 hover:bg-green-700 transition duration-300"
                      >
                          Join Our Mission
                      </button>
                  </form>
                  </div>
              </div>
          </section>
      </div>
      
      </div>

  )
}

export default Volunteerpage