import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
import networkLogo from './network.png';
import './Landing.css'
import bgImage from "./bg.jpg";
// url('https://as1.ftcdn.net/v2/jpg/08/84/26/92/1000_F_884269203_mNDqsfxvN6dP65AE2eDEitdGoV6qEbM1.jpg')
const Landing = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
  };

  const fadeUpStagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } },
    viewport: { once: true },
  };



  


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>

    

<nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse ">
          <img src={networkLogo} className="h-8" alt="ITInteract" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-[#005A9C]">
            ITInteract
          </span>
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
        id="navbar-default"
        className={`w-full md:flex md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="font-medium flex flex-col md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0">
          <li>
            <Link to="/login">
              <button
                type="button"
                className="py-2.5 px-5 mb-1.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button
                type="button"
                className="py-2.5 px-3  mb-1.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Register
              </button>
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>




<motion.section
    
className="mt-16 bg-white dark:bg-gray-900 bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}

      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#005A9C] md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ITInteract
        </motion.h1>
        <motion.h3
          className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          The platform that bridges the gap between IT students and industry
          professionals. Join, learn, and grow together for a brighter future
          in tech.
        </motion.h3>
        <motion.div
          className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
        


          {/* <Link
            to=""
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-gre hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </Link> */}
        </motion.div>
      </motion.div>
    </motion.section>


 

      <div className="container mx-auto px-4  ">
      
    
      <div className="container mx-auto my-28 px-4 grid place-items-center">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        {...fadeUp}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-[#005A9C] "
          {...fadeUp}
        >
          ITInteract Features
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-500 dark:text-gray-400"
          {...fadeUp}
        >
          Your guide to making the most of our services.
        </motion.p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        {...fadeUpStagger}
      >
        {[
          {
            title: "Real-Time Messaging",
            description:
              "Instantly connect with IT professionals and students for discussions and collaborations.",
          },
          {
            title: "Forums & Updates",
            description:
              "Engage in domain-specific forums, stay informed on seminars, internships, and latest industry updates.",
          },
          {
            title: "Task Collaboration",
            description:
              "Work on real-world projects and tasks with industry professionals in a collaborative environment.",
          },
          {
            title: "Profile Sharing",
            description:
              "Showcase your skills, achievements, and projects by sharing your professional profile.",
          },
          {
            title: "Explore & Network",
            description:
              "Discover peers and professionals in similar domains, explore their work, and collaborate with them.",
          },
          {
            title: "Learn Industry Practices",
            description:
              "Gain insights into industry standards for project management and development with expert guidance.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...fadeUp}
          >
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#005A9C] dark:text-white">
              {feature.title}
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>





        <div className="container mx-auto  my-28 px-4 ">


          <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select tab</label>
              <select id="tabs" class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Statistics</option>
                <option>Key Insights</option>
                <option>FAQ</option>
              </select>
            </div>
            <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
              <li class="w-full">
                <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Statistics</button>
              </li>
              <li class="w-full">
                <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Key Insights</button>
              </li>
              <li class="w-full">
                <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">FAQ</button>
              </li>
            </ul>
            <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
              <div class=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-[#005A9C] opacity-90 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                  <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1000+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Student</dd>
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1000+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Professional</dd>
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">2000+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Total USers</dd>
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">5</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Domains</dd>
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">25+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">SubDomain</dd>
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">10</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Features</dd>
                  </div>
                </dl>
              </div>
              <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                

                <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    
                    <span class="leading-tight">Updates: Stay informed with the latest progress and developments.</span>
                  </li>
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                   
                    <span class="leading-tight">Tasks: Dive into the responsibilities shaping impactful results.</span>
                  </li>
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  
                    <span class="leading-tight">Task Impact: Discover the outcomes and transformations driven by my efforts.</span>
                  </li>
                  
                </ul>
              </div>
              <div class="hidden p-4 bg-white rounded-lg dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                  <h2 id="accordion-flush-heading-1">
                    <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                      <span>What is ITInteract?</span>
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-gray-500 dark:text-gray-400">The platform that bridges the gap between IT students and industry
                      professionals.</p>
                      <p class="text-gray-500 dark:text-gray-400">Join, learn, and grow together for a brighter future
                      in tech. </p>
                    </div>
                  </div>
                  <h2 id="accordion-flush-heading-2">
                    <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                      <span>Domains ITInteract Provide</span>
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-gray-500 dark:text-gray-400">[ SoftwareDevelopment,DataScience,Cybersecurity,DatabaseManagement,CloudComputing]</p>
                     
                    </div>
                  </div>
                  <h2 id="accordion-flush-heading-3">
                    <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                      <span>SubDomains ITInteracrt Provide</span>
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-gray-500 dark:text-gray-400">["FrontendDevelopment", "BackendDevelopment", "FullStackDevelopment", "MobileAppDevelopment"]</p>
                      <p class="mb-2 text-gray-500 dark:text-gray-400">["DataAnalysis", "MachineLearning", "ArtificialIntelligence", "DataEngineering"]</p>
                      <p class="mb-2 text-gray-500 dark:text-gray-400"> ["SecurityAnalysis", "EthicalHacking", "IncidentResponse", "Governance"]</p>
                      <p class="mb-2 text-gray-500 dark:text-gray-400">["DatabaseAdministration", "DataEngineering", "DatabaseDevelopment", "DataAnalysis"]</p>
                      <p class="mb-2 text-gray-500 dark:text-gray-400"> ["CloudEngineering", "CloudArchitecture", "CloudSecurity", "CloudAdministration"]</p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>







        <div className="container mx-auto my-28 px-4">
      <motion.h2
        className="text-3xl font-extrabold text-[#005A9C]  text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What People Are Saying
      </motion.h2>

      <motion.div
        className="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            name: "Aditya Wadje",
            role: "Frontend Developer",
            image:
              "",
            title: "Bridging the Gap",
            message: "This platform has helped me connect with industry experts and gain real-world experience through tasks and feedback.",
          },
          {
            name: "Kshitij Sonawane",
            role: "Frontend Developer",
            image:
              "",
            title: "A Game Changer for IT Students",
            message:
              "I completed multiple challenges, improved my coding skills, and even got mentorship from professionals.",
          },
          {
            name: "Prajyot Sogale",
            role: "Full Stack Developer",
            image:
              "",
            title: "Seamless Industry Interaction",
            message:
              "As an industry professional, I can now assign tasks to students and review their work effortlessly.",
          },
          {
            name: "Atharva Patekar",
            role: "Backend Devloper",
            image:
              "",
            title: "Learning Beyond the Classroom",
            message:
              "The discussion forums and task-based approach make learning more engaging and practical.",
          },
        ].map((testimonial, index) => (
          <motion.figure
            key={index}
            className={`flex flex-col items-center justify-center p-8 text-center bg-white ${
              index === 0
                ? "border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e"
                : index === 3
                ? "rounded-b-lg md:rounded-se-lg"
                : "border-b border-gray-200 md:border-e"
            } dark:bg-gray-800 dark:border-gray-700`}
            variants={cardVariants}
          >
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-[#005A9C] dark:text-white">
                {testimonial.title}
              </h3>
              <p className="my-4">{testimonial.message}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              {/* <img
                className="rounded-full w-9 h-9"
                src={testimonial.image}
                alt={`${testimonial.name} profile picture`}
              /> */}
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div className=" text-gray-600">{testimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>



        
   
        </div>




        <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 w-full">
    <div class="w-full mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <Link to="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={networkLogo} class="h-8" alt="ITInteract" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-[#005A9C]">ITInteract</span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">ITInteract</a>. All Rights Reserved.</span>
    </div>
</footer>


        
      



    </>
  )
}

export default Landing