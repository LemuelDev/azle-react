import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

interface Admin {
  admin_id: number;
  username: string;
  password: string;
}
const AdminSignup: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>(""); // Explicit type
  const [password, setPassword] = useState<string>(""); // Explicit type
  const [isLoading, setIsLoading] = useState(false);

  // Function to check if admin already exists
  const checkAdminExists = async (username: string): Promise<boolean> => {
    // Explicit type
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_CANISTER_URL}/get-admin`,
        {
          params: { username }, // Send the username as a query parameter
        }
      );
      const admins = response.data.data; // Assuming this is where your admin data is stored
      const adminExists = admins.some(
        (admin: { username: string }) => admin.username === username
      );

      return adminExists;
    } catch (error) {
      console.error("Error checking admin existence:", error);
      toast.error("Error checking admin existence");
      return false; // Assume the admin doesn't exist on error
    }
  };

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);

    // Check if admin already exists
    const adminExists = await checkAdminExists(username);
    if (adminExists) {
      toast.error("Admin already exists. Please choose a different username.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CANISTER_URL}/create-admin`,
        {
          username: username,
          password: password,
        }
      );
      // nirevise ko lang to kuys
      const admin = response.data.data; 
      if (admin) {
        // Set the admin data directly in localStorage
        localStorage.setItem(
          "adminData",
          JSON.stringify({
            admin_id: admin.admin_id,
            username: admin.username,
            password: admin.password,
          })
        );
        localStorage.setItem("adminAuthenticated", "true");
    
        // Navigate to the admin dashboard
        navigate("/admin");
      } else {
        throw new Error("No admin data found in response");
      }
    } catch (error) {
      console.log("SIGNUP ERROR:", error);
      toast.error("Signup error");
    } finally {
      setIsLoading(false);
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
            <h4 className="text-3xl font-bold">Admin Signup</h4>
          </div>

          <form
            onSubmit={handleSignup}
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
              className="px-10 py-3 rounded-md text-white mt-4 text-lg font-bold bg-lime-600 hover:bg-lime-700"
              type="submit"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? "Signing up..." : "Signup"} {/* Toggle text */}
            </button>
            <Link
              to={"/admin-login"}
              className="pt-3 text-center text-lg text-black hover:text-blue-500"
            >
              Already have an account? Login.
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AdminSignup;
