import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // To handle redirects

const AdminLogin = () => {
  // State for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // For navigation

  // Handle form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form refresh

    try {
      // Make the API request to check login credentials
      const response = await axios.post('/api/get-admin', {
        username,
        password,
      });

      // Assume response contains { success: true } if credentials are correct
      if (response.data.success) {
        // Redirect to the admin dashboard on success
        navigate('/admin');
      } else {
        // Show error message if login fails
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/mesh-gradient (1).png')` }}
    >
      <div className="flex justify-center items-center max-w-[500px] shadow-lg rounded-md px-10 py-6 bg-cover bg-center bg-no-repeat">
        <div className="grid gap-4 text-center py-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src="./favicon.ico" alt="" />
            <h4 className="text-3xl font-bold">Admin Login</h4>
          </div>

          <form onSubmit={handleLogin} className="grid gap-4 items-center text-left px-8">
            <div className="grid">
              <label htmlFor="username" className="text-lg">Username</label>
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
              <label htmlFor="password" className="text-lg">Password</label>
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
    </section>
  );
};

export default AdminLogin;
