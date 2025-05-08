import React from 'react'

const Register = ({ toggler, settoggler, submitHandler }) => {
  return (
    <div className='bg-gray-900 border-2 border-blue-300 p-8 rounded-xl max-w-md mx-auto mt-10 shadow-xl'>
      <h1 className='text-3xl font-bold text-blue-200 mb-6 text-center'>
        Hey... Welcome to Register Page
      </h1>

      <form className='flex flex-col gap-4' onSubmit={submitHandler}>
        <input
          className='px-3 py-2 rounded bg-gray-700 text-white outline-none border border-blue-200'
          name='name'
          type='text'
          placeholder='Full Name'
          required
        />
        <input
          className='px-3 py-2 rounded bg-gray-700 text-white outline-none border border-blue-200'
          name='email'
          type='email'
          placeholder='Email ID'
          required
        />
        <input
          className='px-3 py-2 rounded bg-gray-700 text-white outline-none border border-blue-200'
          name='mobileNo'
          type='text'
          placeholder='Mobile Number'
          required
        />
        <input
          className='px-3 py-2 rounded bg-gray-700 text-white outline-none border border-blue-200'
          name='password'
          type='password'
          placeholder='Password'
          required
        />
        <button className='px-3 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 transition'>
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
