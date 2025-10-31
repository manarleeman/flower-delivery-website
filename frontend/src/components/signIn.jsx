import React, { useState } from 'react'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'
import toast from 'react-hot-toast'
import useModalStore from '../store/useModalStore'
import { IoMdClose } from 'react-icons/io'

function SignIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { closeAllModals, openModal } = useModalStore()
	const { login, isLoading } = useAuthStore()
	const navigate = useNavigate()

	async function handleSubmit(e) {
		e.preventDefault()

		const result = await login({ email, password })
		console.log({ result })

		if (result.success) {
			toast.success('Login successful!')
			closeAllModals()
			// Redirect to home or dashboard after successful login
			setTimeout(() => {
				navigate('/')
			}, 1000)
		} else {
			switch (result.status) {
				case 0:
					toast.error(
						'Network error. Please check your connection and try again.'
					)
					return
				case 401:
					toast.error('Invalid email or password.')
					return
				case 404:
					toast.error('User not found.')
					return
				case 500:
					toast.error('Server error. Please try again later.')
					return

				default:
					break
			}
		}
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-20">
			<div className="bg-white md:px-16 p-6 w-full lg:w-1/2 mx-auto h-full flex flex-col">
				<button onClick={closeAllModals} className="ml-auto p-6">
					<IoMdClose className="size-5" />
				</button>
				<div className="flex flex-col gap-6">
					<div>
						<h2 className="font-semibold text-2xl lg:text-4xl">
							Greetings! Welcome to luxury gift shop.
						</h2>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col gap-y-4">
							<h3 className="text-[16px]">Use your email to sign in</h3>
							<div>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="border border-gray-200 h-14 px-4 w-full"
									placeholder="you@example.com"
									required
								/>
							</div>
							<div>
								<label htmlFor="password">Password</label>
								<input
									type="password"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="border border-gray-200 h-14 px-4 w-full"
									placeholder="********"
									required
								/>
							</div>
							<button
								type="submit"
								disabled={isLoading}
								className="w-full h-14 bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isLoading ? 'SIGNING IN...' : 'Continue'}
							</button>
						</div>
					</form>

					<div>
						<p>
							Don't have an account?{' '}
							<button
								onClick={() => openModal('signUp')}
								className="text-sm text-blue-300 underline"
							>
								Sign up
							</button>
						</p>
					</div>

					<div className="text-xs text-gray-500 mt-6 text-center">
						<a href="#" className="underline mr-2">
							Privacy Policy
						</a>{' '}
						|
						<a href="#" className="underline ml-2">
							Terms and Conditions
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignIn
