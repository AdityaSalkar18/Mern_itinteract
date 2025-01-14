import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
const Update = () => {
  return (
   <>
    <Navbar/>
    <div
  className="container mx-auto px-4 my-8"
  style={{
    textAlign: "center", // Center align text
  }}
>
  <ul
    style={{
      listStyle: "none", // Remove default bullet points
      display: "flex",
      justifyContent: "center", // Center horizontally
      gap: "20px", // Space between items
      padding: 0,
      margin: 0,
    }}
  >
    <li>
      <Link
        to="/tasks"
        style={{
          color: "#005A9C", // Text color
          textDecoration: "none", // Remove underline
          fontSize: "16px",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#F5F5F5", // Light grey background for buttons
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

    </>
  )
}

export default Update