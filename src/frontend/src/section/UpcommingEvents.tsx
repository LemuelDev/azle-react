import { Link } from "react-router-dom";
interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
  }

const UpcommingEvents = () => {

  return (
    <section id='events' className="pt-20 pb-20 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4">
          <h4 className='mb-8 text-4xl text-center font-bold text-green-600'
             >Upcoming Events <br/>
         </h4>
      <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
        {/* {upcomingEvents.map((event) => (
          <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover" // Style for the image
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-gray-800 mt-4">{event.description}</p>
              <div className="mt-4">
                <Link to={'/volunteer'} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  </section>
  )
}

export default UpcommingEvents