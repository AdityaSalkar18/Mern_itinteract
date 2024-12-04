import React from 'react'
import { Link } from "react-router-dom";
import bgImage from './bg.png';

export default function Home() {
    return (
        <>


            <div class="d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                    height: '100vh',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.9
                }}>
                <h1 class="display-3 fw-bold mb-3">Welcome to ITInteract</h1>
                <h6 class="lead fs-4 mb-4" style={{ maxwidth: "600px;" }}>The platform that bridges the gap between IT students and industry professionals. Join, learn, and grow together for a brighter future in tech!</h6>
               
                <Link to="/profileform" class="btn btn-light btn-lg mb-3">Join Our Community</Link>
            </div>



            <div class="container py-5 text-center">
            <h2 class="mb-5" style={{ color: '#005A9C' }}>Why Choose ITInteract?</h2>

    <div class="row my-2">
      <div class="col-md-4 mb-2">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title" style={{ color: '#005A9C' }}>Real-Time Messaging</h5>
            <p class="card-text text-secondary">Instantly connect with IT professionals and students for discussions and collaborations.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title"style={{ color: '#005A9C' }}>Forums & Updates</h5>
            <p class="card-text text-secondary">Engage in domain-specific forums, stay informed on seminars, internships, and latest industry updates.
</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title" style={{ color: '#005A9C' }}>Task Collaboration</h5>
            <p class="card-text text-secondary">Work on real-world projects and tasks with industry professionals in a collaborative environment.</p>
          </div>
        </div>
      </div>
    </div>


    <div class="row my-2 ">
      <div class="col-md-4 mb-2">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title" style={{ color: '#005A9C' }}>Profile Sharing</h5>
            <p class="card-text text-secondary">Showcase your skills, achievements, and projects by sharing your professional profile.
</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title" style={{ color: '#005A9C' }}>Explore & Network</h5>
            <p class="card-text text-secondary">Discover peers and professionals in similar domains, explore their work, and collaborate with them.
</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title" style={{ color: '#005A9C' }}>Learn Industry Practices</h5>
            <p class="card-text text-secondary">Gain insights into industry standards for project management and development with expert guidance.
</p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class=" text-white text-center py-5 bg-secondary" >
    <h2 style={{marginBottom: "20px"}} >Ready to Elevate Your IT Journey?
</h2>
    <p  class="fs-5" style={{marginBottom: "30px;"}}>Join ITInteract and connect with industry professionals, collaborate on real-world projects, and learn the skills that will shape your tech future!
</p>
    
  </div>

  <div class="container py-5">
    <h2 class="text-center mb-5"  style={{ color: '#005A9C' }}>Insights from Our Community
</h2>
    <p class="fs-5 text-secondary">
    ITInteract empowers users to connect, collaborate, and learn from real-world tech challenges. By offering real-time communication, project-based tasks, and mentorship from industry professionals, the platform bridges the gap between academic knowledge and industry practices, preparing students for success in the tech world.
</p>



  </div>

  

        </>
    )
}
