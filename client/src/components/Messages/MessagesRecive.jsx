import React, { useEffect, useState } from 'react';

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


<div className="container mx-auto px-4 py-8 pb-2 mt-10">


  <div className="container flex justify-center md:justify-end md:mr-32 ">
    <Link
      to="/messagessend"
      className="font-medium text-[#005A9C] hover:underline dark:text-[#005A9C] px-4 py-2"
    >
      Send
    </Link>
  </div>






  <div className="container mx-auto px-4 my-8 flex flex-col items-center justify-center">
  {Array.isArray(notifications) && notifications.length > 0 ? (
    notifications.map((notification) => (
      <div className="w-full max-w-2xl space-y-4 mb-5" key={notification._id}>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full flex items-start space-x-4">
         
          <img
            className="w-10 h-10 rounded-full flex-shrink-0"
            src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
            alt="User"
          />
        
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h5 className="font-semibold text-gray-900 dark:text-white">{notification.sender}</h5>
            </div>
            <p className="text-gray-600 dark:text-gray-300 break-words text-sm">
              {notification.msg}
            </p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-700 dark:text-gray-300">No notifications found</p>
  )}
</div>



      </div>
    </>
  );
}

export default MessagesRecive;
