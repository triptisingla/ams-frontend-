import { useEffect } from 'react'
import React, { useState } from 'react'
import axios from 'axios'
import Bar from './activeLeavesBar'

export default function ActiveLeaves({ name }) {
  const [leaves, setLeaves] = useState([])
  const [show, setShow] = useState(true)
  const getLeaves = async (event) => {
    let objectleaves = await axios.get(
      'https://dark-ruby-lion-sock.cyclic.app/api/leaveapplication/checkleaves',
      {
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
      }
    )
    let access = objectleaves.data.access
    console.log(objectleaves.data.access)
    if (access === false) {
      setShow(false)
    } else {
      setLeaves(objectleaves.data)
    }
  }
  useEffect(() => {
    getLeaves()
  }, [])
  return (
    <div>
      {show ? (
        leaves.map((leave) => {
          return <Bar key={leave._id} name={leave.name} />
        })
      ) : (
        <div>You cant access this data</div>
      )}
    </div>
  )
}
