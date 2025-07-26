// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const domainToSubdomainMap = {
//   "Software Development": ["Frontend", "Backend", "Full-Stack", "Mobile App"],
//   "Data Science": ["Data Analysis", "Machine Learning", "AI Development", "Data Engineering"],
//   "Cybersecurity": ["Security Analysis", "Ethical Hacking", "Incident Response", "Governance"],
//   "Database Management": ["DB Admin", "Data Engineering", "DB Development", "Data Analysis"],
//   "Cloud Computing": ["Cloud Engineering", "Architecture", "Cloud Security", "Cloud Admin"],
// };

// // Function to generate shades of a color
// const generateShades = (baseColor, count) => {
//   return Array.from({ length: count }, (_, i) => {
//     const opacity = (1 - i * 0.2).toFixed(2);
//     return `${baseColor}${Math.floor(opacity * 255).toString(16).padStart(2, "0")}`;
//   });
// };

// const baseColor = "#005A9C";
// const colors = generateShades(baseColor, 4); // Generate 4 shades for consistency.

// export default function TaskImpact() {
//   const domains = Object.entries(domainToSubdomainMap);


//   const [replies, setReplies] = useState([]);
  

//   useEffect(() => {
//     // Fetch the replies from the backend using Axios
//     const fetchReplies = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const response = await axios.get("http://localhost:8080/api/api/reply/myreply", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });

//         setReplies(response.data); // Set the fetched data
//       } catch (error) {
        
//         console.error("Error fetching replies:", error);
//       }
//     };

//     fetchReplies();
//   }, []); // Empty dependency array ensures it runs once on mount
//   return (
//     <div className='container mt-5'>
//       <div className="container  px-4 py-3">
//     <div className="container ">
//       <h1 className="mb-5" style={{ textAlign: "center", margin: "20px 0" , color:"#005A9C"}}>TaskImpact: Domains and Subdomains</h1>
//       <div className="row">
//         {domains.slice(0, 4).map(([domain, subdomains], index) => (
//           <div className="col-md-6 mb-4" key={index}>
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//               <div style={{ width: "100%", height: "300px" }}>
//                 <Doughnut
//                   data={{
//                     labels: subdomains,
//                     datasets: [
//                       {
//                         data: Array(subdomains.length).fill(1),
//                         backgroundColor: colors.slice(0, subdomains.length),
//                         hoverBackgroundColor: colors.slice(0, subdomains.length),
//                       },
//                     ],
//                   }}
//                 />
//               </div>
//               <h3 style={{ marginTop: "10px", textAlign: "center" }}>{domain}</h3> {/* Centered title */}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="row justify-content-center">
//         {domains.slice(4).map(([domain, subdomains], index) => (
//           <div className="col-md-6 mb-4" key={index}>
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//               <div style={{ width: "100%", height: "300px" }}>
//                 <Doughnut
//                   data={{
//                     labels: subdomains,
//                     datasets: [
//                       {
//                         data: Array(subdomains.length).fill(1),
//                         backgroundColor: colors.slice(0, subdomains.length),
//                         hoverBackgroundColor: colors.slice(0, subdomains.length),
//                       },
//                     ],
//                   }}
//                 />
//               </div>
//               <h3 style={{ marginTop: "10px", textAlign: "center" }}>{domain}</h3> {/* Centered title */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>



//     <div class="container mt-5">
//   <h2 class="mb-4" style={{color:"#005A9C"}}>Task List</h2>
//   <div className="container mt-5">
    

//       <h2>Replies</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Task Reply Subdomian</th>
//             {/* <th scope="col">Link</th> */}
//             <th scope="col">Name</th>
//             <th scope="col">Reply</th>
//           </tr>
//         </thead>
//         <tbody>
//           {replies.length > 0 ? (
//             replies.map((reply) => (
//               <tr key={reply._id}>
//                <td>{reply.linksd}</td> 
//                 {/* <td>{reply.link ? reply.link : "N/A"}</td> */}
//                 <td>{reply.name}</td>
//                 <td>{reply.reply}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">No replies found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
// </div>

//     </div>
//     </div>
//   );
// }


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function TaskImpact() {
//   const [replies, setReplies] = useState([]);
//   const [chartData, setChartData] = useState([]);

//   // Color mapping for subdomains
//   const colorMapping = {
//     "FrontendDevelopment": "#FF6384",
//     "BackendDevelopment": "#36A2EB",
//     "FullStackDevelopment": "#FFCE56",
//     "MobileAppDevelopment": "#4BC0C0",
//     "DataAnalysis": "#9966FF",
//     "MachineLearning": "#FF9F40",
//     "ArtificialIntelligence": "#FF5733",
//     "DataEngineering": "#F1C40F",
//     "SecurityAnalysis": "#2ECC71",
//     "EthicalHacking": "#E74C3C",
//     "IncidentResponse": "#1ABC9C",
//     "Governance": "#8E44AD",
//     "DatabaseAdministration": "#3498DB",
//     "DatabaseDevelopment": "#9B59B6",
//     "CloudEngineering": "#F39C12",
//     "CloudArchitecture": "#2C3E50",
//     "CloudSecurity": "#D35400",
//     "CloudAdministration": "#16A085",
//   };

//   // Domains and their respective subdomains
//   const domains = {
//     SoftwareDevelopment: ["FrontendDevelopment", "BackendDevelopment", "FullStackDevelopment", "MobileAppDevelopment"],
//     DataScience: ["DataAnalysis", "MachineLearning", "ArtificialIntelligence", "DataEngineering"],
//     Cybersecurity: ["SecurityAnalysis", "EthicalHacking", "IncidentResponse", "Governance"],
//     DatabaseManagement: ["DatabaseAdministration", "DataEngineering", "DatabaseDevelopment", "DataAnalysis"],
//     CloudComputing: ["CloudEngineering", "CloudArchitecture", "CloudSecurity", "CloudAdministration"],
//   };

//   useEffect(() => {
//     // Fetch the replies from the backend
//     const fetchReplies = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const response = await axios.get("http://localhost:8080/api/api/reply/myreply", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });

//         setReplies(response.data);
//         generateChartData(response.data); // Generate chart data based on the replies
//       } catch (error) {
//         console.error("Error fetching replies:", error);
//       }
//     };

//     fetchReplies();
//   }, []);

//   // Function to generate chart data based on the replies
//   const generateChartData = (data) => {
//     const domainData = {};

//     // Initialize domainData object with empty arrays
//     Object.keys(domains).forEach((domain) => {
//       domainData[domain] = [];
//     });

//     // Organize the replies by subdomain
//     data.forEach((reply) => {
//       Object.entries(domains).forEach(([domain, subdomains]) => {
//         if (subdomains.includes(reply.linksd)) {
//           domainData[domain].push({ subdomain: reply.linksd, replyValue: parseFloat(reply.reply) });
//         }
//       });
//     });

//     // Generate chart data for each domain
//     const chartDataArray = Object.entries(domainData).map(([domain, replies]) => {
//       const labels = [];
//       const values = [];
//       const colors = [];

//       replies.forEach(({ subdomain, replyValue }) => {
//         labels.push(subdomain);
//         values.push(replyValue);
//         colors.push(colorMapping[subdomain] || "#D3D3D3"); // Default color if subdomain is not mapped
//       });

//       return {
//         domain,
//         chartData: {
//           labels,
//           datasets: [
//             {
//               data: values,
//               backgroundColor: colors,
//               hoverBackgroundColor: colors.map(
//                 (color) => color.replace(")", ", 0.8)").replace("rgb", "rgba")
//               ),
//             },
//           ],
//         },
//       };
//     });

//     setChartData(chartDataArray);
//   };

//   return (
//     <div className='container mt-5'>
//     <div className="container  px-4 py-3">
//   <div className="container py-5">

//       <h1 className="mb-5" style={{ textAlign: "center", color: "#005A9C" }}>
//         TaskImpact
//       </h1>

//       {/* Display Subdomain Colors as Legend */}
//       <div className="legend mb-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {Object.entries(colorMapping).map(([subdomain, color]) => (
//           <div key={subdomain} style={{ margin: "10px", display: "flex", alignItems: "center" }}>
//             <div
//               style={{
//                 width: "20px",
//                 height: "20px",
//                 backgroundColor: color,
//                 marginRight: "10px",
//                 borderRadius: "50%",
//               }}
//             ></div>
//             <strong>{subdomain}</strong>
//           </div>
//         ))}
//       </div>

//       {/* Render Doughnut Charts for Each Domain */}
//       {chartData.length > 0 &&
//         chartData.map(({ domain, chartData }) => (
//           <div key={domain}>
//             <h3 className="text-center" style={{ color: "#005A9C" }}>
//               {domain.replace(/([A-Z])/g, " $1").trim()} 
//             </h3>
//             <div style={{ width: "50%", margin: "0 auto" }}>
//               <Doughnut
//                 data={chartData}
//                 options={{
//                   plugins: {
//                     tooltip: {
//                       callbacks: {
//                         label: (tooltipItem) =>
//                           `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`,
//                       },
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         ))}

//       <h2 className="mt-5" style={{ color: "#005A9C" }}>
//         Task List
//       </h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Task Reply Subdomain</th>
//             <th scope="col">Name</th>
//             <th scope="col">Reply</th>
//           </tr>
//         </thead>
//         <tbody>
//           {replies.length > 0 ? (
//             replies.map((reply) => (
//               <tr key={reply._id}>
//                 <td>{reply.linksd}</td>
//                 <td>{reply.name}</td>
//                 <td>{reply.reply}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">No replies found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//     </div>
//     </div>
//   );
// }


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

export default function TaskImpact() {
  const [replies, setReplies] = useState([]);
  const [chartData, setChartData] = useState({});
  const [subdomainAverages, setSubdomainAverages] = useState([]);

  // Color mapping for subdomains
  const colorMapping = {
    "FrontendDevelopment": "#FF6384",
    "BackendDevelopment": "#36A2EB",
    "FullStackDevelopment": "#FFCE56",
    "MobileAppDevelopment": "#4BC0C0",
    "DataAnalysis": "#9966FF",
    "MachineLearning": "#FF9F40",
    "ArtificialIntelligence": "#FF5733",
    "DataEngineering": "#F1C40F",
    "SecurityAnalysis": "#2ECC71",
    "EthicalHacking": "#E74C3C",
    "IncidentResponse": "#1ABC9C",
    "Governance": "#8E44AD",
    "DatabaseAdministration": "#349858",
    "DatabaseDevelopment": "#9B59B6",
    "CloudEngineering": "#F39C12",
    "CloudArchitecture": "#2C3E50",
    "CloudSecurity": "#D35400",
    "CloudAdministration": "#16A085",
  };

  // Domains and their respective subdomains
  const domains = {
    SoftwareDevelopment: ["FrontendDevelopment", "BackendDevelopment", "FullStackDevelopment", "MobileAppDevelopment"],
    DataScience: ["DataAnalysis", "MachineLearning", "ArtificialIntelligence", "DataEngineering"],
    Cybersecurity: ["SecurityAnalysis", "EthicalHacking", "IncidentResponse", "Governance"],
    DatabaseManagement: ["DatabaseAdministration", "DataEngineering", "DatabaseDevelopment", "DataAnalysis"],
    CloudComputing: ["CloudEngineering", "CloudArchitecture", "CloudSecurity", "CloudAdministration"],
  };

  useEffect(() => {
    // Fetch the replies from the backend
    const fetchReplies = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:8080/api/api/reply/myreply", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        setReplies(response.data);
        generateChartData(response.data); // Generate chart data based on the replies
      } catch (error) {
        console.error("Error fetching replies:", error);
      }
    };

    fetchReplies();
  }, []);

  // Function to calculate average replies and generate chart data for each domain
  const generateChartData = (data) => {
    const domainChartData = {};
    const subdomainData = {};
    const subdomainAvgData = [];

    // Initialize subdomain data for each domain
    Object.keys(domains).forEach((domain) => {
      domainChartData[domain] = {
        labels: [],
        data: [],
        colors: [],
      };
    });

    // Calculate sum and count for each subdomain
    Object.values(domains).flat().forEach((subdomain) => {
      subdomainData[subdomain] = { sum: 0, count: 0 };
    });

    data.forEach((reply) => {
      if (subdomainData[reply.linksd]) {
        subdomainData[reply.linksd].sum += parseFloat(reply.reply);
        subdomainData[reply.linksd].count += 1;
      }
    });

    // Calculate average and organize data by domain
    Object.entries(subdomainData).forEach(([subdomain, { sum, count }]) => {
      if (count > 0) {
        Object.entries(domains).forEach(([domain, subdomains]) => {
          if (subdomains.includes(subdomain)) {
            domainChartData[domain].labels.push(subdomain);
            domainChartData[domain].data.push(sum / count); // Calculate average
            domainChartData[domain].colors.push(colorMapping[subdomain] || "#D3D3D3");
            subdomainAvgData.push({ subdomain, average: (sum / count).toFixed(2) });
          }
        });
      }
    });

    setChartData(domainChartData);
    setSubdomainAverages(subdomainAvgData); // Set the subdomain averages for the table
  };

  return (
    <div className="container mt-5 py-5">
      <h1 className="mb-5 mt-5" style={{ textAlign: "center", color: "#005A9C" }}>
        Task Impact 
      </h1>

      {/* Grid container for 2 rows and 2 columns layout */}
      <div className="row">
        {/* First Row */}
        {Object.entries(chartData).slice(0, 2).map(([domain, { labels, data, colors }]) => (
          <div key={domain} className="col-md-6 d-flex justify-content-center mb-4">
            <div style={{ width: "300px", height: "300px" }}>
              <h2 style={{ textAlign: "center", color: "#333" }}>{domain}</h2>
              {labels.length > 0 ? (
                <Pie
                  data={{
                    labels,
                    datasets: [
                      {
                        data,
                        backgroundColor: colors,
                        borderColor: colors,
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`,
                        },
                      },
                      legend: {
                        display: true,
                        position: "top",
                      },
                    },
                  }}
                  width={300}  // Width of the pie chart
                  height={300} // Height of the pie chart
                />
              ) : (
                <p style={{ textAlign: "center" }}>No data available for this domain.</p>
              )}
            </div>
          </div>
        ))}

        {/* Second Row */}
        {Object.entries(chartData).slice(2, 4).map(([domain, { labels, data, colors }]) => (
          <div key={domain} className="col-md-6 d-flex justify-content-center mb-4 mt-5">
            <div style={{ width: "300px", height: "300px" }}>
              <h2 style={{ textAlign: "center", color: "#333" }}>{domain}</h2>
              {labels.length > 0 ? (
                <Pie
                  data={{
                    labels,
                    datasets: [
                      {
                        data,
                        backgroundColor: colors,
                        borderColor: colors,
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`,
                        },
                      },
                      legend: {
                        display: true,
                        position: "top",
                      },
                    },
                  }}
                  width={300}  // Width of the pie chart
                  height={300} // Height of the pie chart
                />
              ) : (
                <p style={{ textAlign: "center" }}>No data available for this domain.</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Third Row - Centered chart */}
      <div className="row justify-content-center">
        {Object.entries(chartData).length > 4 && (
          <div className="col-md-4 d-flex justify-content-center mb-4 mt-5">
            <div style={{ width: "300px", height: "300px" }}>
              <h2 style={{ textAlign: "center", color: "#333" }}>
                {Object.entries(chartData)[4][0]} {/* Display the domain name of the 5th chart */}
              </h2>
              {Object.entries(chartData)[4][1].labels.length > 0 ? (
                <Pie
                  data={{
                    labels: Object.entries(chartData)[4][1].labels,
                    datasets: [
                      {
                        data: Object.entries(chartData)[4][1].data,
                        backgroundColor: Object.entries(chartData)[4][1].colors,
                        borderColor: Object.entries(chartData)[4][1].colors,
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`,
                        },
                      },
                      legend: {
                        display: true,
                        position: "top",
                      },
                    },
                  }}
                  width={300}  // Width of the pie chart
                  height={300} // Height of the pie chart
                />
              ) : (
                <p style={{ textAlign: "center" }}>No data available for this domain.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Table with Raw Reply Data */}
      <div className="mt-5">
        <h2 style={{ textAlign: "center", color: "#333" }}>Task Feedback Data</h2>
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Subdomain</th>
              <th>Task Impact</th>
              <th>Feedback By</th> {/* You can modify this according to your actual data fields */}
             
            </tr>
          </thead>
          <tbody>
            {replies.map((reply, index) => (
              <tr key={index}>
                <td>{reply.linksd}</td>
                <td>{reply.reply}</td>
                <td>{reply.name}</td> {/* Example: Adjust as per your data structure */}
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
