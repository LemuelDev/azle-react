import React from 'react'
import { useEffect } from 'react';
import  { useState } from 'react';
import Footer from './Footer';
import { useLocation, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const Volunteerpage: React.FC  = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { event } = location.state || {};

    const [firstname, setFirstName] = useState<string>('');
    const [middlename, setMiddlename] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [extensioname, setExtensionname] = useState<string>('');
    const [address , setAddress] = useState<string>('');
    const [contactName, setContactName] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [gender, setGender] =  useState<string>('male');
    const [isLoading, setIsLoading] = useState(false);

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


      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            // Fetch all volunteers to check if the volunteer is already registered
            const allVolunteersResponse = await axios.get(`${import.meta.env.VITE_CANISTER_URL}/get-volunteers`);
            const allVolunteers = allVolunteersResponse.data.data;
    
            // Check if a volunteer with the same details already exists
            const volunteerExists = allVolunteers.some((volunteer: any) => 
                volunteer.firstname === firstname && 
                volunteer.lastname === lastname && 
                volunteer.middlename === middlename &&
                volunteer.extensionname === extensioname &&
                volunteer.gender === gender &&
                volunteer.address === address &&
                volunteer.contact_name === contactName && 
                volunteer.event_name === event.event_name 
                
            );
    
            if (volunteerExists) {
                toast.error("Volunteer is already registered for this event.");
                setIsLoading(false);
                return;  // Stop the execution if already registered
            }
    
            // Proceed to create the volunteer if not already registered
            const response = await axios.post(`${import.meta.env.VITE_CANISTER_URL}/create-volunteer`, {
                firstname: firstname,
                lastname: lastname,
                middlename: middlename ? middlename : "",
                extensionname: extensioname ? extensioname : "",
                contact_name: contactName,
                gender: gender,
                age: age,
                address: address,
                event_name: event.event_name
            });
    
            console.log(response.data);
            toast.success("Signup success!");
            setIsLoading(false);
            
        } catch (error) {
            console.log("Error creating volunteer: ", error);
            toast.error("Error signing up to the event.");
            setIsLoading(false);
        }
    };
    

    
return (
    <div className="bg-gray-100 min-h-screen">
    <section className="relative bg-cover bg-center h-[80vh] bg-[url('/bg.png')]">
        <div className="absolute inset-0 bg-green-900 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4 text-white"
            data-aos="fade-up"
            data-aos-delay="100">{event.event_name}</h1>
            <p className="text-lg mb-6 text-white"
            data-aos="fade-up"
            data-aos-delay="100">These events provide an opportunity to connect with like-minded individuals, gain valuable insights, and become part of a larger movement for change. Your participation can make a significant impact!</p>
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
                    <img src="Climate_Action.jpg" alt="" className='w-full h-full rounded-lg shadow-md'/>
                    
                </div>
            </div>
            <div className=''>
            <div>
                <p className='text-lg tracking-wide leading-10'
                    data-aos="fade-up"
                    data-aos-delay="300">
                    {event.event_details}
                </p>
                {/* date of events */}
                <div className='block items-start justify-start mt-5 py-3 rounded-lg pl-2 border-l-4  border-green-500 bg-green-100' 
                    data-aos="fade-up"
                    data-aos-delay="300">
                    <span className='text-gray-700 text-sm text-center'>Date of event: <span className='text-gray-500'>
                    {new Date(event.event_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                    </span></span><br/>
                    <span className='text-gray-700 text-sm text-center'>Time: <span className='text-gray-500'>
                    {new Date(`1970-01-01T${event.event_time}`).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true, // For 12-hour format with AM/PM
                    })}
                    </span></span><br/>
                    <span className='text-gray-700 text-sm text-center'>Address of event: <span className='text-gray-500'>
                        {event.event_address}
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
            onSubmit={handleSubmit} 
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
    <ToastContainer/>
</div>
</div>


  )
}

export default Volunteerpage