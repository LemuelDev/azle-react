import React from 'react'
import { useLocation, Link } from 'react-router-dom';
const AdminSidebar = () => {

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('-translate-x-full');
    }
  }

  const location = useLocation(); // Get the current location (URL)
  const isActiveRoute = (routeName: string) => location.pathname === routeName;

  return (
    <aside 
    id="sidebar" 
    className='shadow-xl rounded-lg w-64 transition-all duration-300 ease-in-out transform lg:translate-x-0 -translate-x-full lg:relative fixed h-[100vh] lg:h-[calc(100vh+200px)]  bottom-0 z-[1000] bg-gray-50'>
    <div className="flex flex-col h-full p-4">
        <div className="flex justify-end">
            <button 
            id="sidebarToggle" 
            className="block lg:hidden focus:outline-none items-end"
            onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />    
                </svg>
            </button>
        </div>

        <ul className="mt-4 flex-grow">
            <li className="mb-2 text-center">
                <a href="#" className="text-center font-bold text-lg flex justify-center items-center gap-2">ADMIN <span><i className='bx bx-user'></i></span> </a>
            </li>

           <li className="mb-2">
            <Link
              to="/admin/events"
              className={isActiveRoute('/admin/events') 
                ? 'block p-2 bg-gray-700 text-white rounded' 
                : 'block p-2 hover:bg-gray-700 hover:text-white rounded'}
            >
              Events
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="/admin/volunteer-list"
              className={isActiveRoute('/admin/volunteer-list') 
                ? 'block p-2 bg-gray-700 text-white rounded' 
                : 'block p-2 hover:bg-gray-700 hover:text-white rounded'}
            >
              Volunteer List
            </Link>
          </li>

      <li className="mb-2">
        <Link
          to="/admin/event-reports"
          className={isActiveRoute('/admin/event-reports') 
            ? 'block p-2 bg-gray-700 text-white rounded' 
            : 'block p-2 hover:bg-gray-700 hover:text-white rounded'}
        >
          Event Reports
        </Link>
      </li>

      <li className="mb-2">
        <Link
          to="/admin/profile"
          className={isActiveRoute('/admin/profile') 
            ? 'block p-2 bg-gray-700 text-white rounded' 
            : 'block p-2 hover:bg-gray-700 hover:text-white rounded'}
        >
          Profile
        </Link>
      </li>
        </ul>
        
    </div>
</aside>

  )
}

export default AdminSidebar