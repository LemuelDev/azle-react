import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // To handle redirects
import { ToastContainer, toast } from "react-toastify";

const AdminLogin = () => {
  // State for form inputs and fetched data
  const [adminData, setAdminData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // For navigation

  // Fetch the data from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get-admin");
        const data = await response.json();
        setAdminData(data); // Store admin data in state
      } catch (error) {
        toast.error("Error fetching data from database");
      }
    };
    fetchData();
  }, []);

  // Handle form submission
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form refresh

    try {
      // Check for matching admin credentials
      const foundAdmin = adminData.find(
        (admin: { username: string; password: string }) => {
          return admin.username === username && admin.password === password;
        }
      );

      if (foundAdmin) {
        localStorage.setItem("adminAuthenticated", "true");
        // Redirect to the admin dashboard on success
        navigate("/admin");
      } else {
        setErrorMessage("Invalid username or password");
        toast.error("Invalid username or password"); // Show toast message
      }
    } catch (error) {
      toast.error("Error logging in");
    }
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/blob-scene-haikei.png')` }}
    >
      <div className="flex justify-center items-center max-w-[500px] shadow-xl px-10 py-6 backdrop-blur-[6px] backdrop-saturate-[190%] bg-white/40 rounded-[12px] border border-[#d1d5db]/30">
        <div className="grid gap-4 text-center py-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src="./favicon.ico" alt="Logo" />
            <h4 className="text-3xl font-bold">Admin Login</h4>
          </div>

          <form
            onSubmit={handleLogin}
            className="grid gap-4 items-center text-left px-8"
          >
            <div className="grid">
              <label htmlFor="username" className="text-lg">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black"
              />
            </div>

            <div className="grid">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-lg rounded-md px-10 py-2 bg-transparent outline-none border-2 border-gray-600 text-black placeholder:text-black"
              />
            </div>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <button className="px-10 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white mt-4 text-lg font-bold">
              LOGIN
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AdminLogin;
