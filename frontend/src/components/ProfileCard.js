import React from 'react'
import {Link} from  'react-router-dom'

export default function ProfileCard() {
  return (
     <>
    <Link to="/profileview"className='mx-2 ' style={{ textDecoration: 'none' }}>
    <div className="my-2">
         <div className="card" >
  <img src="https://sm.ign.com/t/ign_in/gallery/d/destiny-2-/destiny-2-the-final-shape-screenshots_5dwy.600.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Aditya Salkar</h5>
    <p className="card-text"><small className="text-body-secondary">Student</small></p>
    <p className="card-text">mern stack dev | flutter dev | it student</p>
    <h6><Link  className='mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style={{ textDecoration: 'none'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>
    Message</Link></h6>
  </div>
</div>
</div>
</Link>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="modal-title fs-5" id="exampleModalLabel">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
        User name</h3>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
       
          <div className="form-floating mb-3">
         <textarea className="form-control"  id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Message</label>
        </div>
        </form>
      </div>
      <div className="modal-footer">
        
        <button type="button" className="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div>
    
   </>
  )
}
