import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import useModalStore from '../store/useModalStore.js'
import Cart from '../components/cart.jsx'
import MobileMenu from '../components/mobileMenu.jsx'
import SignIn from '../components/signIn.jsx'
import SignUp from '../Pages/signUp.jsx'
import { Toaster } from 'react-hot-toast'

function MainLayout() {
	const { isModalOpen } = useModalStore()
	const isCartOpen = isModalOpen('cart')
	const isMobileMenuOpen = isModalOpen('mobileMenu')
	const isSignInOpen = isModalOpen('signIn')
	const isSignUpOpen = isModalOpen('signUp')
	useEffect(() => {
		if (isCartOpen || isMobileMenuOpen || isSignInOpen || isSignUpOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		// Cleanup function
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isCartOpen, isMobileMenuOpen, isSignInOpen, isSignUpOpen])
	return (
		<div>
			<Toaster position="top-right" />
			<Navbar />
			<Outlet />
			<Footer />
			{isCartOpen && <Cart />}
			{isMobileMenuOpen && <MobileMenu />}
			{isSignInOpen && <SignIn />}
			{isSignUpOpen && <SignUp />}
		</div>
	)
}

export default MainLayout
