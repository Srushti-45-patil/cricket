
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export type MenuIconProps ={
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
  },
  {
    title:'Logout',
    path:"/"
  }
]

const MenuIcon = ({title,path,navigate}:MenuIconProps)=>{
  return(
    <div 
      className="p-2 px-8 cursor-pointer text-black hover:bg-gray-400"
      onClick={()=>{
        navigate(path)
      }}
    >
      {title}
    </div>
  )
}

const Menu = () => {

  const navigate = useNavigate()

  return (
    <div className='w-65 h-svh bg-gray-200 pl-5 pt-2 justify-center space-y-2 text-lg mt-13 fixed left-0'>

        {menus.map((menu)=>(
          <div>
            <MenuIcon 
              title={menu.title}
              path={menu.path}
              navigate={navigate}
            />
          </div>
      ))}
    </div>


  )
}

export default Menu