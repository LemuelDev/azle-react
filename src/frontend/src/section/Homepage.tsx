import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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
  event_name: string;
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

  return (
    <section>
      <Navbar />
      <section
        className="min-h-screen w-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/mesh-gradient (1).png')` }}
      >
        <div className="flex items-center justify-center text-center gap-4 flex-col pt-40 sm:pt-60  max-w-[950px] mx-auto px-4">
          <h3 className="sm:text-5xl text-4xl font-bold leading-[60px] ">
            GreenFuture Volunteer
          </h3>
          <p className="pt-4 text-xl tracking-wide ">
            Be the change. Volunteer for climate action and help protect the
            planet for future generations.
          </p>
        </div>
      </section>

      <section className=" w-auto pt-8 min-h-[90vh]">
        <div className="py-8 mt-20 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto">
          <div>
            <h4 className="text-4xl font-bold text-left pt-4">
              A Sustainable Development Goal for Climate Action
            </h4>
          </div>
          <div className="">
            <p className="text-lg tracking-wide leading-10">
              Climate Action, one of the Sustainable Development Goals (SDG 13),
              focuses on urgent actions to combat climate change and its
              impacts. It emphasizes the need to strengthen resilience and
              adaptive capacity to climate-related hazards, integrate climate
              measures into policies, and raise awareness. The goal encourages
              global cooperation to reduce carbon emissions, enhance disaster
              risk management, and promote sustainable practices to protect
              ecosystems and ensure a sustainable future for all.
            </p>
          </div>
        </div>
      </section>

      <section className="w-auto min-h-[75vh]">
        <div className="py-8 mt-10 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto">
          <div className="">
            <p className="text-lg tracking-wide leading-10">
              Climate Action, one of the Sustainable Development Goals (SDG 13),
              focuses on urgent actions to combat climate change and its
              impacts. It emphasizes the need to strengthen resilience and
              adaptive capacity to climate-related hazards, integrate climate
              measures into policies, and raise awareness. The goal encourages
              global cooperation to reduce carbon emissions, enhance disaster
              risk management, and promote sustainable practices to protect
              ecosystems and ensure a sustainable future for all.
            </p>
          </div>
          <div>
            <img
              src="/climate action2.png"
              alt=""
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-auto min-h-[90vh] pt-10">
        <div className="py-8 mt-10 flex max-md:flex-col-reverse  gap-8 items-center px-6 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-2 md:max-w-[50%]">
            <img
              src="/climate pic.webp"
              alt=""
              className="rounded-xl w-full h-full"
            />
            <img
              src="/action pic.jpg"
              alt=""
              className="rounded-xl w-full h-full"
            />
            <img
              src="/Climate_Action.jpg"
              alt=""
              className="rounded-xl w-full h-full"
            />
            <img src="/3rs2.png" alt="" className="rounded-xl w-full h-full" />
          </div>
          <div>
            <h4 className="text-4xl font-bold text-center md:text-left pt-4">
              Innovative Solutions for a Greener Future{" "}
            </h4>
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
            {eventData && Array.isArray(eventData) && eventData.length > 0 ? (
              eventData.map((event) => (
                <div
                  key={event.event_id}
                  className="p-4 bg-gray-50 rounded-lg shadow-md"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {event.event_name}
                  </h3>
                  <img
                    src="/resilient climate.webp"
                    alt={event.event_name}
                    className="rounded-xl mt-2 w-full h-[40vh] md:w-[25vw] object-cover mx-auto"
                  />
                  <p className="mt-4 max-h-20 overflow-hidden">
                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                      {event.event_details}
                    </span>
                  </p>
                  <Link
                    to="/volunteer"
                    className="text-green-600 font-semibold hover:underline mb-4 mt-4 block"
                  >
                    Volunteer Now
                  </Link>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-64 md:col-span-3">
                <p className="text-lg text-gray-600 text-center">
                  No upcoming events yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="w-auto min-h-[75vh]">
        <div>
          <div className="pt-6">
            <h4 className="text-4xl text-center font-bold text-black">
              Recent Event
              <br />
            </h4>
          </div>
          {eventReport &&
          Array.isArray(eventReport) &&
          eventReport.length > 0 ? (
            <div className="py-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1200px] mx-auto">
              <div>
                <div className="h-[60vh] w-[50vw]">
                  <img
                    src="/resilient climate.webp"
                    alt={eventReport[0].event.event_name || "Event Image"}
                    className="w-full h-full rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="">
                <h4 className="text-2xl text-center font-bold text-green-500">
                  {eventReport[0].event.event_name || "Tree Planting"}
                  <br />
                </h4>
                <p className="text-lg tracking-wide leading-10">
                  {eventReport[0].report_description ||
                    "Climate Action, one of the Sustainable Development Goals (SDG 13), focuses on urgent actions to combat climate change and its impacts. It emphasizes the need to strengthen resilience and adaptive capacity to climate-related hazards, integrate climate measures into policies, and raise awareness."}
                </p>
                {/* Event date and details */}
                <div className="block items-start justify-start mt-5 py-3 rounded-lg pl-2 border-l-4 border-green-500 bg-green-100">
                  <span className="text-gray-700 text-sm text-center">
                    Date of event:{" "}
                    <span className="text-gray-500">
                      {eventReport[0].event.event_date ||
                        "Thursday, October 17, 2024"}
                    </span>
                  </span>
                  <br />
                  <span className="text-gray-700 text-sm text-center">
                    Time:{" "}
                    <span className="text-gray-500">
                      {eventReport[0].event.event_time || "09:46 PM"}
                    </span>
                  </span>
                  <br />
                  <span className="text-gray-700 text-sm text-center">
                    Address of event:{" "}
                    <span className="text-gray-500">
                      {eventReport[0].event.event_address ||
                        "Sinabacan, Cande, Zambales"}
                    </span>
                  </span>
                  <br />
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-gray-600">
                No recent events to display.
              </p>
            </div>
          )}
        </div>
        <>
          <div className="text-center">
            <Link
              to={"/event_reports"}
              className="text-green-600 text-xl font-semibold underline mb-4 mt-4 block"
            >
              See more
            </Link>
          </div>
          <hr className="w-[70vw] m-auto" />
        </>
      </section>

      <section className="w-auto min-h-[100vh] pt-20">
        <div className="text-center pt-10">
          <h4 className="text-4xl font-bold  pt-4">
            Climate Action: Turning Ideas into Impact
          </h4>
        </div>
        <div className="py-16 mt-8 grid grid-col-span-1 md:grid-cols-2 gap-7 items-start px-6 max-w-[1100px] mx-auto">
          <div className="flex items-start justify-center gap-4 ">
            <div>
              <img
                src="/renewable energy.webp"
                alt=""
                className="rounded-xl w-[120px] h-[100px]"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold py-2">
                Transition to Renewable Energy
              </h4>
              <p className="text-md max-w-[400px] ">
                Shift from fossil fuels to clean energy sources like solar,
                wind, hydro, and geothermal power.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-4 ">
            <div>
              <img
                src="/energy-efficiency.jpeg"
                alt=""
                className="rounded-xl w-[120px] h-[100px]"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold py-2">Energy Efficiency</h4>
              <p className="text-md max-w-[400px] ">
                Implement energy-saving practices in homes, businesses, and
                industries by using efficient appliances and optimizing energy
                usage.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-4 ">
            <div>
              <img
                src="/reforest.jpg"
                alt=""
                className="rounded-xl w-[120px] h-[100px]"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold py-2">
                Reforestation and Afforestation
              </h4>
              <p className="text-md max-w-[400px] ">
                Protect existing forests and plant new trees to absorb carbon
                dioxide, creating carbon sinks.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-4 ">
            <div>
              <img
                src="/electric vehicle.webp"
                alt=""
                className="rounded-xl w-[120px] h-[100px]"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold py-2">
                Promote Electric Vehicles (EVs)
              </h4>
              <p className="text-md max-w-[400px] ">
                Encourage the use of electric cars, buses, and bikes to reduce
                pollution from traditional combustion engines.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-4 ">
            <div>
              <img
                src="/3rs.jpg"
                alt=""
                className="rounded-xl w-[120px] h-[100px]"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold py-2">
                Reduce, Reuse, and Recycle
              </h4>
              <p className="text-md max-w-[400px] ">
                Minimize waste production and encourage recycling programs to
                reduce the amount of waste in landfills, which produce harmful
                greenhouse gases.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-4 ">
            <div>
              <img
                src="/conserve water.jpg"
                alt=""
                className="rounded-xl w-[120px] h-[100px]"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold py-2">
                Conservation of Water Resources
              </h4>
              <p className="text-md max-w-[400px] ">
                Protect water bodies and adopt water-efficient practices in
                agriculture, industry, and households to safeguard this vital
                resource.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-4 ">
            <div>
              <img
                src="/plant based diet.jpg"
                alt=""
                className="rounded-xl w-[120px] h-[100px]"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold py-2">
                Adopt a Plant-Based Diet
              </h4>
              <p className="text-md max-w-[400px] ">
                Reducing meat consumption can lower methane emissions from
                livestock and decrease the land and water used for animal
                farming.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-4 ">
            <div>
              <img
                src="/resilient climate.webp"
                alt=""
                className="rounded-xl w-[100px] h-[100px]"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold py-2">
                Invest in Climate-Resilient Infrastructure
              </h4>
              <p className="text-md max-w-[400px] ">
                Develop infrastructure that can withstand the impacts of climate
                change, such as floods, heat waves, and rising sea levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-auto h-auto bg-[#76f4C4]">
        <div className="max-w-[1000px] mx-auto py-16 px-4 grid gap-4">
          <div className=" text-center">
            <h4 className="text-2xl font-bold ">
              "The greatest threat to our planet is the belief that someone else
              will save it."{" "}
            </h4>
          </div>
          <p className="text-lg text-right">– Robert Swan</p>
        </div>
        <p className="text-center pb-4">All rights reserved 2024</p>
      </footer>

      <ToastContainer />
    </section>
  );
};

export default Homepage;
