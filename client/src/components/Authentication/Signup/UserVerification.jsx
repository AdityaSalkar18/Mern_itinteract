import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import networkLogo from './network.png';
import bg from './bg.jpg';

const UserVerification = () => {

  //   const [otp, setOtp] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:8080/api/users/verify-otp", { otp });

  //     setSuccessMessage("Verification Code Verified");

  //     setTimeout(() => {
  //       setSuccessMessage("");
  //       if (res.data.success) {
  //         navigate("/usersignup");
  //       }
  //     }, 1000); 
  //   } catch (error) {
  //     setErrorMessage("Invalid Verification Code. Please try again.");

  //     setTimeout(() => {
  //       setErrorMessage("");
  //     }, 2000); 
  //   }
  // };


  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    // Ensure at least one field (OTP or Email) is provided
    if (!otp && !email) {
      setErrorMessage("Please enter either Email or VCET Student Id for verification.");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/users/verify-otp", { otp, email });

      if (res.data.success) {
        setSuccessMessage(res.data.message || "Verification Successful");

        setTimeout(() => {
          navigate("/usersignup");
        }, 1000);
      } else {
        setErrorMessage(res.data.message || "Invalid Email or VCET Student Id. Please try again.");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
     <div
      className="flex justify-center items-center min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6 m-3">
        <h1 className="text-3xl font-semibold text-center text-[#005A9C] mb-4">
          <img src={networkLogo} alt="logo" width="55" height="55" className="inline mr-2" />
          ITInteract
        </h1>
        <h3 className="text-xl text-center font-bold text-gray-900 mb-4">User Verification </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Enter Personal Email Address
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#005A9C] focus:border-[#005A9C]"
              type="email"
              placeholder="Enter your personal email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <label htmlFor="" className="block text-sm font-medium text-gray-900">
             OR
            </label>

          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-900">
              Enter VCET Student Id
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#005A9C] focus:border-[#005A9C]"
              type="text"
              placeholder="Enter VCET Student Id"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>


          {errorMessage && <div className="text-red-600 text-sm">{errorMessage}</div>}
          {successMessage && <div className="text-green-600 text-sm">{successMessage}</div>}


          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-4 bg-[#005A9C] text-white rounded-lg hover:bg-[#004080] focus:outline-none focus:ring-4 focus:ring-[#005A9C]"
            >
              Verify
            </button>
          </div>
        </form>

        {/* <h3 className="font-semibold text-center"><Link to="https://forms.gle/J8yhmRvTBQrBb6Wt8" className=" text-[#005A9C] hover:underline">Try Another Way </Link></h3> */}
        <h3 className="font-semibold text-center"><Link to="/useremailverification" className=" text-[#005A9C] hover:underline">Try Another Way </Link></h3>


        <h3 className="font-semibold text-center"><Link to="/signup" className=" text-[#005A9C] hover:underline">Register With Student Account </Link></h3>
        <div className="flex justify-between items-center mt-4">

          <Link to="/login" className="text-sm text-[#005A9C] hover:underline">Already have an account? Log in here.</Link>
        </div>
      </div>
    </div>

  )
}

export default UserVerification