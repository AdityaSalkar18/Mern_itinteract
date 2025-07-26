import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';


export default function NotificationSend() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:8080/api/api/notification/send-notification', {
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

        <h5 className='m-2 text-secondary'>Send</h5>
           

              {Array.isArray(notifications) && notifications.length > 0 ? (
                notifications.map((notification) => (
                  
                  <div class="container col-md-10 mb-2 " key={notification._id} >
                    <div class="card text-start">
                      <h5 class="card-header "> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle mx-1" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                      </svg>To:{notification.recivername}</h5>
                      <div class="card-body ">
                        <p class="card-text">{notification.msg}</p>
                      </div>
                        {/* <Link to="#" className="text-end mx-2" >Reply</Link> */}
                    </div>
                  </div>
                ))
              ) : (
                <p>Notification not found</p>
              )}




            
            </div>
          </div>
      

    </>
  )
}
