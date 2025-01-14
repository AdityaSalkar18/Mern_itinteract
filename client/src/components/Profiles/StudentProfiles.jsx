import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'

const StudentProfile = () => {
  return (
    <>
        <Navbar/>
        <div className="container mx-auto px-4 my-8" style={{ textAlign: "center" }}>
  <ul
    style={{
      listStyle: "none", // Remove bullet points
      display: "flex",
      justifyContent: "center", // Center horizontally
      gap: "20px", // Space between items
      padding: 0,
      margin: 0,
    }}
  >
    <li>
      <Link
        to="/updates"
        style={{
          color: "#005A9C", // Text color
          textDecoration: "none", // Remove underline
          fontSize: "16px",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#F5F5F5", // Light grey background
        }}
      >
        Update
      </Link>
    </li>
    <li>
      <Link
        to="/tasks"
        style={{
          color: "#005A9C",
          textDecoration: "none",
          fontSize: "16px",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#F5F5F5",
        }}
      >
        Task
      </Link>
    </li>
    <li>
      <Link
        to="/professionalprofiles"
        style={{
          color: "#005A9C",
          textDecoration: "none",
          fontSize: "16px",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#F5F5F5",
        }}
      >
        Professional
      </Link>
    </li>
  </ul>
</div>



<div className="container mx-auto  px-4  py-8 ">

  

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 md:mt-6">
            
            <Link to="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</Link>
        </div>
    </div>
</div>

</div>

    </>
  )
}

export default StudentProfile