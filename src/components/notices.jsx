import React from 'react'
import { useState } from 'react'
import Cards from './logincards'
import { useContext } from 'react'
import leaveContext from '../Context/leaveContext'

export default function Notices() {

  const user = localStorage.getItem('user')
  return (
    <>
      {user === null ? (
        <Cards
        />
      ) : (
        <div>Notices</div>
      )}
    </>
  )
}
