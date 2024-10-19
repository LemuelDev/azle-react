import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the Admin interface
interface Admin {
  admin_id: number;
  username: string;
  password: string;
}
const AdminLogin = () => {
  // State for form inputs and fetched data
  const [adminData, setAdminData] = useState<Admin[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminDataLocalStorage, setAdminDataLocalStorage] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_CANISTER_URL}/get-admin`
        );
        setAdminData(response.data.data);
      } catch (error) {
        toast.error("Error fetching data from database");
      } finally {
        setIsLoading(false); // Stop loading after fetch
      }
    };
    fetchData();
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form refresh

    if (isLoading) {
      toast.info("Still fetching data, please wait...");
      return;
    }

    const foundAdmin = adminData.find((admin) => {
      if (admin.username === username && admin.password === password) {
        // get the value to set in local storage
        const data = {
          admin_id: admin.admin_id,
          username: admin.username,
          password: admin.password,
        };
        setAdminDataLocalStorage(data);
        return true;
      }
    });

    if (foundAdmin) {
      localStorage.setItem("adminAuthenticated", "true");
      console.log(adminData);
      localStorage.setItem("adminData", JSON.stringify(adminDataLocalStorage));
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
                required
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
                required
              />
            </div>

            <button
              className={`px-10 py-3 rounded-md text-white mt-4 text-lg font-bold ${
                isLoading ? "bg-gray-500" : "bg-lime-600 hover:bg-lime-700"
              }`}
              type="submit"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Loading..." : "LOGIN"}
            </button>
            <Link
              to={"/admin-signup"}
              className="pt-3 text-center text-lg text-black hover:text-blue-500"
            >
              Don't have an account? Signup.
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AdminLogin;
