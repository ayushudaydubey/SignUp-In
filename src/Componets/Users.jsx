import React, { useContext } from 'react';
import { usercontext } from '../Context/UserContext';

const Users = () => {
  const { data, setdata } = useContext(usercontext);

  function deleteHandler(id) {
    const updatedData = data.filter(user => user.userId !== id);
    setdata(updatedData);
  }

  return (
    <div className='overflow-y-auto h-[90vh] w-[500px] p-6 bg-zinc-950 green-shadow rounded-xl users border border-green-500 shadow-lg'>
      {data.length === 0 ? (
        <p className='text-green-300 text-2xl font-light text-center border-b border-zinc-700 pb-4'>
          No Users Created
        </p>
      ) : (
        <>
          <h1 className='text-3xl text-green-400 font-semibold text-center mb-6 border-b border-zinc-700 pb-4'>
            Registered Users
          </h1>

          <div className='space-y-4'>
            {data.map((user) => (
              <div
                key={user.userId}
                className='bg-black  border border-green-600 rounded-lg p-4 flex justify-between items-start hover:shadow-md transition'
              >
                <div className='space-y-1'>
                  <h2 className='text-2xl text-green-500 font-semibold capitalize'> <span className='text-white text-xl'>Name :</span> {user.name}</h2>
                  <p className='text-blue-300 text-md '> <span className='text-sm text-white'>Email ID :</span>  {user.email}</p>
                  <p className='text-zinc-200 text-sm text-blue-200'> <span className='text-white'> Contact : </span> {user.mobileNo}</p>
                </div>
                <button
                  onClick={() => deleteHandler(user.userId)}
                  className='text-red-500 text-sm hover:underline hover:text-red-400 transition'
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
