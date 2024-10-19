import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProfile = () => {
  // data from localstorage to be updated or edit
  const [adminID, setAdminID] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // passwrod
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // get the data and assign it
    const data = JSON.parse(localStorage.getItem("adminData") || '""');
    if (data) {
      console.log(data);
      setAdminID(data.id);
      setUsername(data.username);
      setPassword(data.password);
    }
  }, []);

  const handleUpdateUsername = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_CANISTER_URL}/update-admin-username`,
      {
        admin_id: adminID,
        username: username,
      }
    );
    if (!response) {
      toast.error("Error updating username");
    } else {
      toast.success("Username updated successfully");
    }
  };

  const handleUpdatePassword = async () => {
    // if current password is correct and new password is same as confirm password
    if (currentPassword === password) {
      // if new password is same as confirm password
      if (newPassword === confirmPassword) {
        const response = await axios.post(
          `${import.meta.env.VITE_CANISTER_URL}/update-admin-password`,
          {
            admin_id: adminID,
            password: newPassword,
          }
        );
        if (!response) {
          toast.error("Error updating password");
        } else {
          toast.success("Password updated successfully");
          // set old password into new password
          setPassword(newPassword);
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
        }
      } else {
        toast.error("New password and confirm password do not match");
      }
    } else {
      toast.error("Current password is incorrect");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold pb-4 py-2 tracking-wide max-lg:text-center">
        Admin Profile
      </h1>

      <div className="grid gap-6 shadow-xl rounded-xl">
        <div className="shadow-sm rounded-xl p-8">
          {/* <h4 className="py-4 text-xl font-bold tracking-wide">Admin </h4> */}
          <div className="grid grid-cols-2  gap-6 items-center ">
            <div className="flex max-sm:flex-col gap-4 items-center col-span-2 ">
              <div className="flex gap-4 justify-start items-center">
                <label htmlFor="">Username:</label>
                <input
                  type="text"
                  readOnly
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className=" bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"
                />
              </div>
              <div className="max-w-[600px]">
                <button
                  className="px-7 py-3 rounded-md outline-none bg-green-500 hover:bg-green-600 text-white"
                  onClick={handleUpdateUsername}
                >
                  {" "}
                  Edit Username{" "}
                </button>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-1 col-span-2 max-w-[770px] ">
              <h1 className="text-xl font-bold py-3 max-sm:text-center">
                Update Password
              </h1>
              <div className="flex gap-4 justify-start items-center w-full">
                <label htmlFor="" className="min-w-[150px]">
                  Current Password:
                </label>
                <input
                  type="text"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className=" bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"
                />
              </div>
              <div className="flex gap-4 justify-start items-center w-full">
                <label htmlFor="" className="min-w-[150px]">
                  New Password:
                </label>
                <input
                  type="text"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className=" bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"
                />
              </div>
              <div className="flex gap-4 justify-start items-center w-full">
                <label htmlFor="" className="min-w-[150px]">
                  Confirm Password:
                </label>
                <input
                  type="text"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className=" bg-transparent rounded-lg shadow-lg lg:px-10 px-4 py-3 text-left text-md w-full"
                />
              </div>
              <div className="max-w-[400px] pt-6">
                <button
                  className=" py-3 px-8 bg-violet-500 hover:bg-violet-600 text-white text-lg rounded-lg outline-none"
                  onClick={handleUpdatePassword}
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
