import {Outlet} from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

import React from 'react'

const Layout = () => {
  return (
<>
<Navbar/>
<Outlet/>
<Footer/>
</>
  )
}

export default Layout
