import React from 'react'
import DashboardPage from './Component/DashboardLayout'
import { Outlet } from 'react-router-dom'
import DashboardLayout from './Component/DashboardLayout'

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout/>
      <Outlet/>
    </div>
  )
}

export default Dashboard 