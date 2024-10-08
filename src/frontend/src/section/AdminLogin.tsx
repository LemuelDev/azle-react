import React, { useState, useEffect } from "react";
import axios from "axios"; // axios can be used for making requests instead of fetch
import { useNavigate } from "react-router-dom"; // To handle redirects
import { ToastContainer, toast } from "react-toastify";

// Define the Admin interface
interface Admin {
  username: string;
  password: string;
}

const AdminLogin = () => {
  // State for form inputs and fetched data
  const [adminData, setAdminData] = useState<Admin[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // For navigation

  // // Fetch the data from the database
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/get-admin");
  //       setAdminData(response.data); // Store admin data in state
  //     } catch (error) {
  //       toast.error("Error fetching data from database");
  //     }
  //   };
  //   fetchData();
  // }, []);

  // Handle form submission
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form refresh
    const foundAdmin = adminData.find(
      (admin) => admin.username === username && admin.password === password
    );

    if (foundAdmin) {
      localStorage.setItem("adminAuthenticated", "true");
      // Redirect to the admin dashboard on success
      navigate("/admin");
    } else {
      setErrorMessage("Invalid username or password");
      toast.error("Invalid username or password"); // Show toast message
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
                required // Added required attribute
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
                required // Added required attribute
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <button className="px-10 py-3 rounded-md bg-lime-600 hover:bg-lime-700 text-white mt-4 text-lg font-bold">
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
