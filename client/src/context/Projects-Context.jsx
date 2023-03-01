import React, { createContext, useEffect, useState } from 'react'

const projectsContext = createContext();

function ProjectsProvider({children}) {
const [projects,setProjects] = useState([]);
useEffect(()=>{

},[])
  return (
    <projectsContext.Provider value={{projects,setProjects}}>
      {children}
    </projectsContext.Provider>
  )
}

export default ProjectsProvider;
