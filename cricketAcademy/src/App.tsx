
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import PlayerRegistration from './components/PlayerRegisration'
import CoachRegistration from './components/CoachRegistration'
import Layout from './components/Layout'
import Menu from './components/Menu'
import DashBoard from './components/DashBoard'

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
          <Route path='/playerReg' element={<PlayerRegistration/>} />
          <Route path='/coachReg' element={<CoachRegistration/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
