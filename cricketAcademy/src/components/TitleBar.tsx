import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Menubar from './Menu.tsx'

const menuicon = <FontAwesomeIcon className='text-3xl' icon={faBars} />
const profileicon = <FontAwesomeIcon className='text-3xl' icon={faUser} />

const TitleBar = () => {

    let [showMenu,setShowMenu] = useState(false);

    const menuClick = () => {
        setShowMenu(!showMenu);
    }


  return (
        <div className='flex p-5 gap gap-15 justify-items-center bg-amber-100 h-18'>
            <button className='hover:bg-gray-200 size-8' onClick={()=>{menuClick()}}>{menuicon}</button>
            {showMenu && (
                    <ul className="menu activeMenu">
                        <Menubar />
                    </ul>
            )}
            <div className='text-2xl text-blue-700 font-semibold'>
                DASHBOARD
            </div>
            <div>
                <div className='ml-250 w-fit flex gap-5'>
                    {profileicon}
                    <div className='text-xl'>Username</div>
                </div>
            </div>
        </div>
  )
}

export default TitleBar