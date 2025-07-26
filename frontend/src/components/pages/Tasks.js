import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { SubdomainContext } from '../SubdomainContext';

export default function Tasks() {

  const { subdomain } = useContext(SubdomainContext);
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    sd: subdomain,
    tt: "",
    tc: "",
    tr: "",
    tdesc: "",
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
      const taskFormData = { ...formData, sd: subdomain };
      const url = "http://localhost:8080/api/api/task";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(taskFormData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Task share:", data);
      setSuccessMessage("Task shared successfully");
      setError("");

      // Hide alert and close modal after 2 seconds
      setTimeout(() => {
        setSuccessMessage("");
        // Close modal using Bootstrap modal method
        const modalElement = document.getElementById('exampleModal');
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        modal.hide();
      }, 2000);

    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      console.log("Error sharing task:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/api/task');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchData();
  }, []);

  const filteredTasks = tasks.filter(task => task.sd === subdomain);

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
        <h5 className='m-2 text-secondary'>Tasks {subdomain}</h5>

        <p className="text-end"><Link to="/taskimpact" className="me-3 link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover " >Tasks Impact</Link><Link to="/mytasks" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover " >My Task</Link></p>
        <div className="container">
          <Link to="" className=" shadow" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style={{ textDecoration: "none" }}>
          <div className="card" style={{ border: "1px solid #005A9C", borderRadius: "0.50rem" }}>
  <div className="card-body" >
  <h5 className='text-secondary'> Add Your Tasks and Challenges!</h5>
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
                      <input type="text" className="form-control" id="floatingInput" placeholder="task title" name="tt" value={formData.tt} onChange={handleChange} />
                      <label htmlFor="floatingInput">Task Title</label>
                    </div>

                    <div className="form-floating mb-3">
                      <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="tc" value={formData.tc} onChange={handleChange}>
                        <option value="" disabled>Select Task Complexity</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                      <label htmlFor="floatingSelect">Task Complexity</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingInput" placeholder="task requirement" name="tr" value={formData.tr} onChange={handleChange} />
                      <label htmlFor="floatingInput">Requirements</label>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="floatingTextarea" placeholder="task text" name="tdesc" value={formData.tdesc} onChange={handleChange}></textarea>
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

          <div className="row">
            {Array.isArray(tasks) && tasks.length > 0 ? (
              filteredTasks.map((task) => (
                <div className=" col-md-6 mb-3" key={task._id}>
                  <Link to={`/taskview/${task._id}`} className='mx-2' style={{ textDecoration: "none" }}>
                    <div className="card m-3 text-start">
                      <div className="card-header p-2 d-flex align-items-center">
                        <h5 className="mb-0 me-2 d-inline-block">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                          </svg>
                          {task.name}
                        </h5>
                        <span className="badge rounded-pill text ms-auto" style={{ backgroundColor: '#005A9C' }}>
                          {task.tut}
                        </span>

                      </div>


                      <div className="card-body">
                        <h6 className="card-text">{task.tt}</h6>
                        <p className="card-text"> <span className="badge rounded-pill text-bg-secondary"><p className="card-text">{task.tc}</p></span>[  {task.tr.length > 50 ? task.tr.substring(0, 50) + "..." : task.tr}]</p>
                        <p className="card-text"> {task.tdesc.length > 100 ? task.tdesc.substring(0, 100) + "..." : task.tdesc}</p>
                        <p className="card-text"><small className="text-body-secondary">{task.date}[{task.sd}]</small></p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p style={{ color: "#005A9C" }}>No Task Found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
