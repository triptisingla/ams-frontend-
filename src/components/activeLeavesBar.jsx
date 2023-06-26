

import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Bar({name,key}) {
  return (
    <div className="flex border border-black items-center w-2/3 mx-auto my-10">
      <img src="/teacheravatar.png" className='w-20' />
      <span className="name">{name}</span>
      <ul className="flex ml-auto">
        <li><button className='flex bg-blue-400 mr-4 h-8 w-28 items-center justify-center rounded-md border border-black'>View Letter</button></li>
        <li><button className='flex bg-green-400 mr-4 h-8 w-20 items-center justify-center rounded-md border border-black'>Approve</button></li>
        <li><button className='flex bg-red-400 mr-4 h-8 w-20 items-center justify-center rounded-md border border-black'>Reject</button></li>
      </ul>
    </div>
  )

}