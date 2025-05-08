import React from 'react'

const Users = ({ data }) => {
  return (
    <div className=' users overflow-y-auto h-[90vh] w-[500px] p-6 bg-gray-900 rounded-xl border-2 border-blue-200'>
      {data.length === 0 ?
        <p className='text-blue-200 font-thin pb-4 text-2xl mb-2 border-b  border-b-stone-500'>No Users created </p> :  
         <div>
          <h1 className='text-center text-3xl text-blue-200 mb-4 pb-4 border-b border-b-zinc-400 '>Registerd Users </h1>
          { data.map((e, idx) => (
            <div key={idx} className="mb-4 px-7 py-4 bg-zinc-950 border-[1px] border-blue-200 rounded-xl flex flex-col  gap-2 "  >
              <h1 className=" text-2xl font-semibold text-blue-100">Name: {e.name}</h1>
              <p className="text-white">Email: {e.email}</p>
              <p className="text-white">Mobile: {e.mobileNo}</p>
            </div>
          ))}
         </div>
        }
    </div>

  )
}

export default Users