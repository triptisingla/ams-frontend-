import leaveContext from "./leaveContext";
import axios from 'axios';
import { useState } from "react";
// import React from 'react'

export default function LeaveState({ children }) {

    const [teacher, setTeacher] = useState(false)
    const [student, setStudent] = useState(false);
    const addLeaveAppln = async (leaveAppln) => {
                
        
            // localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1MmIxZWQ2NmUyMDVhNjhlMzVlMWU5In0sImlhdCI6MTY4MzE0MTEwMX0.1HIU3Z0CjEgp2tmwuosEDlO319XJXIPMVEo-t8HSkng')

        const body = {
            from:leaveAppln.from,
            sub:leaveAppln.subject,
            desc:leaveAppln.reason,
            startDate:leaveAppln.startDate,
            endDate:leaveAppln.endDate,
        }
        console.log(body);
        // eslint-disable-next-line
        const response = await axios.post('https://dark-ruby-lion-sock.cyclic.app/api/leaveapplication/addleave',
            body
            , {
                headers: {
                    "auth-token": localStorage.getItem('token')
                }
            })
        if(response.status!=200)
        {
            console.log("permission denied")
        }
        else
        console.log("Note added");
    }
    return (
        <leaveContext.Provider value={{addLeaveAppln,teacher,setTeacher,student,setStudent}}>
            {children}
        </leaveContext.Provider>
    )
}


