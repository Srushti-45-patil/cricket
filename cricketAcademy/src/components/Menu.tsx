import { useState } from "react"
import { useNavigate } from "react-router-dom"

{/*type MenuIconProps ={
  title:string,
  path:string,
  navigate:(path:string)=>void
}

const menus = [
  {
    title:'Dashboard',
    path:"/dashboard"
  },
  {
    title:'Profile',
    path:"/profile"
  },
  {
    title:'Matches',
    path:"/matches"
  },
  {
    title:'Attendance',
    path:"/attendance"
  },
  {
    title:'Notifications',
    path:"/notifications"
  },
  {
    title:'Performance Tracking',
    path:"/performance"
  },
  {
    title:'Feedback',
    path:"/feedback"
  },
  {
    title:'Tutorials Library',
    path:"/library"
  },
  {
    title:'Achievements and Rewards',
    path:"/achievements"
  }
]

const MenuIcon = ({title,path,navigate}:MenuIconProps)=>{
  return(
    <div 
      className="p-4 px-8 cursor-pointer text-white hover:bg-blue-500"
      onClick={()=>{
        navigate(path)
      }}
    >
      {title}
    </div>
  )
}*/}


const Menu = () => {
  return (
    <div className='w-65 h-svh bg-gray-200 pl-7 pt-10 justify-center space-y-8 text-lg mt-13 fixed left-0'>
      <div>
        Dashboard
      </div>
      <div>
        Profile
      </div>
      <div>
        Matches
      </div>
      <div>
        Attendance
      </div>
      <div>
        Notifications
      </div>
      <div>
        Performance Tracking
      </div>
      <div>
        Feedback
      </div>
      <div>
        Tutorials Library
      </div>
      <div>
        Achievements and Rewards
      </div>

        {/*{menus.map((menu)=>(
          <div>
            <MenuIcon 
              title={menu.title}
              path={menu.path}
              navigate={navigate}
            />
          </div>
        ))}*/}
    </div>


  )
}

export default Menu