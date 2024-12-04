import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MyTask() {
  const [tasks, setTasks] = useState([]);
  const [currentTaskId, setCurrentTaskId] = useState(null); // State for storing the current update id
  const [formData, setFormData] = useState({ tt: "", tc: "", tr: "", tdesc: "" });


  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/task/user",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/task/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task._id !== id)
        );
        setAlert({ message: "Task deleted successfully!", type: "success" });
      }
    } catch (error) {
      console.error("Error deleting update:", error);
      setAlert({ message: "Failed to delete task.", type: "danger" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:8080/api/task/${currentTaskId}`; // Use the currentUpdateId
      const response = await axios.patch(url, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setSuccessMessage("Task successfully saved");
        setError("");

        // Refresh the list of updates
        const updatedList = tasks.map((task) =>
          task._id === currentTaskId ? { ...task, tt: formData.tt, tc: formData.tc, tr: formData.tr, tdesc: formData.tdesc } : task
        );
        setTasks(updatedList);

      } else {
        throw new Error(`Failed to update, status code: ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      console.error("Error updating task:", error);
    }
  };


  useEffect(() => {
    if (alert.message) {
      setTimeout(() => {
        setAlert({ message: '', type: '' });
      }, 2000);
    }
  }, [alert]);
  return (
    <>
      <div className="container mt-5">
        <div className="container py-5">
          {alert.message && (
            <div
              className={`alert alert-${alert.type} alert-dismissible fade show`}
              role="alert"
            >
              {alert.message}
              <button
                type="button"
                className="btn-close"
                onClick={() => setAlert({ message: "", type: "" })}
                aria-label="Close"
              ></button>
            </div>
          )}

          {Array.isArray(tasks) && tasks.length > 0 ? (
            tasks.map((task) => (
              <div className=" col-md-12 " key={task._id}>
                <Link
                  to={`/taskview/${task._id}`}
                  className="mx-2"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card  text-start">
                    <div className="card-header">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <h5>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-person-circle mx-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                              fillRule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                          </svg>
                          {task.name}
                        </h5>
                        <p>
                          <Link
                            to=""
                            className=" mx-2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-bs-whatever="@mdo"
                            style={{
                              textDecoration: "none",
                              color: "#005A9C" 
                            }}
                            onClick={() => {
                              setCurrentTaskId(task._id);
                              setFormData({
                                tt: task.tt,
                                tc: task.tc,
                                tr: task.tr,
                                tdesc: task.tdesc,
                              });
                            }}
                          >
                            Update
                          </Link>


                          <Link
                            to=""
                            className="link-danger mx-2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleDelete(task._id)}
                          >
                            Delete
                          </Link>

                        </p>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{task.tt}</p>
                      <p className="card-text">
                        <span className="badge rounded-pill text-bg-secondary">
                          {task.tc}
                        </span>
                        [{" "}
                        {task.tr?.length > 50
                          ? task.tr.substring(0, 50) + "..."
                          : task.tr || "No data"}{" "}
                        ]
                      </p>
                      <p className="card-text">
                        {task.tdesc?.length > 100
                          ? task.tdesc.substring(0, 100) + "..."
                          : task.tdesc || "No description available"}
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          {task.date} [{task.sd}]
                        </small>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No tasks found.</p>
          )}

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                    {successMessage && (
                      <div className="alert alert-success" role="alert">
                        {successMessage}
                      </div>
                    )}

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
                      style={{ backgroundColor: "#005A9C", borderColor: "#005A9C", color: "white" }} // Adding color and border
                    >
                      Update
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
