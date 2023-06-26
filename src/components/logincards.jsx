import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards(props) {
  return (
    <div className="flex w-2/3 h-96 mx-auto my-36 justify-evenly items-center">
      <Link to="/teachercreds">
        <button
          onClick={props.onTeachButtonClick}
          className="flex flex-col bg-blue-200 hover:bg-blue-300  shadow-xl border-2 border-black rounded-md h-60 w-52 items-center justify-center"
        >
          <img src="/teacherCard.png" alt="Teacher" className="w-32" />
          <span className="my-8">Teacher</span>
        </button>
      </Link>
      <Link to="/studentcreds">
        <button
          onClick={props.onStudButtonClick}
          className="flex flex-col bg-blue-200 hover:bg-blue-300 shadow-xl border-2 border-black rounded-md h-60 w-52 items-center justify-center"
        >
          <img src="/studentCard.png" alt="Student" className="w-32" />
          <span className="my-10">Student</span>
        </button>
      </Link>
    </div>
  )
}
