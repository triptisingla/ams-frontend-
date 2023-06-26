import React from 'react'
import Cards from './logincards'
import './notices.css'
export default function Home() {
  const user = localStorage.getItem('user')
  return <>{user === null ? <Cards /> : <Notices />}</>
}

function Notices() {
  let notif = [
    { title: 'somethingveryveryimportant', link: '#' },
    { title: 'somethingimportant', link: '#' },
    { title: 'something123', link: '#' },
    { title: 'something34234', link: '#' },
  ]

  return (
    <div className="flex border border-solid border-black w-5/6 mx-auto mt-10 p-5">
      <div className="flex flex-col w-1/3">
        <p className="font-semibold p-2">Notices</p>
        <div className="scrolling-list h-48">
          <ul className="marquee">
            {notif.map((notice, index) => (
              <li
                key={index}
                className="text-black border border-solid border-black p-1 my-4 rounded-lg"
              >
                <a href={notice.link}>{notice.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img src="/notices.jpg" className="w-2/3" />
    </div>
  )
}
