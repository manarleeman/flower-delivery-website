import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../NavBar'
import Footer from '../footer'

function MainLayout() {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

export default MainLayout
