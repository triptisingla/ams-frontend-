import React from 'react'
import { useEffect } from 'react'
export default function Dashboard() {
  let teacherData = localStorage.getItem('userData')
  let user = localStorage.getItem('user')
  teacherData = JSON.parse(teacherData)
  console.log(teacherData);
  console.log(user);
  useEffect(() => {
    // getTeacher();
  }, [])

  return (
    <div className="flex items-center border border-solid border-black shadow-xl w-[600px] mt-20 p-5 mx-auto rounded-xl">
      <div className="bg-blue-100 p-5 rounded-xl w-full mr-4">
        <div className="flex flex-col">
          <p className="text-gray-600">Name: </p>
          <p className="text-lg">
            {teacherData.firstName} {teacherData.lastName}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600">Email:</p>{' '}
          <p className="text-lg">{teacherData.email}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600">{user==='teacher'?'Designation:':'Class:'}</p>
          <p className="text-lg">{user==='teacher'?teacherData.designation:teacherData.classs+" "+teacherData.section}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600">{user==='teacher'?'Teacher id:':'Student id:'}</p>{' '}
          <p className="text-lg">{user==='teacher'?teacherData.t_id:teacherData._id}</p>
        </div>
      </div>
      <img
        src="/teacheravatar.png"
        className="border border-solid w-44 h-44 rounded-full p-0"
      />
    </div>
  )
}
