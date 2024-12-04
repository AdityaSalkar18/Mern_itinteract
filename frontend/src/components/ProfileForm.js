import React, { useState, useEffect } from 'react';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    act: "",
    domain: "",
    subdomain: "",
    tech: "",
    email: "",
    phone: "",
    bio: "",
    uimg: "",

    github: "",
    linkedin: "",
    cmail: "",
    cphone: "",
    link: "",

    pone: "",
    plone: "",
    ptwo: "",
    pltwo: "",
    pthree: "",
    plthree: "",

    cone: "",
    cdone: "",
    ctwo: "",
    cdtwo: "",
    cthree: "",
    cdthree: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [subdomains, setSubdomains] = useState([]);
  const [techs, setTechs] = useState([]);

  const domainToSubdomainMap = {
    SoftwareDevelopment: ["FrontendDevelopment", "BackendDevelopment", "FullStackDevelopment", "MobileAppDevelopment"],
    DataScience: ["DataAnalysis", "MachineLearning", "ArtificialIntelligence", "DataEngineering"],
    Cybersecurity: ["SecurityAnalysis", "EthicalHacking", "IncidentResponse", "Governance"],
    DatabaseManagement: ["DatabaseAdministration", "DataEngineering", "DatabaseDevelopment", "DataAnalysis"],
    CloudComputing: ["CloudEngineering", "CloudArchitecture", "CloudSecurity", "CloudAdministration"],
  };

  const subdomainToTechMap = {
    FrontendDevelopment: ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
    BackendDevelopment: ["Node.js", "Django", "Ruby on Rails", "Spring Boot"],
    DataAnalysis: ["Power BI", "Tableau", "Pandas", "Matplotlib"],
    MachineLearning: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Model Optimization"],
    ArtificialIntelligence: ["Expert Systems", "Fuzzy Logic", "Robotics", "AI Chatbots"],
    DataEngineering: ["ETL Processes", "Data Warehousing", "Data Pipelines", "Big Data Frameworks"],
    SecurityAnalysis: ["Penetration Testing", "Vulnerability Assessment", "Risk Management", "Threat Hunting"],
    EthicalHacking: ["Social Engineering", "Network Hacking", "Web Application Hacking", "Wireless Hacking"],
    CloudEngineering: ["AWS", "Google Cloud", "Azure", "Cloud Automation"],
    CloudSecurity: ["Identity and Access Management", "Cloud Encryption", "Cloud Monitoring", "Cloud Threat Intelligence"]
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/profile/edit-my-profile";
      const formDataUpload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataUpload.append(key, value);
      });

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formDataUpload,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSuccessMessage("Profile updated successfully");
      setError("");

      setTimeout(() => setSuccessMessage(""), 2000);

    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      setTimeout(() => setError(""), 2000);
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const url = "http://localhost:8080/api/profile/get-my-profile";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getProfile();
  }, []);

  useEffect(() => {
    setSubdomains(domainToSubdomainMap[formData.domain] || []);
    setFormData((prevData) => ({ ...prevData, subdomain: "" }));
  }, [formData.domain]);

  useEffect(() => {
    setTechs(subdomainToTechMap[formData.subdomain] || []);
    setFormData((prevData) => ({ ...prevData, tech: "" }));
  }, [formData.subdomain]);

  return (
    <div className='container mt-5'>
      <div className="container px-4 py-3">
        {error && <div className="alert alert-danger mt-5" role="alert">{error}</div>}
        {successMessage && <div className="alert alert-success mt-5" role="alert">{successMessage}</div>}

        <div className="container py-2">
          <h3 className='mb-5 mt-3' style={{ textDecoration: "none", color: "#005A9C" }}>Update Profile</h3>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className='container'>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name surname" name="name" value={formData.name} onChange={handleChange} />
                <label htmlFor="floatingInput">Full name</label>
              </div>

              <div className="form-file mb-3">
                <input
                  type="file"
                  name="uimg"
                  className="form-file-input"
                  id="inputImage"
                  accept="image/*"
                  onChange={handleChange}
                />
                <label className="form-file-label" htmlFor="inputImage">Choose image...</label>
              </div>

              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelect" name="act" value={formData.act} onChange={handleChange}>
                  <option value="" disabled>Select Account Type</option>
                  <option value="Student">Student</option>
                  <option value="User">User</option>
                </select>
                <label htmlFor="floatingSelect">Account Type</label>
              </div>

              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelect" name="domain" value={formData.domain} onChange={handleChange}>
                  <option value="" disabled>Select Domain</option>
                  <option value="SoftwareDevelopment">Software Development</option>
                  <option value="DataScience">Data Science</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="DatabaseManagement">Database Management</option>
                  <option value="CloudComputing">Cloud Computing</option>
                </select>
                <label htmlFor="floatingSelect">Domain</label>
              </div>

              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelect" name="subdomain" value={formData.subdomain} onChange={handleChange} disabled={!formData.domain}>
                  <option value="" disabled>Select Subdomain</option>
                  {subdomains.map((subdomain, i) => (
                    <option key={i} value={subdomain}>{subdomain}</option>
                  ))}
                </select>
                <label htmlFor="floatingSelect">Subdomain</label>
              </div>

              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelect" name="tech" value={formData.tech} onChange={handleChange} disabled={!formData.subdomain}>
                  <option value="" disabled>Select Tech</option>
                  {techs.map((tech,i) => (
                    <option key={i} value={tech}>{tech}</option>
                  ))}
                </select>
                <label htmlFor="floatingSelect">Select Tech</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                <label htmlFor="floatingInput">Phone</label>
              </div>

              <div className="form-floating mb-3">
                <textarea className="form-control" id="floatingTextarea" placeholder="Tell something about yourself" name="bio" value={formData.bio} onChange={handleChange}></textarea>
                <label htmlFor="floatingTextarea">Bio</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="GitHub" name="github" value={formData.github} onChange={handleChange} />
                <label htmlFor="floatingInput">GitHub</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="LinkedIn" name="linkedin" value={formData.linkedin} onChange={handleChange} />
                <label htmlFor="floatingInput">LinkedIn</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Contact Email" name="cmail" value={formData.cmail} onChange={handleChange} />
                <label htmlFor="floatingInput">Contact Email</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Contact Phone" name="cphone" value={formData.cphone} onChange={handleChange} />
                <label htmlFor="floatingInput">Contact Phone</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Portfolio Link" name="link" value={formData.link} onChange={handleChange} />
                <label htmlFor="floatingInput">Portfolio Link</label>
              </div>

              <h4 style={{ textDecoration: "none", color: "#005A9C" }}>Projects</h4>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Project One" name="pone" value={formData.pone} onChange={handleChange} />
                <label htmlFor="floatingInput">Project One</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Project Link One" name="plone" value={formData.plone} onChange={handleChange} />
                <label htmlFor="floatingInput">Project Link One</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Project Two" name="ptwo" value={formData.ptwo} onChange={handleChange} />
                <label htmlFor="floatingInput">Project Two</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Project Link Two" name="pltwo" value={formData.pltwo} onChange={handleChange} />
                <label htmlFor="floatingInput">Project Link Two</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Project Three" name="pthree" value={formData.pthree} onChange={handleChange} />
                <label htmlFor="floatingInput">Project Three</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Project Link Three" name="plthree" value={formData.plthree} onChange={handleChange} />
                <label htmlFor="floatingInput">Project Link Three</label>
              </div>

              <h4 style={{ textDecoration: "none", color: "#005A9C" }}>Certifications</h4>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Certification One" name="cone" value={formData.cone} onChange={handleChange} />
                <label htmlFor="floatingInput">Certification One</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Certification Date One" name="cdone" value={formData.cdone} onChange={handleChange} />
                <label htmlFor="floatingInput">Certification Date One</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Certification Two" name="ctwo" value={formData.ctwo} onChange={handleChange} />
                <label htmlFor="floatingInput">Certification Two</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Certification Date Two" name="cdtwo" value={formData.cdtwo} onChange={handleChange} />
                <label htmlFor="floatingInput">Certification Date Two</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Certification Three" name="cthree" value={formData.cthree} onChange={handleChange} />
                <label htmlFor="floatingInput">Certification Three</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Certification Date Three" name="cdthree" value={formData.cdthree} onChange={handleChange} />
                <label htmlFor="floatingInput">Certification Date Three</label>
              </div>

              <div className="d-flex justify-content-start"> 
    <button type="submit" className="btn" style={{ backgroundColor: "#005A9C", borderColor: "#005A9C", color: 'white' }}>
        Update Profile
    </button>
</div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
