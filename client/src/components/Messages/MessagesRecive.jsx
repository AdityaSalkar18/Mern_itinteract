import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
const MessagesRecive = () => {
  return (
    <>
      <Navbar />

      <div className="contianer mx-auto ">

<Link to="/messagessend" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Send</Link>
      </div>

      <div className="container mx-auto flex items-center justify-center">
      

        <div className="w-full max-w-2xl space-y-4"> 
          <div id="toast-message-cta" className="w-full p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
            <div className="flex">
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
              <div className="ms-3 text-sm font-normal">
                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
                <div className="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
                <a href="#" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>
              </div>
            </div>
          </div>

          <div id="toast-message-cta" className="w-full p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
            <div className="flex">
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
              <div className="ms-3 text-sm font-normal">
                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
                <div className="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
                <a href="#" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessagesRecive;
