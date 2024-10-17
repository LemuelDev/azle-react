import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./section/Homepage";
import Volunteerpage from "./section/Volunteerpage";
import AdminLogin from "./section/AdminLogin";
import AdminDashboard from "./section/AdminDashboard";
import 'react-toastify/dist/ReactToastify.css';
import AdminSignup from "./section/AdminSignup";
function App() {
  return (
    <main className="w-auto h-auto">
      {/* Using HashRouter to ensure client-side routing works */}
      <Router>
        <Routes>
          {/* Define routes with their respective components */}
          <Route path="/" element={<Homepage />} />
          <Route path="/volunteer" element={<Volunteerpage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
