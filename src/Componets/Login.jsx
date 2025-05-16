import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { usercontext } from '../Context/UserContext';

const Login = () => {
  const { toggler, settoggler, data } = useContext(usercontext);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const isPresent = data.find(
      (user) => user.email === email && user.password === password
    );

    if (isPresent) {
      toast.success('Login Successful');
    } else {
      toast.error('User Not Found');
    }
  };

  return (
    <div className='bg-gray-black border-2 border-green-400 p-8 rounded-xl max-w-md mx-auto mt-10 green-shadow'>
      <h1 className='text-3xl font-light text-green-400 mb-6 text-center'>
        <span className='text-4xl'>Hey...</span> Welcome to Login Page
      </h1>

      <form className='flex flex-col gap-4 ' onSubmit={loginSubmitHandler}>
        <input
          className='px-3 py-2 rounded bg-zinc-900 text-white outline-none border border-green-700'
          type='email'
          name='email'
          placeholder='Email ID'
          required
        />
        <input
          className='px-3 py-2 rounded bg-zinc-900 text-white outline-none border border-green-700'
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        <button className='px-3 py-2 rounded text-xl font-semibold text-white bg-green-900 hover:bg-green-800 transition'>
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
 