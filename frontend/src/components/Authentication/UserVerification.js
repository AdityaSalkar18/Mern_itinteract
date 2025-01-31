import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import networkLogo from './network.png';
const UserVerification = () => {
  const [otp, setOtp] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/users/verify-otp", { otp });

      setSuccessMessage("Verification Code Verified");

      setTimeout(() => {
        setSuccessMessage("");
        if (res.data.success) {
          navigate("/userSignup");
        }
      }, 1000);
    } catch (error) {
      setErrorMessage("Invalid Verification Code. Please try again.");

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (


    <div>
      <div className="container mt-5">
        <div className="container py-2">

          <h1 className='mt-3'> <img src={networkLogo} alt="" width="55" height="55"></img>ITInteract</h1>
          <div class="col-md-8 mx-auto col-lg-4">
            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>

              <h3 className='mb-3'>Enter Verification Code</h3>
              <p class="text-body-secondary">Your Vcet Student Id is your Verification Code</p>

              <div className="d-flex flex-column align-items-center justify-content-center ">
                <input
                  className="form-control w-50 text-center"
                  type="text"
                  placeholder="Enter Verification Code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                {errorMessage && <div className="alert alert-danger my-2" role="alert">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success my-2" role="alert">{successMessage}</div>}
                <button className="btn btn-secondary mt-3">Verify</button>
                <Link to="https://forms.gle/J8yhmRvTBQrBb6Wt8" className='mt-3' style={{ textDecoration: "none" }}><h6 class="text-body-secondary">Try  Another Way</h6></Link>
              </div>



              <hr class="my-4 mt-2" />

              <Link to="/signup">
                <button
                  className="w-80 mb-3 btn btn-secondary"
                >
                  Signup With Student Account
                </button>
              </Link>

              <Link to="/" className='mb-2' style={{ textDecoration: "none" }}><h6 class="text-body-secondary">Already have an account?  Log in here.</h6></Link>

            </form>
          </div>

        </div>

      </div>
      {/* <h2>Enter OTP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
      <p>{message}</p> */}
    </div>
  );
};

export default UserVerification;
