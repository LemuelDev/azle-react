import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './section/Homepage';
import Volunteerpage from './section/Volunteerpage';
import AdminLogin from './section/AdminLogin';
import AdminDashboard from './section/AdminDashboard';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/volunteer" element={<Volunteerpage />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
