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
    tsd: task.sd,
    link: "",
    desc: "",
  });


  const [replies, setReplies] = useState({});

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/api/task/${id}`);
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

      const linkFormData = { ...formData, tid: id , tsd: task.sd };

      const url = "http://localhost:8080/api/api/link";

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
        // Use the task ID (`id`) in the URL to fetch links by task
        const response = await axios.get(`http://localhost:8080/api/api/link/${id}`);
        setLinks(response.data); // Update the state with fetched links
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };

    fetchData();
  }, [id]); // Re-run effect when `id` changes




  //reply part

  const handleReplyChange = (linkId, linkUId,linkSd, value) => {
    // Dynamically updating the reply for the specific link and its upid
    setReplies((prevReplies) => ({
      ...prevReplies,
      [`${linkId}_${linkUId}_${linkSd}`]: value, // Use a unique key combining linkId and linkUId
    }));
  };

  const handleReplySubmit = async (e, linkId, linkUId, linkSd) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    try {
      const url = "http://localhost:8080/api/api/reply";

      // The key is now `${linkId}_${linkUId}`, which is how we store and access the replies
      const replyContent = replies[`${linkId}_${linkUId}_${linkSd}`];

      if (!replyContent) {
        throw new Error("Reply content is required");
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          lid: linkId,
          luid: linkUId,
          lsd: linkSd,
          reply: replyContent, // Sending the correct reply content
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Reply saved:", data);
      setSuccessMessage("Reply saved successfully");
      setError("");

      // Clear the reply field for the specific link
      setReplies((prevReplies) => ({
        ...prevReplies,
        [`${linkId}_${linkUId},_${linkSd}`]: "", // Clear the reply for this link and upid combination
      }));
    } catch (error) {
      setError("Error saving reply");
      setSuccessMessage(""); // Clear success message in case of error
      console.error("Error saving reply:", error);
    }
  };

  useEffect(() => {
    let timer;
    if (error || successMessage) {

      timer = setTimeout(() => {
        setError("");
        setSuccessMessage("");
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [error, successMessage]);

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

                  <div>

                  </div>

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
              links.map((link) => (
                <div className="card mb-3 mx-3" key={link._id}>
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
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
                      <h6 className="mb-0 text-secondary">{link.name}</h6>
                    </div>

                    <p className="text-start m-2 mb-2">
                      <a href={link.link} target="_blank" rel="noopener noreferrer">
                        {link.link}
                      </a>
                    </p>
                    <p className="text-start m-2 mb-0">{link.desc}</p>

                    <h6 className="text-end">
                      <Link
                        className="mx-2"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal-${link._id}`} // Targeting specific modal using link's _id
                        style={{ textDecoration: 'none', color: '#005A9C' }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-send-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                        </svg>
                        Feedback
                      </Link>
                    </h6>

                    {/* Modal for feedback */}
                    <div
                      className="modal fade"
                      id={`exampleModal-${link._id}`} // Unique modal id for each link
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="container p-2">
                            <form onSubmit={(e) => handleReplySubmit(e, link._id, link.upid, link.tasksd)}>
                              <div className="form-group">
                                <select
                                  className="form-select"
                                  value={replies[`${link._id}_${link.upid}_${link.tasksd}`] || ""} // Manage replies by linkId and linkUId
                                  onChange={(e) => handleReplyChange(link._id, link.upid,link.tasksd, e.target.value)} // Pass both _id and upid
                                >
                                  <option value="" disabled selected>
                                    Give feedback
                                  </option>
                                  <option value="100">High</option>
                                  <option value="70">Medium</option>
                                  <option value="30">Low</option>
                                </select>
                              </div>

                              <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary mt-3">
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <small className="text-body-secondary text-end d-block">
                      {link.date}
                    </small>
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



// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// export default function TaskView() {
//   const { id } = useParams();
//   const [task, setTask] = useState({});
//   const [links, setLinks] = useState([]);
//   const [linkStatuses, setLinkStatuses] = useState({});

//   useEffect(() => {
//     const fetchTask = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/api/api/task/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setTask(data);
//         } else {
//           throw new Error("Failed to fetch task");
//         }
//       } catch (error) {
//         console.error("Error fetching task:", error);
//       }
//     };
//     fetchTask();
//   }, [id]);

//   useEffect(() => {
//     const fetchLinks = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/api/link");
//         setLinks(response.data);
//       } catch (error) {
//         console.error("Error fetching links:", error);
//       }
//     };
//     fetchLinks();
//   }, []);

//   const handleCheckboxChange = (e, linkId) => {
//     // Update the checkbox state to toggle between Correct and Incorrect
//     setLinkStatuses((prev) => ({
//       ...prev,
//       [linkId]: e.target.checked,
//     }));
//   };

//   const handleSave = async (linkId) => {
//     const isCorrect = linkStatuses[linkId];
//     try {
//       // Send the link's ID and correctness status to the server
//       const response = await fetch("http://localhost:8080/api/api/replyOnLink", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({
//           linkId,
//           isCorrect, // Send the correctness status based on checkbox state
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save reply");
//       }

//       const data = await response.json();
//       console.log("Reply saved successfully:", data);
//       alert("Reply saved successfully!");
//     } catch (error) {
//       console.error("Error saving reply:", error);
//       alert("Failed to save reply. Please try again.");
//     }
//   };

//   const filteredLinks = links.filter((link) => link.tid === id);

//   return (
//     <div className="container mt-5">
//       <div className="container py-5">
//         <div className="card m-3 text-start">
//           <div className="card-header p-2">
//             <h5>{task.name}</h5>
//           </div>
//           <div className="card-body">
//             <h6 className="card-text">{task.tt}</h6>
//             <p className="card-text">{task.tdesc}</p>
//           </div>
//         </div>

//         <div>
//           {Array.isArray(links) && links.length > 0 ? (
//             filteredLinks.map((link) => (
//               <div className="card mb-3 mx-3" key={link.id}>
//                 <div className="card-body">
//                   <div className="d-flex align-items-center">
//                     <h6 className="mb-0 text-secondary">{link.name}</h6>
//                   </div>
//                   <p className="text-start m-2 mb-2">
//                     <Link to="#">{link.link}</Link>
//                   </p>
//                   <p className="text-start m-2 mb-0">{link.desc}</p>
//                   <div className="text-end d-block">
//                     <label
//                       htmlFor={`checkbox-${link.id}`}
//                       className={`btn btn-${linkStatuses[link.id] ? "success" : "danger"} btn-sm`}
//                       style={{ cursor: "pointer" }}
//                     >
//                       {linkStatuses[link.id] ? "Correct" : "Incorrect"}
//                     </label>
//                     <input
//                       type="checkbox"
//                       id={`checkbox-${link.id}`}
//                       style={{ display: "none" }} // Hide the actual checkbox
//                       checked={linkStatuses[link.id] || false}
//                       onChange={(e) => handleCheckboxChange(e, link.id)} // Update checkbox state
//                     />
//                     <button
//                       className="btn btn-link"
//                       onClick={() => handleSave(link.id)} // Trigger save action
//                     >
//                       Save Reply
//                     </button>
//                   </div>
//                   <small className="text-body-secondary text-end d-block">
//                     {link.date}
//                   </small>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No Links Found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
