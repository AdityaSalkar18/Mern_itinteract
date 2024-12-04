import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';


export default function NotificationRecived() {
  const [notifications, setNotifications] = useState([]);



  
//    //MSG
//    const [reciverid, setReciverid] = useState(null);
//    const [recivername, setRecivername] = useState(null);
//    const [formData, setFormData] = useState({
       
//      reciverid: "",
//      recivername: "",
//     msg: ""
//   });

// const [loginuserProfile, setLoginUserProfile] = useState({
//     name: "",
    
//   });

//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

// const handleChange = (e) => {
// const { name, value } = e.target;
// setFormData({ ...formData, [name]: value });

// }

// const handleSubmit = async (e) => {
// e.preventDefault();
// if(!reciverid){
//   setError("User is not valid");
//   return;
// }

// try {
//   const url = "http://localhost:8080/api/notification";

//   const payload ={ 
//     reciverid:reciverid,
//     recivername:recivername,
//     msg: formData.msg
//   }
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     body: JSON.stringify(payload),
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const data = await response.json();
//   console.log("Message send:", data);
//   setSuccessMessage("Message send successfully");
//   setError("");
// } catch (error) {
//   setError(error.message);
//   setSuccessMessage("");
//   console.error("Error sending msg:", error);
// }
// };

// const handleOpenMessageModel = (profileid,profilename) =>{
//   setReciverid(profileid);
//   setRecivername(profilename);
  
// }


  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:8080/api/notification/recived-notification', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

      
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }

        
        const data = await response.json();

        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchData();
  }, []);

  return (


    <>

      <div className="container mt-5">
        <div className="container py-5" >
        <div className="btn-group" role="group" aria-label="Basic outlined example">
  <Link to="/notificationrecived">
    <button
      type="button"
      className="btn btn-link"
      style={{
        color: "#005A9C",
        textDecoration: "none",
      }}
    >
      <h6 style={{ margin: 0 }}>Receive</h6>
    </button>
  </Link>

  <Link to="/notificationsend">
    <button
      type="button"
      className="btn btn-link"
      style={{
        color: "#005A9C",
        textDecoration: "none",
      }}
    >
      <h6 style={{ margin: 0 }}>Send</h6>
    </button>
  </Link>
</div>

        <h5 className='m-2 text-secondary'>Recived</h5>
           

              {Array.isArray(notifications) && notifications.length > 0 ? (
                notifications.map((notification) => (
                  
                  <div class="container col-md-10 mb-2 " key={notification._id} >
                    <div class="card text-start">
                      <h5 class="card-header "> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle mx-1" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                      </svg>{notification.sender}</h5>
                      <div class="card-body ">
                        <p class="card-text">{notification.msg}</p>
                      </div>
                        {/* <Link to="#" className="text-end mx-2" onClick={() => handleOpenMessageModel(profile._id,profile.name)} style={{ textDecoration: 'none' }} >Reply</Link> */}
                    </div>
                  </div>
                ))
              ) : (
                <p>Notification not found</p>
              )}





              {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                <form onSubmit={handleSubmit}> 
                  <div className="modal-header">
                    <h3 className="modal-title fs-5" id="exampleModalLabel">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle mx-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                      </svg>
                      {loginuserProfile.name?loginuserProfile.name:"User Name"}</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  {error && <div className="alert alert-danger" role="alert">{error}</div>}
                  {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}


                      <div className="form-floating mb-3">
                        <textarea className="form-control" id="floatingTextarea" name="msg" value={formData.msg} onChange={handleChange}></textarea>
                        <label for="floatingTextarea">Message</label>
                      </div>
                    
                  </div>
                  <div className="modal-footer">

                  <button type="submit" className="btn btn-primary">Send</button> 
                  </div>
                  </form>
                </div>
              </div>
            </div> */}


            
            </div>
          </div>
      

    </>
  )
}
