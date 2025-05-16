import React, { useState } from 'react'
import { createContext } from 'react'

export const usercontext = createContext(null)


const UserContext = (props) => {
  const [data, setdata] = useState([])
  const [toggler, settoggler] = useState(true)
  return (
  <usercontext.Provider value={{data,setdata,toggler,settoggler,}}>
    {props.children}
  </usercontext.Provider>
  )
}

export default UserContext