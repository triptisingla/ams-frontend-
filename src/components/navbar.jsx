import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar(props) {
  // localStorage.clear();
  let homeIcon = (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <path
            d="M19 10L19 20H9M5 20L5 10L12 3L15.5 6.5"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
        </g>
      </svg>
    ),
    dashboardIcon = (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-8"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <path
            stroke="#000000"
            strokeWidth="2"
            d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"
          ></path>{' '}
        </g>
      </svg>
    ),
    leaveIcon = (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        className="h-8"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#000000"
            d="M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
          ></path>
          <path
            fill="#000000"
            d="M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
          ></path>
        </g>
      </svg>
    ),
    timetableIcon = (
      <svg
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="30px"
        height="30px"
        viewBox="0 0 72 72"
        enableBackground="new 0 0 72 72"
        xmlSpace="preserve"
        className="h-8"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <g>
            {' '}
            <path d="M61.068,11H55V5c0-1.104-0.896-2-2-2s-2,0.896-2,2v6H20V5c0-1.104-0.896-2-2-2s-2,0.896-2,2v6h-5.068 C7.104,11,4,14.104,4,17.932v44.136C4,65.896,7.104,69,10.932,69h50.136C64.896,69,68,65.896,68,62.068V17.932 C68,14.104,64.896,11,61.068,11z M10.932,15H16v5c0,1.104,0.896,2,2,2s2-0.895,2-2v-5h31v5c0,1.104,0.896,2,2,2s2-0.895,2-2v-5 h6.068C62.688,15,64,16.313,64,17.932V28H8V17.932C8,16.313,9.313,15,10.932,15z M61.068,65H10.932C9.313,65,8,63.688,8,62.068V30 h56v32.068C64,63.688,62.688,65,61.068,65z"></path>{' '}
            <path d="M59.896,56.641c-0.553,0-1.103,0.447-1.103,1c0,2.189-0.7,2.359-1.69,2.359h-6.31c-0.553,0-1,0.447-1,1s0.447,1,1,1h6.31 c2.295,0,3.631-1.287,3.779-3.828C60.893,58.115,61,58.059,61,58v-0.359C61,57.088,60.45,56.641,59.896,56.641z"></path>{' '}
            <path d="M59.875,54.411c0.26,0,0.52-0.112,0.71-0.291c0.181-0.188,0.29-0.449,0.29-0.709c0-0.263-0.109-0.522-0.29-0.711 c-0.38-0.369-1.05-0.369-1.42,0c-0.181,0.19-0.29,0.448-0.29,0.711c0,0.271,0.109,0.521,0.29,0.709 C59.354,54.3,59.604,54.411,59.875,54.411z"></path>{' '}
            <path d="M18.795,37h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S19.348,37,18.795,37z"></path>{' '}
            <path d="M25.795,37h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S26.348,37,25.795,37z"></path>{' '}
            <path d="M32.795,37h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S33.348,37,32.795,37z"></path>{' '}
            <path d="M38.795,37h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S39.348,37,38.795,37z"></path>{' '}
            <path d="M45.795,37h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S46.348,37,45.795,37z"></path>{' '}
            <path d="M51.795,39h1c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1c-0.553,0-1,0.447-1,1S51.242,39,51.795,39z"></path>{' '}
            <path d="M18.795,43h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S19.348,43,18.795,43z"></path>{' '}
            <path d="M25.795,43h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S26.348,43,25.795,43z"></path>{' '}
            <path d="M32.795,43h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S33.348,43,32.795,43z"></path>{' '}
            <path d="M38.795,43h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S39.348,43,38.795,43z"></path>{' '}
            <path d="M45.795,43h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S46.348,43,45.795,43z"></path>{' '}
            <path d="M51.795,45h1c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1c-0.553,0-1,0.447-1,1S51.242,45,51.795,45z"></path>{' '}
            <path d="M18.795,55h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S19.348,55,18.795,55z"></path>{' '}
            <path d="M25.795,55h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S26.348,55,25.795,55z"></path>{' '}
            <path d="M32.795,55h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S33.348,55,32.795,55z"></path>{' '}
            <path d="M38.795,55h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S39.348,55,38.795,55z"></path>{' '}
            <path d="M18.795,49h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S19.348,49,18.795,49z"></path>{' '}
            <path d="M25.795,49h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S26.348,49,25.795,49z"></path>{' '}
            <path d="M32.795,49h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S33.348,49,32.795,49z"></path>{' '}
            <path d="M38.795,49h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S39.348,49,38.795,49z"></path>{' '}
            <path d="M45.795,49h-1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1c0.553,0,1-0.447,1-1S46.348,49,45.795,49z"></path>{' '}
            <path d="M51.795,51h1c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1c-0.553,0-1,0.447-1,1S51.242,51,51.795,51z"></path>{' '}
          </g>{' '}
        </g>
      </svg>
    ),
    logoutIcon = (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <path
            d="M15 20H18C19.1046 20 20 19.1046 20 18M15 4H18C19.1046 4 20 4.89543 20 6V14M7 8L3 12L15 12M7 16L6 15"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
        </g>
      </svg>
    )
  let menu = [
    { label: 'Home', icon: homeIcon, page: '/' },
    { label: 'Dashboard', icon: dashboardIcon, page: '/dashboard' },
    { label: 'Leave', icon: leaveIcon, page: '/leave' },
    { label: 'Timetable', icon: timetableIcon, page: '/timetable' },
    { label: 'Logout', icon: logoutIcon },
  ]
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  let userName, userData, email
  if (user !== null) {
    userData = JSON.parse(localStorage.getItem('userData'))
    userName = userData.firstName
    userName = userName.charAt(0).toUpperCase() + userName.substring(1)
    email = userData.email
  }

  const [dropDown, setDropDownIsOpen] = useState(false)

  const handleLogout = () => {
    localStorage.clear()
    setDropDownIsOpen((prev) => !prev)
    navigate('/');
    location.reload();
    
  }
  console.log(user);
  return (
    <>
      <nav className="py-4 px-2 mx-10">
        <div className="flex mx-auto mt-4 justify-between items-center">
          <a href="https://bpitindia.com/" className="flex items-center">
            <img
              src="/bpit-logo.jpeg"
              className="h-20 mr-3 rounded-full border-4 p-1"
              alt="bpit logo"
            />
            <span className="text-xl font-semibold text-gray-800">
              Bhagwan parshuram institute of Technology
            </span>
          </a>

          <button
            onClick={() => setDropDownIsOpen((prev) => !prev)}
            className={`${
              token === null
                ? 'hidden'
                : 'flex items-center justify-center bg-blue-300 hover:bg-blue-100 py-4 w-16 h-16 border-4 border-gray-300 rounded-full'
            }`}
            type="button"
          >
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 1024 1024"
              className="h-8 w-8"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M512 480a224 224 0 1 0-224-224 224 224 0 0 0 224 224z m0-384a160 160 0 1 1-160 160 160 160 0 0 1 160-160zM989.44 947.84a32 32 0 0 0-6.72-10.56 37.12 37.12 0 0 0-10.56-6.72 32 32 0 0 0-34.88 6.72 36.8 36.8 0 0 0-6.72 10.56 26.56 26.56 0 0 0-2.56 12.16 32 32 0 0 0 2.24 12.16 39.04 39.04 0 0 0 7.04 10.56 32 32 0 0 0 34.88 6.72 37.12 37.12 0 0 0 10.56-6.72 32 32 0 0 0 6.72-34.88zM832 928h-160a32 32 0 0 0 0 64h160a32 32 0 0 0 0-64z"
                  fill="#231815"
                ></path>
                <path
                  d="M941.44 862.08a32 32 0 0 0 18.56-41.6 480 480 0 0 0-926.4 137.28 32 32 0 0 0 32 34.24H544a32 32 0 0 0 0-64H101.44a416 416 0 0 1 800-84.48 32 32 0 0 0 40 18.56z"
                  fill="#231815"
                ></path>
              </g>
            </svg>
          </button>

          {dropDown && (
            <div className="border border-black bg-blue-300 flex flex-col absolute top-28 right-10 items-start rounded-lg p-2 w-52 z-50">
              <div className="text-sm">
                {userName === null ? '' : userName} <br />
                {email === null ? '' : email}
              </div>
              <hr className="border border-gray-500 w-full my-2" />
              {menu.map((item, i) => (
                <Link key={i}
                  to={item.label === 'Logout' ? '' : item.page}
                  className="w-full"
                >
                  <button
                    className={` ${ (item.label==='Leave' && user==='student')?'hidden':''} flex items-center px-5 w-full rounded-md hover:bg-blue-200 my-1`}
                    key={i}
                    onClick={
                      item.label === 'Logout'
                        ? handleLogout
                        : () => {
                            setDropDownIsOpen((prev) => !prev)
                          }
                    }
                  >
                    {item.icon}
                    <h3 className="ml-7">{item.label}</h3>
                  </button>
                </Link>
              ))}
            </div>
          )}

          {/*
          <buttoNameame/classn
            onClick={handleLogout}
            className={`${
              token === null ? 'hidden' : ''
            } border bg-blue-500 text-align rounded-full h-14 p-3`}
          >
          </buttoNameame>*/}
        </div>
        <hr className="border border-gray-600 mt-4" />
      </nav>
    </>
  )
}
