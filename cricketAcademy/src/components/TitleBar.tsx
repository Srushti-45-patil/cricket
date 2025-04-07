import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Menubar from './Menu.tsx'
import {user} from '../constants/Profile.ts'
import { useState } from 'react'

const menuicon = <FontAwesomeIcon className='text-3xl text-white' icon={faBars} />
const profileicon = <FontAwesomeIcon className='text-2xl text-white' icon={faUser} />

const TitleBar = () => {

    let [showMenu,setShowMenu] = useState(false);

    const menuClick = () => {
        setShowMenu(!showMenu);
    }


  return (
        <div className='flex p-5 gap gap-15 justify-items-center bg-blue-400 h-18'>
            <button className='hover:bg-gray-200 size-8' onClick={()=>{menuClick()}}>{menuicon}</button>
            {showMenu && (
                    <ul className="menu activeMenu">
                        <Menubar />
                    </ul>
            )}
            <div className='text-2xl text-white font-semibold'>
                DASHBOARD
            </div>
            <div>
                <div className='ml-225 w-fit flex gap-5'>
                    <img src={user.profilePic} className='rounded-full w-fit h-10'></img>
                    <div className='text-xl text-white'>{user.username}</div>
                </div>
            </div>
        </div>
  )
}

export default TitleBar