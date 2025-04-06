import React from 'react'
import logo from '/assets/logo.jpeg'

const Navbar = () => {
  return (
    <div className='bg-amber-400 h-23 flex'>
      <div>
        <img src={logo} alt="logo" className="h-23 pl-15"></img>
        </div>
        <div>
          <div className='pl-20 text-5xl pt-4'>M S K PRASAD'S INTERNETIONAL CRICKET ACADEMY</div>
        </div>
    </div>
  )
}

export default Navbar