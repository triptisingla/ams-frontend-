import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import StudentLoginAndRegistration from './components/studentLoginAndRegistration'
import TeacherLoginAndRegistration from './components/teacherLoginAndRegistration'
import Timetable from './components/timetable'
import Home from './components/home'
import LeaveState from './Context/leaveState'
import Leave from './components/leaveApplication'
import Dashboard from './components/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // const contextData = useContext(leaveContext);
  // const{setTeacher,setStudent} = contextData;
  // localStorage.clear();
  return (
    <>
      <LeaveState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/studentcreds"
              element={<StudentLoginAndRegistration />}
            />
            <Route
              path="/teachercreds"
              element={<TeacherLoginAndRegistration />}
            />
            <Route path="/leave" element={<Leave />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </LeaveState>
    </>
  )
}

export default App
