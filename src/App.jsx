import React, { useState } from 'react'
import Register from './Componets/Register'
import Login from './Componets/Login'
import Users from './Componets/Users'

const App = () => {
  const [toggler, settoggler] = useState(true)
const [data, setdata] = useState([])

function submitHandler (e) {
  e.preventDefault()
  const user  = {
    name : e.target.name.value
    ,email: e.target.email.value
    ,mobileNo: e.target.mobileNo.value
    ,password : e.target.password.value
  }
  setdata((prev)=>[...prev,user])

   
}
  return (
    <div className='flex py-6  justify-between bg-zinc-900 min-h-screen  w-full text-white px-20 ' >
      <div className=' '>
        {toggler ?  <Register toggler = {toggler} settoggler ={settoggler} submitHandler ={submitHandler}/> : <Login  toggler = {toggler} settoggler ={settoggler} submitHandler ={submitHandler} />}
      </div>
      <div className=''>
        <Users  data = {data} setdata = {setdata} />
      </div>
    </div>
  )
}

export default App