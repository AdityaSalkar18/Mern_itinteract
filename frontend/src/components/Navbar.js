import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { SubdomainContext } from './SubdomainContext';
import networkLogo from './network.png';
export default function Navbar() {
  const { setSubdomain } = useContext(SubdomainContext);
  const [isActive, setIsActive] = useState(true);




  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/";
  };

  const checkModal = () => {
    const modal = document.getElementById('collapseExample');
    if (isActive) {
      modal.classList.add('show');
      modal.style.display = 'block';
    } else {
      modal.classList.remove('show');
      modal.style.display = 'none';
      setIsActive(true);
    }
  }

  
  const handleSubdomainChange = (subdomain) => {
    setIsActive(false);
    checkModal();
    setSubdomain(subdomain);
  };

  return (
    <>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top " aria-label="Ninth navbar example">
        <div className="container-xl py-2">
          <Link className="navbar-brand text-secondary fw-bold ms-3" to="#"><img src={networkLogo} alt="" width="38" height="38"></img>ITInteract</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link px-2 link-secondary">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/account" className="nav-link px-2 link-secondary">Account</Link>
              </li>

              <li className="nav-item">

                <li className="d-lg-none">
                  <Link
                    to="#offcanvasScrolling"
                    className="nav-link px-2 link-secondaryr"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasScrolling"
                  >
                    Domains
                  </Link>
                </li>


                <li className="d-none d-lg-block">
                  <Link
                    to="#collapseExample"
                    className="nav-link px-2 link-secondary"
                    role="button"
                    aria-expanded="false"
                    data-bs-toggle="collapse"
                    onClick={() => {
                      setIsActive(!isActive);
                      checkModal()
                    }}
                    aria-controls="collapseExample"
                  >
                    Domains
                  </Link>
                </li>
              </li>

              <li className="nav-item">
                <Link to="/notificationrecived" className="nav-link px-2 link-secondary">Notification</Link>
              </li>
            </ul>
            <form role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>

            <div className="dropdown  px-3 ">
              <Link to="/" className="d-block text-decoration-none dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-circle text-secondary" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>

              </Link>
              <ul className="dropdown-menu text-small">
                <li><Link className="dropdown-item" to="https://meet.google.com/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                  </svg>
                  Meet</Link>
                </li>
                <li><Link className="dropdown-item" to="/profileform">Edit Profile</Link></li>
                <li><Link className="dropdown-item" to="/">Settings</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Sign out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container collapse mb-2" id="collapseExample" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1, marginTop: "80px" }}>
  <div className="card card-body bg-dark text-secondary">

    <div className="container px-4 py-2" id="hanging-icons">
      <h3 className="pb-2">Domain - SubDomain Categories</h3>
      <div className="row g-4 py-2 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
          <div>
            <h6 className="fs-4 text-secondary">Software Development</h6>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('BackendDevelopment'); document.getElementById('collapseExample').classList.remove('show'); }}>Backend Development</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('FrontendDevelopment'); document.getElementById('collapseExample').classList.remove('show'); }}>Frontend Development</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('FullStackDevelopment'); document.getElementById('collapseExample').classList.remove('show'); }}>Full Stack Development</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('MobileAppDevelopment'); document.getElementById('collapseExample').classList.remove('show'); }}>Mobile App Development</Link></p>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
          <div>
            <h6 className="fs-4 text-secondary">Data Science</h6>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('DataAnalysis'); document.getElementById('collapseExample').classList.remove('show'); }}>Data Analysis</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('MachineLearning'); document.getElementById('collapseExample').classList.remove('show'); }}>Machine Learning</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('ArtificialIntelligence'); document.getElementById('collapseExample').classList.remove('show'); }}>Artificial Intelligence</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('DataEngineering'); document.getElementById('collapseExample').classList.remove('show'); }}>Data Engineering</Link></p>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
          <div>
            <h6 className="fs-4 text-secondary">Cybersecurity</h6>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('SecurityAnalysis'); document.getElementById('collapseExample').classList.remove('show'); }}>Security Analysis</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('EthicalHacking'); document.getElementById('collapseExample').classList.remove('show'); }}>Ethical Hacking</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('IncidentResponse'); document.getElementById('collapseExample').classList.remove('show'); }}>Incident Response</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('Governance'); document.getElementById('collapseExample').classList.remove('show'); }}>Governance</Link></p>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
          <div>
            <h6 className="fs-4 text-secondary">Database Management</h6>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('DatabaseAdministration'); document.getElementById('collapseExample').classList.remove('show'); }}>Database Administration</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('DataEngineering'); document.getElementById('collapseExample').classList.remove('show'); }}>Data Engineering</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('DatabaseDevelopment'); document.getElementById('collapseExample').classList.remove('show'); }}>Database Development</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('DataAnalysis'); document.getElementById('collapseExample').classList.remove('show'); }}>Data Analysis</Link></p>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
          <div>
            <h6 className="fs-4 text-secondary">Cloud Computing</h6>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('CloudEngineering'); document.getElementById('collapseExample').classList.remove('show'); }}>Cloud Engineering</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('CloudArchitecture'); document.getElementById('collapseExample').classList.remove('show'); }}>Cloud Architecture</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('CloudSecurity'); document.getElementById('collapseExample').classList.remove('show'); }}>Cloud Security</Link></p>
            <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => { handleSubdomainChange('CloudAdministration'); document.getElementById('collapseExample').classList.remove('show'); }}>Cloud Administration</Link></p>
          </div>
        </div>
      </div>
    </div>



    <div className="text-center mt-3">
  <Link
    
    to="#collapseExample"
    data-bs-toggle="collapse"
    aria-expanded="true"
    aria-controls="collapseExample"
    style={{color:"#6c757d"}}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      className="bi bi-chevron-double-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"
      />
      <path
        fillRule="evenodd"
        d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
      />
    </svg>
  </Link>
</div>

  </div>
</div>



      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header bg-dark text-secondary ">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Select Domains / Sub Domains</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>


        <div class="offcanvas-body bg-dark text-secondary">

          <div className="container ">
            <div>
              <h6 className="fw-bold mb-0 fs-4">Software Development</h6>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('BackendDevelopment')}>Backend Development</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('FrontendDevelopment')}>Frontend Development</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('FullStackDevelopment')}>Full Stack Development</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('MobileAppDevelopment')}>Mobile App Development</Link></p>
            </div>
          </div>

          <div className="container ">
            <div>
              <h6 className="fw-bold mb-0 fs-4">Data Science</h6>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('DataAnalysis')}>Data Analysis</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('MachineLearning')}>Machine Learning</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('ArtificialIntelligence')}>Artificial Intelligence</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('DataEngineering')}>Data Engineering</Link></p>
            </div>
          </div>

          <div className="container ">
            <div>
              <h6 className="fw-bold mb-0 fs-4">Cybersecurity</h6>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('SecurityAnalysis')}>Security Analysis</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('EthicalHacking')}>Ethical Hacking</Link></p>


              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('IncidentResponse')}>Incident Response</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('Governance')}>Governance</Link></p>
            </div>
          </div>

          <div className="container ">
            <div>
              <h6 className="fw-bold mb-0 fs-4">Database Management</h6>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('DatabaseAdministration')}>Database Administration</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('DataEngineering')}>Data Engineering</Link></p>

              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('DatabaseDevelopment')}>Database Development</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('DataAnalysis')}>Data Analysis</Link></p>
            </div>
          </div>

          <div className="container ">
            <div>
              <h6 className="fw-bold mb-0 fs-4">Cloud Computing</h6>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('CloudEngineering')}>Cloud Engineering</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('CloudArchitecture')}>Cloud Architecture</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('CloudSecurity')}>Cloud Security</Link></p>
              <p><Link to="/updates" className="text-secondary" style={{ textDecoration: "none" }} onClick={() => handleSubdomainChange('CloudAdministration')}>Cloud Administration</Link></p>
            </div>
          </div>





        </div>

      </div>



    </>

  )
}
