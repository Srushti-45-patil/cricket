import React, { useState } from 'react'
import loginback from '/assets/loginback.jpeg'
import logo from '/assets/logo.jpeg'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, SetPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!username || ! password) {
            setError("Please fill in all fields")
        }
        setError("")
        navigate("/dashboard")
    }

    const handleRegister = () => {
        navigate("/register")
    }

  return (
    <div className='h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${loginback})` }}>
        <div className='relative z-10 p-4 md:p-8'>
            <div className='bg-white bg-opacity-100 rounded-lg shadow-lg mt-15 md:p-8 w-120  mx-auto justify-items-center'>
                <div>
                    <img src={logo} className='h-30 w-30'></img>
                </div>
                <div className='text-4xl font-medium pt-5'>Login</div>
                {error && <p className='text-red-600 text-sm mb-4'>Error</p>}
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} required className='mt-10 border-1 border-gray-500 rounded-md h-8 w-60 pl-2'></input>
                        <br></br>
                        <input type='password' placeholder='Password' value={password} onChange={(e)=>SetPassword(e.target.value)} required className='mt-5 border-1 border-gray-500 rounded-md h-8 w-60 pl-2'></input>
                        <br></br>
                        <button type='submit' className='bg-blue-900 mt-8 h-10 w-30 rounded-xl text-white text-xl justify-items-center ml-14 hover:bg-blue-600'>Login</button>
                    </form>
                    <div className='text-gray-600 ml-10 mt-8'>Want to create account?<br></br><span className='ml-8'>Register here</span></div>
                    <button className='bg-blue-900 mt-2 h-10 w-30 rounded-xl text-white text-xl justify-items-center ml-14 hover:bg-blue-600' onClick={handleRegister}>Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login