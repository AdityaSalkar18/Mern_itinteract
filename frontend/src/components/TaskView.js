import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function TaskView() {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({
    tid: id,
    link: "",
    desc: "",
  });


  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/task/${id}`);
        if (response.ok) {
          const data = await response.json();
          setTask(data);
        } else {
          throw new Error('Faild to fetch task');
        }
      } catch (error) {
        console.error('Error fetching task:', error);

      }
    };
    fetchTask();

  }, [id]);


  //link part
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const linkFormData = { ...formData, tid: id };

      const url = "http://localhost:8080/api/link";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(linkFormData),

      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("link share:", data);
      setSuccessMessage("link add successfully");
      setError("");
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      console.log("Error adding link:", error);

    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/link');
        setLinks(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);

      }
    };
    fetchData();
  }, []);

  const filteredLinks = links.filter(links => links.tid === id);




  ///


  const [isActive, setIsActive] = useState(false);

  const handleIconClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setIsActive((prev) => !prev); // Toggle the active state
  };

  return (
    <>
      <div className="container mt-5" >
        <div className="container py-5">
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
          <div className="card m-3 text-start">
            <div className="card-header p-2">

              <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>{task.name}</h5>
            </div>
            <div className="card-body">


              <h6 className="card-text">{task.tt}</h6>
              <p className="card-text"> <span className="badge rounded-pill text-bg-secondary"><p className="card-text">{task.tc}</p></span>[  {task.tr}]</p>


              <p className="card-text"> {task.tdesc}</p>
              <p className="card-text"><small className="text-body-secondary">{task.date}[{task.sd}]</small></p>

            </div>

            <form onSubmit={handleSubmit}>

              <div class="card-footer ">
                <div className=" d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="gray"
                    className="bi bi-person-circle me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  <div class="form-floating flex-grow-1 me-2">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Add code link here"
                      name="link"
                      value={formData.link}
                      onChange={handleChange}
                    />
                    <label for="floatingInput">Add code link</label>
                  </div>

                  <div className="form-floating flex-grow-1">
                    <textarea
                      className="form-control"
                      placeholder="Leave a desc here"
                      id="floatingTextarea"
                      name="desc"
                      value={formData.desc}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Desc</label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-secondary mx-2 px-4"
                    style={{ backgroundColor: "#005A9C", borderColor: "#005A9C", color: "white" }}
                  >
                    Add
                  </button>

                </div>

              </div>
            </form>

          </div>



          <div>
            {Array.isArray(links) && links.length > 0 ? (
              filteredLinks.map((link) => (


                <div class="card mb-3 mx-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="gray"
                        class="bi bi-person-circle me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <h6 class="mb-0 text-secondary">{link.name}</h6>
                    </div>

                    <p class="text-start m-2 mb-2">
                      <Link>
                        {link.link}
                      </Link>
                    </p>
                    <p class="text-start m-2 mb-0">
                      {link.desc}
                    </p>

                    <h6 className="text-end d-block">
                      <Link to="" onClick={handleIconClick}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className={`bi bi-check-circle-fill ${isActive ? 'icon-active' : ''}`}
                          viewBox="0 0 16 16"
                          style={{ color: isActive ? 'green' : '#005A9C' }} // Set your initial color here
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                      </Link>

                      <style jsx>{`
    .icon-active {
        color: green; /* Change this to your desired active color */
        transition: color 0.3s ease;
    }
`}</style>

                    </h6>
                    <small class="text-body-secondary text-end d-block">{link.date}</small>

                  </div>
                </div>

              ))
            ) : (
              <p>No Links Found.</p>
            )}


          </div>

        </div>
      </div>


    </>

  )
}