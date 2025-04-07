
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import PlayerRegistration from './components/PlayerRegisration'
import CoachRegistration from './components/CoachRegistration'
import Layout from './components/Layout'
import Menu from './components/Menu'
import DashBoard from './components/DashBoard'
import Profile from './components/Profile'
import Attendance from './components/Attendance'
import Achievements from './components/Achievements'
import Feedback from './components/Feedback'
import Library from './components/Library'
import Notifications from './components/Notifications'
import Performance from './components/Performance'
import Matches from './components/Matches'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <Login/>
          } />
          <Route path='/dashboard' element={
            <Layout>
              <DashBoard/>
            </Layout>
          } />
          <Route path='/register' element={<Registration/>} />
          <Route path='playerReg' element={<PlayerRegistration/>} />
          <Route path='coachReg' element={<CoachRegistration/>} />
          <Route path='/profile' element={
            <Layout>
              <Profile/>
            </Layout>
          } />
          <Route path='/attendance' element={
            <Layout>
              <Attendance/>
            </Layout>
          } />
          <Route path='/achievements' element={
            <Layout>
              <Achievements/>
            </Layout>
          } />
          <Route path='/notifications' element={
            <Layout>
              <Notifications/>
            </Layout>
          } />
          <Route path='/matches' element={
            <Layout>
              <Matches/>
            </Layout>
          } />
          <Route path='/performance' element={
            <Layout>
              <Performance/>
            </Layout>
          } />
          <Route path='/feedback' element={
            <Layout>
              <Feedback/>
            </Layout>
          } />
          <Route path='/library' element={
            <Layout>
              <Library/>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App