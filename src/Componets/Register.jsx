import React, { useContext } from 'react'
import { usercontext } from '../Context/UserContext';
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const Register = () => {
  const { toggler, settoggler ,setdata ,data } = useContext(usercontext)
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
    <div className='bg-gray-black border-2 border-green-400 p-8 rounded-xl max-w-md mx-auto mt-10 green-shadow'>
      <h1 className='text-3xl font-light text-green-400 mb-6 text-center'>
        <span className='text-4xl '>  Hey...</span> Welcome to Register Page
      </h1>

      <form className='flex flex-col gap-4 ' onSubmit={submitHandler}>
        <input
          className='px-3 py-2 rounded bg-zinc-900 text-white outline-none border border-green-700'
          name='name'
          type='text'
          placeholder='Full Name'
          required
        />
        <input
          className='px-3 py-2 rounded bg-zinc-900 text-white outline-none border border-green-700'
          name='email'
          type='email'
          placeholder='Email ID'
          required
        />
        <input
          className='px-3 py-2 rounded bg-zinc-900 text-white outline-none border border-green-700'
          name='mobileNo'
          type='text'
          placeholder='Mobile Number'
          required
        />
        <input
          className='px-3 py-2 rounded bg-zinc-900 text-white outline-none border border-green-700'
          name='password'
          type='password'
          placeholder='Password'
          required
        />
        <button className='px-3 py-2 rounded text-xl font-semibold text-white  bg-green-900 hover:bg-green-800 transition'>
          Create
        </button>
      </form>

      <div className='flex justify-center gap-2 mt-6 text-white'>
        <span>Already have an account?</span>
        <button
          className='text-green-400 hover:underline'
          onClick={() => settoggler(false)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
