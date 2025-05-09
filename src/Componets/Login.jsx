import React from 'react';
import { toast } from 'react-toastify';


const Login = ({ toggler, settoggler ,data ,setdata }) => {

  const loginSubmitHandler = (e)=>{
    e.preventDefault()
    const email  = e.target.email.value
    const password = e.target.password.value

    const isPresent = data.find((user)=> user.email === email && user.password ===password)
    console.log(Array.isArray(data));
    

    if (isPresent) {
      toast.success("Login Successfull")
    }
    else{
      toast.error("User Not Found")
    }
  

  }


  return (
    <div className='bg-gray-900 border-2 border-blue-300 p-8 rounded-xl max-w-md mx-auto mt-10 shadow-xl'>
      <h1 className='text-3xl font-bold text-blue-200 mb-6 text-center'>
        Welcome Again... Please Login
      </h1>

      <form className='flex flex-col gap-4' onSubmit={loginSubmitHandler}>
        <input
          className='px-3 py-2 rounded bg-gray-700 text-white outline-none border border-blue-200'
          type='email'
          name='email'
          placeholder='Email ID'
          required
        />
        <input
          className='px-3 py-2 rounded bg-gray-700 text-white outline-none border border-blue-200'
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        <button className='px-3 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 transition'>
          Login
        </button>
      </form>

      <div className='flex justify-center gap-2 mt-6 text-white'>
        <span>Don't have an account?</span>
        <button
          className='text-green-400 hover:underline'
          onClick={() => settoggler(true)}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
