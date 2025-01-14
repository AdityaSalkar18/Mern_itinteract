import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'

// import {Link} from "react-router-dom";

const Account = () => {


  const [userProfile, setUserProfile] = useState({
    name: "",
    // bio: "",
    uimg: "",

    // act: "",
    // domain: "",
    // subdomain: "",
    tech:"",
    // email: "",
    // phone: "",
    

    // github: "",
    // linkedin: "",
    // cmail: "",
    // cphone: "",
    // link: "",

    // pone: "",
    // plone: "",
    // ptwo: "",
    // pltwo: "",
    // pthree: "",
    // plthree: "",

    // cone: "",
    // cdone: "",
    // ctwo: "",
    // cdtwo: "",
    // cthree: "",
    // cdthree: "",
  });



  useEffect(() => {
    const getProfile = async () => {
      try {
        const url = "http://localhost:8080/api/profile/get-my-profile"; // Update the URL to your backend server running on port 8080
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getProfile();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-5">
      
      <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="col-span-1">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span class="sr-only">Open dropdown</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={userProfile.uimg?userProfile.uimg:"https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"} alt="Bonnie image"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userProfile.name?userProfile.name:"User Name"}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{userProfile.tech?userProfile.tech:"tech"}</span>
                    <div class="flex mt-4 md:mt-6">
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                        <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-1">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="card-body">
                    <h5 class="card-title">Info Card</h5>
                    <div class="space-y-4">
                        <div>
                            <h6 class="font-medium">Section 1</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 1.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 2</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 2.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 3</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 3.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 4</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 4.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 5</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 5.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div class="col-span-1">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="card-body">
                    <h5 class="card-title">Info Card 1</h5>
                    <div class="space-y-4">
                        <div>
                            <h6 class="font-medium">Section 1</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 1.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 2</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 2.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 3</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 3.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 4</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 4.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 5</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 5.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-1">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="card-body">
                    <h5 class="card-title">Info Card 2</h5>
                    <div class="space-y-4">
                        <div>
                            <h6 class="font-medium">Section 1</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 1.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 2</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 2.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 3</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 3.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 4</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 4.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 5</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 5.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-1">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="card-body">
                    <h5 class="card-title">Info Card 3</h5>
                    <div class="space-y-4">
                        <div>
                            <h6 class="font-medium">Section 1</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 1.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 2</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 2.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 3</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 3.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 4</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 4.</p>
                        </div>
                        <div>
                            <h6 class="font-medium">Section 5</h6>
                            <p class="text-gray-500 dark:text-gray-400">Details for section 5.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>





    
      </div>
    </>
  )
}

export default Account


