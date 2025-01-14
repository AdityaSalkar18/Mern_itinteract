import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'

const ProfessionalProfile = () => {
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
          backgroundColor: "#F5F5F5", // Light grey background for the link
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
        to="/studentprofiles"
        style={{
          color: "#005A9C",
          textDecoration: "none",
          fontSize: "16px",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#F5F5F5",
        }}
      >
        Student
      </Link>
    </li>
  </ul>
</div>

    </>
  )
}

export default ProfessionalProfile