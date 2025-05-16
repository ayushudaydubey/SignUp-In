import React, { useState } from 'react'

import Register from './Componets/Register'
import Login from './Componets/Login'
import Users from './Componets/Users'

import { useContext } from 'react'
import UserContext, { usercontext } from './Context/UserContext'

const App = () => {
   const {toggler} = useContext(usercontext)
  
  // const [toggler, settoggler] = useState(true)
  // const [data, setdata] = useState([])


  return (
    <div className='flex py-6 justify-between bg-zinc-950 min-h-screen w-full text-yellow-100 px-20 ' >
      <div className=' '>
        {toggler ? <Register /> : <Login  />}
      </div>
      <div >
        <Users />
      </div>
    </div>
  )
}

export default App