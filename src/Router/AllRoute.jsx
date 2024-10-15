import DashboardPage from '@/MainPage/Dashboard/Component/DashboardLayout'
import Footer from '@/MainPage/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AllRoute = () => {
  return (
    <div>
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default AllRoute
