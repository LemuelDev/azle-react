import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProfile = () => {

  const [adminID, setAdminID] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("adminData") || '""');
    if (data) {
      setAdminID(data.id);
      setUsername(data.username);
      setPassword(data.password);
    }
    console.log(username);
    console.log(password);
  }, []);

  const handleUpdateUsername = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading2(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CANISTER_URL}/update-admin-username`,
        {
          admin_id: adminID,
          username: username,
        }
      );
      toast.success("Username updated successfully");
    } catch (error) {
      toast.error(`Error updating username`);
    } finally {
      setIsLoading2(false);
    }
  };

  const handleUpdatePassword = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true);
    if (currentPassword === password) {
      if (newPassword === confirmPassword) {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_CANISTER_URL}/update-admin-password`,
            {
              admin_id: adminID,
              password: newPassword,
            }
          );
          toast.success("Password updated successfully");
          setPassword(newPassword);
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
        } catch (error) {
          toast.error(`Error updating password`);
        } finally {
          setIsLoading(false);
        }
      } else {
        toast.error("New password and confirm password do not match");
        setIsLoading(false);
      }
    } else {
      toast.error("Current password is incorrect");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold pb-4 py-2 tracking-wide max-lg:text-center">
        Admin Profile
      </h1>

      <div className="grid gap-6 shadow-xl rounded-xl">
        <div className="shadow-sm rounded-xl p-8">
          {/* Update Username */}
          <form onSubmit={handleUpdateUsername} className="grid grid-cols-2 gap-6 items-center">
            <div className="flex max-sm:flex-col gap-4 items-center col-span-2">
              <div className="flex gap-4 justify-start items-center">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"
                />
              </div>
              <div className="max-w-[600px]">
                <button
                  type="submit"
                  className="px-7 py-3 rounded-md outline-none bg-green-500 hover:bg-green-600 text-white"
                  disabled={isLoading2}
                >
                  {isLoading2 ? "Updating.." : "Update"}
                </button>
              </div>
            </div>
          </form>

          {/* Update Password */}
          <form onSubmit={handleUpdatePassword} className="grid gap-4 grid-cols-1 col-span-2 max-w-[770px]">
            <h1 className="text-xl font-bold py-3 max-sm:text-center">
              Update Password
            </h1>
            <div className="flex gap-4 justify-start items-center w-full">
              <label htmlFor="currentPassword" className="min-w-[150px]">
                Current Password:
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"
              />
            </div>
            <div className="flex gap-4 justify-start items-center w-full">
              <label htmlFor="newPassword" className="min-w-[150px]">
                New Password:
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"
              />
            </div>
            <div className="flex gap-4 justify-start items-center w-full">
              <label htmlFor="confirmPassword" className="min-w-[150px]">
                Confirm Password:
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"
              />
            </div>
            <div className="max-w-[400px] pt-6">
              <button
                className="py-3 px-8 bg-violet-500 hover:bg-violet-600 text-white text-lg rounded-lg outline-none"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
