

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import networkLogo from './network.png';

export default function UserEmailVerfication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch:"",
    batch:"",
    message: "",
});

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const response = await fetch("http://localhost:8080/api/users/send-email", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          setSuccessMessage("Form submitted successfully ! New Verfication Code Provided on Email Within 48hrs");
          setError("");

          
          setTimeout(() => {
              setSuccessMessage("");
          }, 3000);
      } else {
          setError("Failed to submit form");
          setSuccessMessage("");

         
          setTimeout(() => {
              setError("");
          }, 2000);
      }
  } catch (error) {
      setError("An error occurred. Please try again.");
      setSuccessMessage("");

     
      setTimeout(() => {
          setError("");
      }, 2000);
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 space-y-6 m-3">
        <h1 className="text-3xl font-semibold text-center text-[#005A9C] mb-4">
          <img src={networkLogo} alt="logo" width="55" height="55" className="inline mr-2" />
          ITInteract
        </h1>
        {error && (
                <div
                  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span className="font-medium">Error: </span> {error}
                </div>
              )}
              {successMessage && (
                <div
                  className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                  role="alert"
                >
                  <span className="font-medium">Success: </span> {successMessage}
                </div>
              )}

        <h3 className="text-xl font-bold text-gray-900">User Verfication</h3>
        <p>(Fill the form to get access or new verfication code )</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-900">Enter Your Name</label>
            <input
              type="text"
              name="name"
             
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#005A9C] focus:border-[#005A9C]"
              placeholder="Your Name"
             
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Enter Your Email Address</label>
            <input
              type="email"
              name="email"
            
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#005A9C] focus:border-[#005A9C]"
              placeholder="name@gmail.com"
             
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-900">Enter Your Contact no</label>
            <input
              type="text"
              name="phone"
             
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#005A9C] focus:border-[#005A9C]"
              placeholder="123-456-789"
             
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-900">Enter Your Branch</label>
            <input
              type="text"
              name="branch"
             
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#005A9C] focus:border-[#005A9C]"
              placeholder="Your Branch"
             
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-900">Enter Your Batch</label>
            <input
              type="text"
              name="batch"
             
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#005A9C] focus:border-[#005A9C]"
              placeholder="Your Batch"
             
              onChange={handleChange}
              required
            />
          </div>

          <div >
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter Message
                  </label>
                  <textarea
                    id="description"
                    rows="3"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Message"
                    name="message"
                   
                    onChange={handleChange}
                  ></textarea>
                </div>

          

         

          <button type="submit" className="w-full mt-6 py-2 px-4 bg-[#005A9C] text-white rounded-lg hover:bg-[#004080] focus:outline-none focus:ring-4 focus:ring-[#005A9C]">
            Submit
          </button>
 
         <h3 className="font-semibold text-center"><Link to="/signup" className=" text-[#005A9C] hover:underline">Register With Student Account </Link></h3>
                       <div className="flex justify-between items-center mt-4">
                         
                         <Link to="/login" className="text-sm text-[#005A9C] hover:underline">Already have an account? Log in here.</Link>
                       </div>
        </form>
      </div>
    </div>
  );
}
