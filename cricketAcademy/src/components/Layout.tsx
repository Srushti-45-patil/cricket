import React, { ReactNode } from 'react'
import Navbar from './Topbar'
import TitleBar from './TitleBar'

type LayoutProps ={
    children:ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
        <div>
            <Navbar />
            <TitleBar />
            {children}
        </div>
  )
}

export default Layout