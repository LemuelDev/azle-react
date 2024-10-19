import React, { useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import { Route, Routes } from "react-router-dom";
import Greetings from "../components/Greetings";
import Events from "./Events";
import EventsReport from "./EventsReport";
import AdminProfile from "./AdminProfile";
import TrackEvent from "../components/TrackEvent";
import TrackEventReport from "../components/TrackEventReport";
import NotFound from "../components/NotFound";
import VolunteerList from "./VolunteerList";
import CreateEvent from "./CreateEvent";
import CreateEventReport from "./CreateEventReport";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTrackEvent from "../components/EditTrackEvent";

const AdminDashboard = () => {
  useEffect(() => {
    if (localStorage.getItem("adminAuthenticated") === "true") {
      toast.success("Login Successfully!");
      localStorage.setItem("adminAuthenticated", "false");
    }
  }, []);

  return (
    <section className="flex h-screen">
      {/* sidebar */}
      <AdminSidebar />

      {/* navbar + dashboad */}
      <div className="flex-1 flex flex-col w-full">
        <AdminNavbar />
        <main className="flex-1 p-6" id="main-content">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Greetings />} />
              <Route path="events" element={<Events />} />
              <Route path="volunteer-list" element={<VolunteerList />} />
              <Route path="event-reports" element={<EventsReport />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="create-event" element={<CreateEvent />} />
              <Route path="track-event" element={<TrackEvent />} />
              <Route path="track-event/edit" element={<EditTrackEvent />} />
              <Route path="track-event-report" element={<TrackEventReport />} />
              <Route
                path="create-event-report"
                element={<CreateEventReport />}
              />

              {/* Default route for 404 page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AdminDashboard;
