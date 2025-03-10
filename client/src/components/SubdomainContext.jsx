// import React, { createContext, useState } from 'react';

// export const SubdomainContext = createContext();

// export const SubdomainProvider = ({ children }) => {
//   const [subdomain, setSubdomain] = useState('');

//   return (
//     <SubdomainContext.Provider value={{ subdomain, setSubdomain }}>
//       {children}
//     </SubdomainContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from "react";

export const SubdomainContext = createContext();

export const SubdomainProvider = ({ children }) => {
 
  const [subdomain, setSubdomain] = useState(localStorage.getItem("selectedSubdomain") || "");

  
  useEffect(() => {
    localStorage.setItem("selectedSubdomain", subdomain);
  }, [subdomain]);

  return (
    <SubdomainContext.Provider value={{ subdomain, setSubdomain }}>
      {children}
    </SubdomainContext.Provider>
  );
};
