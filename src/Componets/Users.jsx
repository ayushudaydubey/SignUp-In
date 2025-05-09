import { nanoid } from 'nanoid'
import React from 'react'


const Users = ({ data ,setdata}) => {
  const userId  =  nanoid()

  function deleteHandler(id) {
    const copydata  = [...data]
    const filterData = copydata.filter((user)=> user.userId != id)
    setdata(filterData)
  }

  

  return (
    <div className=' users overflow-y-auto h-[90vh] w-[500px] p-6 bg-gray-900 rounded-xl border-2 border-blue-200'>
      {data.length === 0 ?
        <p className='text-blue-200 font-thin pb-4 text-2xl mb-2 border-b  border-b-stone-500'>No Users created </p> :  
         <div>
          <h1 className='text-center text-3xl text-blue-200 mb-4 pb-4 border-b border-b-zinc-400 '>Registerd Users </h1>
          { data.map((e) => (
            <div key={e.userId} className="flex  justify-between items-center mb-4 px-7 py-4 bg-zinc-950 border-[1px] border-blue-200 rounded-xl  "  >
              <div className='flex flex-col  gap-2 '>
                <h1 className=" text-2xl font-semibold text-blue-100">Name: {e.name}</h1>
              <p className="text-white">Email: {e.email}</p>
              <p className="text-white">Mobile: {e.mobileNo}</p>
       
              </div>
              <span  onClick={()=>deleteHandler(e.userId)} className='text-md cursor-pointer font-thin text-red-600 leading-tight'>Delete</span>
            </div>
          ))}
         </div>
        }
    </div>

  )
}

export default Users