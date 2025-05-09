import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Register from './Componets/Register'
import Login from './Componets/Login'
import Users from './Componets/Users'
import { toast } from 'react-toastify'

const App = () => {
  const [toggler, settoggler] = useState(true)
  const [data, setdata] = useState([])

  function submitHandler(e) {
    e.preventDefault()

    const user = {
      userId: nanoid(),
      name: e.target.name.value
      , email: e.target.email.value
      , mobileNo: e.target.mobileNo.value
      , password: e.target.password.value
    }
     toast.success("Account Created Successfully");
    setdata((prev) => [...prev, user])
  }
  return (
    <div className='flex py-6  justify-between bg-zinc-900 min-h-screen  w-full text-white px-20 ' >
      <div className=' '>
        {toggler ? <Register toggler={toggler} settoggler={settoggler} submitHandler={submitHandler} /> : <Login toggler={toggler}  data={data} setdata={setdata} />}
      </div>
      <div className=''>
        <Users data={data} setdata={setdata} />
      </div>
    </div>
  )
}

export default App