import React, { useState, useEffect } from 'react';

const ProfileForm = () => {


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



    //validation

    const [validationErrors, setValidationErrors] = useState({});

    const validateForm = () => {
        let errors = {};


        if (!formData.name || formData.name.trim() === "") {
            errors.name = "Name is required.";
        } else if (!/^[a-zA-Z]+(\s[a-zA-Z]+)+$/.test(formData.name.trim())) {
            errors.name = "Enter a valid full name (first and last name).";
        }


        if (!formData.email || formData.email.trim() === "") {
            errors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Enter a valid email address.";
        }

        if (formData.phone && formData.phone.trim() !== "" && !/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Enter a valid 10-digit phone number.";
        }


        // GitHub URL validation
        const githubPattern = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/?$/;
        if (formData.github && formData.github.trim() !== "" && !githubPattern.test(formData.github)) {
            errors.github = "Enter a valid GitHub profile URL (e.g., https://github.com/username).";
        }

        // LinkedIn URL validation
        const linkedinPattern = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
        if (formData.linkedin && formData.linkedin.trim() !== "" && !linkedinPattern.test(formData.linkedin)) {
            errors.linkedin = "Enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username).";
        }


        // Email Validation (only if provided)
        if (formData.cmail && formData.cmail.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.cmail)) {
            errors.cmail = "Enter a valid email address.";
        }

        // Phone Number Validation (only if provided)
        if (formData.cphone && formData.cphone.trim() !== "" && !/^\d{10}$/.test(formData.cphone)) {
            errors.cphone = "Enter a valid 10-digit phone number.";
        }

        // Website/Portfolio Link Validation (only if provided)
        const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;

        if (formData.link && formData.link.trim() !== "" && !urlPattern.test(formData.link)) {
            errors.link = "Enter a valid website URL (e.g., https://myportfolio.com).";
        }

        // Validate Project Link One (only if provided)
        if (formData.plone && formData.plone.trim() !== "" && !urlPattern.test(formData.plone)) {
            errors.plone = "Enter a valid project link (e.g., https://example.com).";
        }

        // Validate Project Link Two (only if provided)
        if (formData.pltwo && formData.pltwo.trim() !== "" && !urlPattern.test(formData.pltwo)) {
            errors.pltwo = "Enter a valid project link (e.g., https://example.com).";
        }

        // Validate Project Link Three (only if provided)
        if (formData.plthree && formData.plthree.trim() !== "" && !urlPattern.test(formData.plthree)) {
            errors.plthree = "Enter a valid project link (e.g., https://example.com).";
        }


        // Validate Certification Link One (only if provided)
        if (formData.cdone && formData.cdone.trim() !== "" && !urlPattern.test(formData.cdone)) {
            errors.cdone = "Enter a valid certification link (e.g., https://example.com).";
        }

        // Validate Certification Link Two (only if provided)
        if (formData.cdtwo && formData.cdtwo.trim() !== "" && !urlPattern.test(formData.cdtwo)) {
            errors.cdtwo = "Enter a valid certification link (e.g., https://example.com).";
        }

        // Validate Certification Link Three (only if provided)
        if (formData.cdthree && formData.cdthree.trim() !== "" && !urlPattern.test(formData.cdthree)) {
            errors.cdthree = "Enter a valid certification link (e.g., https://example.com).";
        }



        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const url = "http://localhost:8080/api/profile/edit-my-profile";
    //         const formDataUpload = new FormData();
    //         Object.entries(formData).forEach(([key, value]) => {
    //             formDataUpload.append(key, value);
    //         });

    //         const response = await fetch(url, {
    //             method: "PATCH",
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //             body: formDataUpload,
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }

    //         const data = await response.json();
    //         setSuccessMessage("Profile updated successfully");
    //         setError("");

    //         setTimeout(() => setSuccessMessage(""), 2000);

    //     } catch (error) {
    //         setError(error.message);
    //         setSuccessMessage("");
    //         setTimeout(() => setError(""), 2000);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop form submission if validation fails
        }

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
        <>

            <div className="container mx-auto my-8  p-4 m-3 mt-16">
                <div className="container px-4 py-3">
                    {error && (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-medium">Danger alert!</span> {error}
                        </div>
                    )}
                    {successMessage && (
                        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span className="font-medium">Success alert!</span> {successMessage}
                        </div>
                    )}




                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Enter Name
                            </label>
                            <input
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.name ? "border-red-500" : "border-gray-300"
                                    }`}
                                type="text"
                                placeholder="First Last"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {validationErrors.name && (
                                <p className="mt-2 text-sm text-red-600">{validationErrors.name}</p>
                            )}
                        </div>




                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="inputImage">Upload Profile Image</label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-50 rounded-lg cursor-pointer bg-gray-100 dark:text-gray-400 focus:outline-none focus:ring focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            type="file"
                            name="image"
                            className="form-file-input"
                            id="inputImage"
                            accept="image/*"
                            onChange={handleChange} />
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>



                        <div>
                            {/* <label
                                htmlFor="accountType"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Account Type
                            </label>
                            <select
                                id="accountType"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="act"
                                value={formData.act}
                                onChange={handleChange}
                            >
                                <option value="" disabled>
                                    Select Account Type
                                </option>
                                <option value="Student">Student</option>
                                <option value="User">User</option>
                            </select> */}

                            <label
                                htmlFor="accountType"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Account Type
                            </label>

                            <select
                                id="accountType"
                                name="act"
                                value={formData.act}
                                onChange={handleChange}
                                disabled
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full p-3 
               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
               cursor-not-allowed opacity-50"
                            >
                                <option value="Student">Student</option>
                                <option value="User">User</option>
                            </select>

                        </div>


                        <div className="max-w-full mx-auto grid grid-cols-3 gap-6 py-4">


                            <div>
                                <label
                                    htmlFor="domain"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Domain
                                </label>
                                <select
                                    id="domain"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="domain"
                                    value={formData.domain}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Select Domain
                                    </option>
                                    <option value="SoftwareDevelopment">Software Development</option>
                                    <option value="DataScience">Data Science</option>
                                    <option value="Cybersecurity">Cybersecurity</option>
                                    <option value="DatabaseManagement">Database Management</option>
                                    <option value="CloudComputing">Cloud Computing</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="subdomain"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Subdomain
                                </label>
                                <select
                                    id="subdomain"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="subdomain"
                                    value={formData.subdomain}
                                    onChange={handleChange}
                                    disabled={!formData.domain}
                                >
                                    <option value="" disabled>
                                        Select Subdomain
                                    </option>
                                    {subdomains.map((subdomain, i) => (
                                        <option key={i} value={subdomain}>
                                            {subdomain}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="tech"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Select Tech
                                </label>
                                <select
                                    id="tech"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="tech"
                                    value={formData.tech}
                                    onChange={handleChange}
                                    disabled={!formData.subdomain}
                                >
                                    <option value="" disabled>
                                        Select Tech
                                    </option>
                                    {techs.map((tech, i) => (
                                        <option key={i} value={tech}>
                                            {tech}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>



                        <div className="mb-6">
                            {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Enter Your Email Address
                            </label>
                            <input
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {validationErrors.email && (
                                <p className="mt-2 text-sm text-red-600">{validationErrors.email}</p>
                            )} */}

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                 Email Address
                            </label>

                            <input
    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white opacity-50 cursor-not-allowed ${validationErrors.email ? "border-red-500" : "border-gray-300"
        }`}
    type="email"
    placeholder="name@example.com"
    name="email"
    value={formData.email}
    disabled
/>

                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Enter Your Phone No
                            </label>
                            <input
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.phone ? "border-red-500" : "border-gray-300"
                                    }`}
                                type="text"
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {validationErrors.phone && (
                                <p className="mt-2 text-sm text-red-600">{validationErrors.phone}</p>
                            )}
                        </div>


                        <div class="mb-6">
                            <label for="bio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Bio</label>
                            <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tell something about yourself" name="bio" value={formData.bio} onChange={handleChange}></textarea>
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Enter GitHub
                            </label>
                            <input
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.github ? "border-red-500" : "border-gray-300"
                                    }`}
                                type="text"
                                placeholder="GitHub"
                                name="github"
                                value={formData.github}
                                onChange={handleChange}
                            />
                            {validationErrors.github && (
                                <p className="mt-2 text-sm text-red-600">{validationErrors.github}</p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Enter LinkedIn
                            </label>
                            <input
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.linkedin ? "border-red-500" : "border-gray-300"
                                    }`}
                                type="text"
                                placeholder="LinkedIn"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleChange}
                            />
                            {validationErrors.linkedin && (
                                <p className="mt-2 text-sm text-red-600">{validationErrors.linkedin}</p>
                            )}
                        </div>



                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Enter Contact Email Address
                            </label>
                            <input
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.cmail ? "border-red-500" : "border-gray-300"
                                    }`}
                                type="email"
                                placeholder="name@example.com"
                                name="cmail"
                                value={formData.cmail}
                                onChange={handleChange}
                            />
                            {validationErrors.cmail && (
                                <p className="mt-2 text-sm text-red-600">{validationErrors.cmail}</p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Enter Contact Phone No
                            </label>
                            <input
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.cphone ? "border-red-500" : "border-gray-300"
                                    }`}
                                type="text"
                                placeholder="0123456789"
                                name="cphone"
                                value={formData.cphone}
                                onChange={handleChange}
                            />
                            {validationErrors.cphone && (
                                <p className="mt-2 text-sm text-red-600">{validationErrors.cphone}</p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Enter Website/Portfolio Link
                            </label>
                            <input
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.link ? "border-red-500" : "border-gray-300"
                                    }`}
                                type="text"
                                placeholder="myportfolio.com"
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                            />
                            {validationErrors.link && (
                                <p className="mt-2 text-sm text-red-600">{validationErrors.link}</p>
                            )}
                        </div>



                        <h6 class="text-lg font-bold dark:text-white mb-3">Projects</h6>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="project_one" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project One</label>
                                <input type="text" id="project_one" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project One" name="pone" value={formData.pone} onChange={handleChange} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="project_link_one" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Project Link One
                                </label>
                                <input
                                    type="text"
                                    id="project_link_one"
                                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.plone ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="https://example.com"
                                    name="plone"
                                    value={formData.plone}
                                    onChange={handleChange}
                                />
                                {validationErrors.plone && (
                                    <p className="mt-2 text-sm text-red-600">{validationErrors.plone}</p>
                                )}
                            </div>
                            <div>
                                <label for="project_two" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Two</label>
                                <input type="text" id="project_two" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project Two" name="ptwo" value={formData.ptwo} onChange={handleChange} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="project_link_two" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Project Link Two
                                </label>
                                <input
                                    type="text"
                                    id="project_link_two"
                                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.pltwo ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="https://example.com"
                                    name="pltwo"
                                    value={formData.pltwo}
                                    onChange={handleChange}
                                />
                                {validationErrors.pltwo && (
                                    <p className="mt-2 text-sm text-red-600">{validationErrors.pltwo}</p>
                                )}
                            </div>

                            <div>
                                <label for="project_three" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Three</label>
                                <input type="text" id="project_three" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project Three" name="pthree" value={formData.pthree} onChange={handleChange} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="project_link_three" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Project Link Three
                                </label>
                                <input
                                    type="text"
                                    id="project_link_three"
                                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.plthree ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="https://example.com"
                                    name="plthree"
                                    value={formData.plthree}
                                    onChange={handleChange}
                                />
                                {validationErrors.plthree && (
                                    <p className="mt-2 text-sm text-red-600">{validationErrors.plthree}</p>
                                )}
                            </div>
                        </div>


                        <h6 class="text-lg font-bold dark:text-white mb-3">Certifiaction / Job Experience</h6>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="cone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Certification One
                                </label>
                                <input
                                    type="text"
                                    id="cone"
                                    name="cone"
                                    value={formData.cone}
                                    onChange={handleChange}
                                    placeholder="Certification One"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="cdone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Certification Link One
                                </label>
                                <input
                                    type="text"
                                    id="cdone"
                                    name="cdone"
                                    value={formData.cdone}
                                    onChange={handleChange}
                                    placeholder="https://example.com"
                                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.cdone ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {validationErrors.cdone && (
                                    <p className="mt-2 text-sm text-red-600">{validationErrors.cdone}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="ctwo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Certification Two
                                </label>
                                <input
                                    type="text"
                                    id="ctwo"
                                    name="ctwo"
                                    value={formData.ctwo}
                                    onChange={handleChange}
                                    placeholder="Certification Two"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="cdtwo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Certification Link Two
                                </label>
                                <input
                                    type="text"
                                    id="cdtwo"
                                    name="cdtwo"
                                    value={formData.cdtwo}
                                    onChange={handleChange}
                                    placeholder="https://example.com"
                                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.cdtwo ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {validationErrors.cdtwo && (
                                    <p className="mt-2 text-sm text-red-600">{validationErrors.cdtwo}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="cthree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Certification Three
                                </label>
                                <input
                                    type="text"
                                    id="cthree"
                                    name="cthree"
                                    value={formData.cthree}
                                    onChange={handleChange}
                                    placeholder="Certification Three"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="cdthree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Certification Link Three
                                </label>
                                <input
                                    type="text"
                                    id="cdthree"
                                    name="cdthree"
                                    value={formData.cdthree}
                                    onChange={handleChange}
                                    placeholder="https://example.com"
                                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${validationErrors.cdthree ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {validationErrors.cdthree && (
                                    <p className="mt-2 text-sm text-red-600">{validationErrors.cdthree}</p>
                                )}
                            </div>
                        </div>


                        <button
                            type="submit"
                            class="text-white bg-[#005A9C] hover:bg-[#004a85] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#005A9C] dark:hover:bg-[#004a85] focus:outline-none dark:focus:ring-blue-800"
                        >
                            Update Profile
                        </button>


                    </form>
                </div>

            </div>

        </>
    )
}

export default ProfileForm