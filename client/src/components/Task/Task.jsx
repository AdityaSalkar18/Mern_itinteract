import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
const Task = () => {
  return (
    <>
       <Navbar/>
       <div className="container mx-auto px-4 my-8">
           <ul>
            <li>
              <Link to="/updates" >update</Link>
            </li>
            <li>
              <Link to="/studentprofiles" >student </Link>
            </li>
            <li li>
              <Link to="/professionalprofiles" >Professional</Link>
            </li>
           </ul>
       </div>
    </>
  )
}

export default Task