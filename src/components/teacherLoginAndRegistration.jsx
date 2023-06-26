import { useState } from 'react'
import TeacherLogin from './teacherLogin'
import TeacherRegister from './teacherRegister'

export default function TeacherLoginAndRegistration() {
  const [showRegister, setShowRegister] = useState(false)

  function handleLoginButton() {
    setShowRegister(false)
    console.log('handle login button')
  }

  function handleRegisterButton() {
    setShowRegister(true)
    console.log('handle register button')
  }

  return (
    <div className="container">
      {!showRegister ? (
        <div className="flex flex-col">
          <div className="flex justify-center items-center mt-10">
            <button className="cursor-default bg-transparent text-gray-800 font-bold py-2 px-4 border-b-2 border-gray-800 pb-2 mx-2">
              Login
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border rounded-full"
              onClick={handleRegisterButton}
            >
              Register
            </button>
          </div>
          <TeacherLogin />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-center items-center mt-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border rounded-full"
              onClick={handleLoginButton}
            >
              Login
            </button>
            <button className="cursor-default bg-transparent text-gray-800 font-bold py-2 px-4 border-b-2 border-gray-800 pb-2 mx-2">
              Register
            </button>
          </div>
          <TeacherRegister />
        </div>
      )}
    </div>
  )
}
