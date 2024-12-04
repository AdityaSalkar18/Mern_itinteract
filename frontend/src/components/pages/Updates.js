import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { SubdomainContext } from '../SubdomainContext';
export default function Updates() {

  const { subdomain } = useContext(SubdomainContext);
  const [updates, setUpdates] = useState([]);
  const [formData, setFormData] = useState({
    sd: subdomain,
    desc: ""
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updateFormData = { ...formData, sd: subdomain };
      const url = "http://localhost:8080/api/update";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updateFormData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Update share:", data);
      setSuccessMessage("Update shared successfully");
      setError("");

      // Automatically close alert after 2 seconds
      setTimeout(() => {
        setSuccessMessage("");

        // Close modal after successful message submission
        const modal = document.getElementById('exampleModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modal);
        if (modalInstance) modalInstance.hide();
      }, 2000);

    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      console.error("Error sharing update:", error);

      // Automatically close alert after 2 seconds
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/update');
        setUpdates(response.data);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchData();
  }, []);

  const filteredUpdates = updates.filter(update => update.sd === subdomain);
  return (
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

        <h5 className='m-2 text-secondary'>Updates {subdomain}</h5>
        <p class="text-end"><Link to="/myupdates" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover " >My Updates</Link></p>
        <div className="container">
          <Link to="" className=" shadow" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style={{ textDecoration: "none" }}>
          <div className="card" style={{ border: "1px solid #005A9C", borderRadius: "0.50rem" }}>
  <div className="card-body">
    <h5 className='text-secondary'>Ask questions, share errors, and links!</h5> 
  </div>
</div>

          </Link>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}

                    <div className="form-floating mb-3">
                      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="desc" value={formData.desc} onChange={handleChange}></textarea>
                      <label htmlFor="floatingTextarea">Description</label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#005A9C", borderColor: "#005A9C", color: "white" }} // Set text color to white
                    >
                      Share
                    </button>


                  </div>
                </form>
              </div>
            </div>
          </div>

          {Array.isArray(updates) && updates.length > 0 ? (
            filteredUpdates.map((update) => (
              <div className="col-md-12" key={update._id}>
                <Link to={`/updateview/${update._id}`} className='mx-2' style={{ textDecoration: "none" }}>
                  <div class="card  text-start">
                    <div class="card-header p-2">
                      <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle me-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                      </svg>{update.name}</h5>
                    </div>
                    <div class="card-body">
                      <p class="card-text">{update.desc}</p>
                      <p class="card-text"><small class="text-body-secondary">{update.date} [{update.sd}]</small></p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p style={{ color: "#005A9C" }}>No Updates Found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
