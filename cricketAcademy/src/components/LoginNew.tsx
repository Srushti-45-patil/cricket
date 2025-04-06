import React from 'react'
import logo from '/assets/logo.jpeg'

const LoginNew = () => {
  return (
    <div>
      <div className="grid justify-items-center border-1 border-gray-300">
            <div className="pt-4">
                <img src={logo} className="h-45 p-4"></img>
            </div>
            <div className="font-normal md:font-normal text-5xl ">Login</div>
            <div className="pt-10">
                <input type="text" placeholder="Username" className="bg-gray-300 h-10 w-75 rounded-xl pl-5"></input>
            </div>
            <div className="pt-3">
                <input type="password" placeholder="Password" className="bg-gray-300 h-10 w-75 rounded-xl pl-5"></input>
            </div>
            <div className="pt-6">
                <button className="bg-blue-700 h-10 w-30 rounded-xl text-white text-xl">Login</button>
            </div>
            
            <div className="pt-9">Want to create account?</div>
            <div className="pb-10">Register here</div>
            <div className="pb-10">
                <button className="bg-blue-700 h-10 w-30 rounded-xl text-white text-xl">Register</button>
            </div>
        </div>
    </div>
  )
}

export default LoginNew