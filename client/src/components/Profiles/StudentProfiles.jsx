import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'

const StudentProfile = () => {
  return (
    <>
        <Navbar/>
       <div className="container mx-auto px-4 my-8">
           <ul>
            <li>
              <Link to="/update" >update</Link>
            </li>
            <li>
              <Link to="/task" >task </Link>
            </li>
            <li >
              <Link to="/professionalprofiles" >Professional</Link>
            </li>
           </ul>
       </div>
    </>
  )
}

export default StudentProfile