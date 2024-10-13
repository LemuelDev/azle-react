import AppRoutes from "./routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./section/Homepage";
import Volunteerpage from "./section/Volunteerpage";
import AdminLogin from "./section/AdminLogin";
import AdminDashboard from "./section/AdminDashboard";

function App() {
  return (
    <main className="w-auto h-auto">
         <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/volunteer" element={<Volunteerpage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
    </main>
  );
}

export default App;
