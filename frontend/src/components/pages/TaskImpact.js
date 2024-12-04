import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const domainToSubdomainMap = {
  "Software Development": ["Frontend", "Backend", "Full-Stack", "Mobile App"],
  "Data Science": ["Data Analysis", "Machine Learning", "AI Development", "Data Engineering"],
  "Cybersecurity": ["Security Analysis", "Ethical Hacking", "Incident Response", "Governance"],
  "Database Management": ["DB Admin", "Data Engineering", "DB Development", "Data Analysis"],
  "Cloud Computing": ["Cloud Engineering", "Architecture", "Cloud Security", "Cloud Admin"],
};

// Function to generate shades of a color
const generateShades = (baseColor, count) => {
  return Array.from({ length: count }, (_, i) => {
    const opacity = (1 - i * 0.2).toFixed(2);
    return `${baseColor}${Math.floor(opacity * 255).toString(16).padStart(2, "0")}`;
  });
};

const baseColor = "#005A9C";
const colors = generateShades(baseColor, 4); // Generate 4 shades for consistency.

export default function TaskImpact() {
  const domains = Object.entries(domainToSubdomainMap);

  return (
    <div className='container mt-5'>
      <div className="container  px-4 py-3">
    <div className="container ">
      <h1 className="mb-5" style={{ textAlign: "center", margin: "20px 0" , color:"#005A9C"}}>TaskImpact: Domains and Subdomains</h1>
      <div className="row">
        {domains.slice(0, 4).map(([domain, subdomains], index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", height: "300px" }}>
                <Doughnut
                  data={{
                    labels: subdomains,
                    datasets: [
                      {
                        data: Array(subdomains.length).fill(1),
                        backgroundColor: colors.slice(0, subdomains.length),
                        hoverBackgroundColor: colors.slice(0, subdomains.length),
                      },
                    ],
                  }}
                />
              </div>
              <h3 style={{ marginTop: "10px", textAlign: "center" }}>{domain}</h3> {/* Centered title */}
            </div>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {domains.slice(4).map(([domain, subdomains], index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", height: "300px" }}>
                <Doughnut
                  data={{
                    labels: subdomains,
                    datasets: [
                      {
                        data: Array(subdomains.length).fill(1),
                        backgroundColor: colors.slice(0, subdomains.length),
                        hoverBackgroundColor: colors.slice(0, subdomains.length),
                      },
                    ],
                  }}
                />
              </div>
              <h3 style={{ marginTop: "10px", textAlign: "center" }}>{domain}</h3> {/* Centered title */}
            </div>
          </div>
        ))}
      </div>
    </div>



    <div class="container mt-5">
  <h2 class="mb-4" style={{color:"#005A9C"}}>Task List</h2>
  <table class="table table-bordered table-striped">
    <thead class="table-dark">
      <tr>
        <th scope="col">Task ID</th>
        <th scope="col">Task Subdomain</th>
        <th scope="col">Task Name</th>
        <th scope="col">Author</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>652d91b47f1c3b2f78f8a5f0</td>
        <td>Frontend</td>
        <td>Design Login Page</td>
        <td>John Doe</td>
      </tr>
      <tr>
        <td>652d91b47f1c3b2f78f8a5f55</td>
        <td>Backend</td>
        <td>Create API for Users</td>
        <td>Jane Smith</td>
      </tr>
      <tr>
        <td>652d91b47f1c3b2f78f8a556</td>
        <td>DevOps</td>
        <td>Setup CI/CD Pipeline</td>
        <td>Chris Evans</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
    </div>
  );
}
