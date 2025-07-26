import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import { SubdomainContext } from '../SubdomainContext';


export default function UserProfile() {
  const [profiles, setProfiles] = useState([]);
  const { subdomain } = useContext(SubdomainContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/api/profile/complete/user');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching complete profiles:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProfiles = profiles.filter(profile => profile.subdomain === subdomain);


  //MSG
  const [reciverid, setReciverid] = useState(null);
  const [recivername, setRecivername] = useState(null);
  const [formData, setFormData] = useState({

    reciverid: "",
    recivername: "",
    msg: ""
  });

  const [loginuserProfile, setLoginUserProfile] = useState({
    name: "",

  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reciverid) {
      setError("User is not valid");
      return;
    }

    try {
      const url = "http://localhost:8080/api/api/notification";

      const payload = {
        reciverid: reciverid,
        recivername: recivername,
        msg: formData.msg
      }
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Message send:", data);
      setSuccessMessage("Message send successfully");
      setError("");
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      console.error("Error sending msg:", error);
    }
  };

  const handleOpenMessageModel = (profileid, profilename) => {
    setReciverid(profileid);
    setRecivername(profilename);

  }

  useEffect(() => {
    const getProfile = async () => {
      try {
        const url = "http://localhost:8080/api/api/profile/get-my-profile"; // Update the URL to your backend server running on port 8080
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
        setLoginUserProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getProfile();
  }, []);


  //
  return (

    <>

      <div className='container mt-5'>
        <div className="container py-5">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <Link to="/updates">
              <button
                type="button"
                className="btn btn-link"
                style={{
                  color: "#005A9C",
                  textDecoration: "none",
                }}
              >
                <h6 style={{ margin: 0 }}>Updates</h6>
              </button>
            </Link>

            <Link to="/tasks">
              <button
                type="button"
                className="btn btn-link"
                style={{
                  color: "#005A9C",
                  textDecoration: "none",
                }}
              >
                <h6 style={{ margin: 0 }}>Tasks</h6>
              </button>
            </Link>

            <Link to="/studentprofile">
              <button
                type="button"
                className="btn btn-link"
                style={{
                  color: "#005A9C",
                  textDecoration: "none",
                }}
              >
                <h6 style={{ margin: 0 }}>StudentProfile</h6>
              </button>
            </Link>

            <Link to="/userprofile">
              <button
                type="button"
                className="btn btn-link"
                style={{
                  color: "#005A9C",
                  textDecoration: "none",
                }}
              >
                <h6 style={{ margin: 0 }}>UserProfile</h6>
              </button>
            </Link>
          </div>


          <h5 className='m-2 text-secondary'>
            UserProfile {subdomain}
          </h5>

          <div className="row">

            {Array.isArray(profiles) && profiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <div className="col-md-3 mb-3" key={profile._id}>
                  <Link to={`/profileview/${profile._id}`} style={{ textDecoration: "none" }}>
                    <div className="my-2">
                      <div className="card " >

                        <div className="card-body ">

                          <img
                            src={profile.uimg ? profile.uimg : "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"}

                            alt="..."
                            className="card-img-top rounded-circle img-fluid mb-3" style={{ width: "158px", height: "155px", border: "1px solid grey" }}
                          />

                          <h5 className="card-title">{profile.name}</h5>
                          {/* <p className="card-text"><small className="text-body-secondary">{profile.act}</small></p> */}
                          <p className="card-text">{profile.tech ? profile.tech : "tech"}</p>
                          <p className="card-text">{profile.bio ? profile.bio : "bio"}</p>
                          <h6>
                            <Link
                              className='mx-2'
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => handleOpenMessageModel(profile._id, profile.name)}
                              style={{ textDecoration: 'none', color: '#005A9C' }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                              </svg>
                              Message
                            </Link>
                          </h6>

                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p style={{ color: "#005A9C" }}>No User/Proffesional profiles found for these Subdomain.</p>
            )}




            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle mx-2" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        {loginuserProfile.name ? loginuserProfile.name : "User Name"}</h3>
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

                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#005A9C", borderColor: "#005A9C", color: "white" }}
                      >
                        Send
                      </button>

                    </div>
                  </form>
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>

    </>
  )
}
