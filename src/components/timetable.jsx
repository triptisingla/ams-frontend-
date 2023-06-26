import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Timetable = () => {
  let userData = JSON.parse(localStorage.getItem('userData'))
  const updateDetails = async (event)=>{
 
    setData([]);
    getTimeTable();
  }
  const [data, setData] = useState([])
  useEffect(() => {
    getTimeTable();
  }, [])
  const getTimeTable = async (event) => {
    console.log(userData);
    let userClass = selectedBrnchOpt;
    let userSection = selectedSectOpt;
    let userYear = selectedYrOpt;
    const tt = await axios.get('https://dark-ruby-lion-sock.cyclic.app/api/timetable/',
      {
        params: {
          "classs": userClass,
          "section": userSection,
          "year": userYear
        }
      },
      {
        headers: {
          "auth-token": localStorage.getItem('token')
        }
      })
    //adding time table here
    setData(data => [...data, tt.data.days.mon])//timetable is here
    setData(data => [...data, tt.data.days.tue])
    setData(data => [...data, tt.data.days.wed])
    setData(data => [...data, tt.data.days.thu])
    setData(data => [...data, tt.data.days.fri])

  }

  // console.log(timeTable);


  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    // 'Saturday',
    //   'Sunday',
  ]
  const times = [
    '9:30',
    '10:20',
    '11:10',
    '12:00',
    'BREAK',
    '13:40',
    '14:30',
    '15:20',
    '16:10',
    '17:00',
  ]

  // const periods=[
  //   1,2,3,4,5,6,7,8,9
  // ]

  const breakColBorder = (time, day) => {
    let border = 'border border-gray-500'
    if (time === 'BREAK') {
      if (day != 'Monday' || day != 'Sunday') {
        border = 'border-x border-gray-500 bg-blue-200'
      }
    }
    return border
  }

  const rowStyle = (day) => {
    if (['Monday', 'Wednesday', 'Friday', 'Sunday'].includes(day)) {
      return 'bg-blue-200'
    }
    return ''
  }

  const yearOpt = ['2023', '2024', '2025', '2026']
  const [selectedYrOpt, setSelectedYrOpt] = useState(userData.year)
  const branchOpt = ['cse', 'it', 'ece', 'eee']
  const [selectedBrnchOpt, setSelectedBrnchOpt] = useState(userData.classs)
  const sectionOpt = ['a', 'b', 'c']
  const [selectedSectOpt, setSelectedSectOpt] = useState(userData.section)

  const handleSelectYrChange = (event) => {
    setSelectedYrOpt(event.target.value)
  }
  const handleSelectBrnchChange = (event) => {
    setSelectedBrnchOpt(event.target.value)
  }
  const handleSelectSectChange = (event) => {
    setSelectedSectOpt(event.target.value)
  }

  return (


    <div className="flex flex-col items-center">

      <table className="border-collapse border border-gray-500 mx-auto m-24 w-3/4 h-96">
        <thead>
          <tr>
            <th className="border border-gray-500"></th>
            {times.map((time) => (

              <th
                key={time}
                className="border border-gray-500 text-center font-semibold w-32"
              >
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
      
            {
        data.map((periods,pidx) => (
          
          <tr key={days[pidx]} className={rowStyle(days[pidx])}>
                <td className="border border-gray-500 text-center font-semibold w-40">
                  {days[pidx]}
                </td>
               
                {
                   periods.map((period,idx) => (
                    <td
                    key={`${days[pidx]}-${times[idx]}`}
                    className={breakColBorder(times[pidx], days[pidx])}
                  >
                    {period}
                  </td>
                  ))
               }
              </tr>
  

         
        ))
      }
        </tbody>
      </table>
      <div className="flex w-96 justify-between">
        <select value={selectedYrOpt} onChange={handleSelectYrChange}>
          <option value="">Year</option>
          {yearOpt.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>

        <select value={selectedBrnchOpt} onChange={handleSelectBrnchChange}>
          <option value="">Branch</option>
          {branchOpt.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <select value={selectedSectOpt} onChange={handleSelectSectChange}>
          <option value="">Section</option>
          {sectionOpt.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button onClick={updateDetails} className='bg-blue-500 mb-5 p-2 mt-3'>Submit</button>
    </div>
  )


}

export default Timetable

