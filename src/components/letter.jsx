import React, { useState } from 'react'
import './letter.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useContext } from 'react'
import leaveContext from '../Context/leaveContext'

const Letter = () => {
  const contextData = useContext(leaveContext)
  const { addLeaveAppln } = contextData
  const [selectedFromDate, setSelectedFromDate] = useState(null)
  const [selectedToDate, setSelectedToDate] = useState(null)

  const [isEditable, setIsEditable] = useState(false)
  const [data, setData] = useState({
    from: '',
    to: '',
    till: '',
    subject: '',
    days: '',
    startDate: '',
    endDate: '',
    reason: '',
  })

  const handleSendButton = () => {
    // const jsonData = JSON.stringify(data);i
    console.log(data.subject.length)
    console.log(data.reason.length)
    if (data.subject.length > 5 && data.reason.length > 11) {
      addLeaveAppln(data)
    } else {
      alert('not enough content')
    }
  }

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className="letter text-md mx-auto">
        <img
          src="/paperwhitenonrule.jpg"
          alt="image"
          className="letterback absolute z-[-1] cover"
        />
        <div className="w-9/12 mt-10 ml-14 overflow-auto">
          <div className="content mt-10">
            <p className="text-center text-lg">Leave Application</p>
            <div className="my-5 flex flex-col">
              <input
                type="text"
                name="from"
                value={data.from}
                onChange={handleChange}
                placeholder="Sender"
                className="border-t-0 border-l-0 border-r-0 border-b-1 w-40 p-0 text-md bg-transparent"
              />
              <input
                type="text"
                name="to"
                value={data.to}
                onChange={handleChange}
                placeholder="Reciever"
                className="border-t-0 border-l-0 border-r-0 border-b-1 w-40 mt-3 p-0 text-md bg-transparent"
              />
            </div>
            <p>
              <span>Subject:</span>
              <input
                type="text"
                name="subject"
                value={data.subject}
                onChange={handleChange}
                className="ml-3 mb-7 w-10/12 border-t-0 border-l-0 border-r-0 border-b-1 p-0 bg-transparent underline"
              />
            </p>
            <p>Dear Sir/Madam,</p>
            <br />
            <div className="flex">
              <p className="leading-">
                I am writing this letter to inform you that I will be taking
                leave from work for
                <input
                  type="text"
                  name="days"
                  value={data.days}
                  onChange={handleChange}
                  className="border-t-0 border-l-0 border-r-0 border-b-1 px-2 py-0 w-7 bg-transparent"
                />
                days, starting from
                <DatePicker
                  selected={selectedFromDate}
                  onChange={(date) => setSelectedFromDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="From Date"
                  className="inline-flex bg-transparent w-24 p-0 border-t-0 border-l-0 border-r-0 m-0 text-center"
                />
                to
                <DatePicker
                  selected={selectedToDate}
                  onChange={(date) => setSelectedToDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="To Date"
                  className="datepicker-input align-middle bg-transparent w-24 p-0 border-t-0 border-l-0 border-r-0 m-0 text-center"
                />
                .
              </p>
            </div>
            <br />
            <p>
              The reason for my leave is {''}
              <span>
                <input
                  type="text"
                  name="reason"
                  value={data.reason}
                  onChange={handleChange}
                  className="border-t-0 border-l-0 border-r-0 border-b-1 p-0  w-96 bg-transparent"
                />
              </span>
              .
            </p>
            <br />
            <p>
              Please let me know if there is anything I need to do before I
              leave, or if there is anything you need me to prepare for while I
              am away.
            </p>
            <br />
            <p>Thank you for your understanding.</p>
            <br />
            <p>Sincerely,</p>
            <p> {data.from}</p>
            <button
              className="flex items-center ml-auto text-black border border-black hover:bg-zinc-300 rounded-md p-2"
              onClick={handleSendButton}
            >
              <img src="/tick.png" alt="tick" className="mr-2 h-5" />
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Letter
