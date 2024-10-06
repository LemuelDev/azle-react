import React from 'react'

const AdminNavbar = () => {

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('-translate-x-full');
    }
  }
  return (
    <nav className=" shadow p-4">
    <div className="container mx-auto flex justify-between px-4 items-center lg:justify-end gap-4">

      <button className="block lg:hidden" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
       </button>
        
       <div className="flex justify-end gap-4 items-center">
       <button className="btn btn-error" onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()}>
            Logout
          </button>
   
      {/* modal */}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="text-xl font-bold">Confirmation</h3>
                <p className="pt-4 text-lg text-center">Are you sure you want to logout ?</p>
                <div className="modal-action">
                  <form action="" method="POST">
                    <button className="btn btn-error">Logout</button>
                  </form>
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
       

       </div>
    </div>

   
</nav>

  )
}

export default AdminNavbar