import React from 'react'
import { useEffect } from 'react';
import  { useState } from 'react';
import Footer from './Footer';

const Volunteerpage = () => {

    const [firstname, setFirstName] = useState<string>('');
    const [middlename, setMiddlename] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [extensioname, setExtensionname] = useState<string>('');
    const [address , setAddress] = useState<string>('');
    const [contactName, setContactName] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [gender, setGender] =  useState<string>('');
    const [isLoading, setIsLoading] = useState(false)

    const handleEventFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
      };
    
      const handleEventMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMiddlename(e.target.value);
      };

      const handleEventLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value);
      };

      const handleEventExtensionNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExtensionname(e.target.value);
      };

      
      const handleEventAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
      };
      const handleEventContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactName(e.target.value);
      };

      const handleEventAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
      };

      const handleEventGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
      };

      

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
            data-aos-delay="100">These events provide an opportunity to connect with like-minded individuals, gain valuable insights, and become part of a larger movement for change. Your participation can make a significant impact!</p>
            <a href="#sign-up" className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay="300">Become a Volunteer</a>
            <div className='flex justify-center items-center mt-8'>
                <svg className="w-[48px] animate-bounce  h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                </svg>
            </div>
        </div>
    </section>

    <section className=' w-auto pt-8 min-h-[90vh]'>
        <div className='pt-4'>

            <h4 className='text-4xl text-center font-bold text-green-600'
            >Event Discription <br/>
            
            </h4>
        </div>
        <div className='border-t-2 border-t-green-500 py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto'>
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
                    <span className='text-gray-700 text-sm text-center'>Date of event: <span className='text-gray-500'></span></span><br/>
                    <span className='text-gray-700 text-sm text-center'>Time: <span className='text-gray-500'></span></span><br/>
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
            <form 
            // onSubmit={handleSubmit} 
            className="w-full mx-auto bg-white p-8 rounded-lg"
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
                            value={firstname}
                            onChange={handleEventFirstNameChange}
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
                            value={lastname}
                            onChange={handleEventLastNameChange}
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
                            value={middlename}
                            onChange={handleEventMiddleNameChange}
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
                            value={extensioname}
                            onChange={handleEventExtensionNameChange}
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
                            value={contactName}
                            onChange={handleEventContactChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-left mb-2 text-sm font-medium text-gray-900">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                            value={gender}
                            onChange={handleEventGenderChange}
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
                    <label htmlFor="age" className="block text-left mb-2 text-sm font-medium text-gray-900">age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                        placeholder="Your age"
                        value={age}
                        onChange={handleEventAgeChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="address" className="block text-left mb-2 text-sm font-medium text-gray-900">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                        placeholder="Your address"
                        value={address}
                        onChange={handleEventAddressChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-green-600 text-white py-3 px-8 rounded-full mt-6 hover:bg-green-700 transition duration-300"
                >
                    {isLoading ? 'Joining..' : 'Join Our Mission'}
                </button>
            </form>
            </div>
        </div>
    </section>
    <Footer/>
</div>
</div>


  )
}

export default Volunteerpage