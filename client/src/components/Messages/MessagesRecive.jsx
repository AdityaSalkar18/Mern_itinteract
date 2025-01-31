import React, { useEffect, useState} from 'react';

import { Link } from 'react-router-dom';
const MessagesRecive = () => {
  const [notifications, setNotifications] = useState([]);


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
     

      <div className="contianer mx-auto px-4 py-8">

<Link to="/messagessend" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Send</Link>
      </div>



      <div className="container mx-auto flex items-center justify-center">

      {Array.isArray(notifications) && notifications.length > 0 ? (
        notifications.map((notification) => (
      

        <div className="w-full max-w-2xl space-y-4"> 
          <div id="toast-message-cta" className="w-full p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert"  key={notification._id}>
            <div className="flex">
              <img className="w-10 h-10 rounded-full" src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="User"/>
              <div className="ms-3 text-sm font-normal">
                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">{notification.sender}</span>
                <div className="mb-2 text-sm font-normal">{notification.msg}</div>
                <a href="#" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>
              </div>
            </div>
          </div>

         
        </div>

      ))
              ) : (
                <p>Notification not found</p>
              )}
      </div>
    </>
  );
}

export default MessagesRecive;
