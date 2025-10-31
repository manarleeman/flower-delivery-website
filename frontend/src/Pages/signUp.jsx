import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'
import useModalStore from '../store/useModalStore'
import { IoMdClose } from 'react-icons/io'

export default function SignUp() {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const { closeAllModals } = useModalStore()
	const { signup, isLoading } = useAuthStore()
	const navigate = useNavigate()

	async function handleSubmit(e) {
		e.preventDefault()

		const result = await signup({ email, password, name })
		console.log({ result })

		if (result.success) {
			toast.success('Sign up successful!')
			closeAllModals()
			// Redirect to home or dashboard after successful signup
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
				case 409:
					toast.error('Email already exists.')
					return
				case 400:
					if (result.error && result.error.errors) {
						for (const err of result.error.errors) {
							toast.error(err.msg)
						}
						return
					}
					toast.error('Invalid input. Please check your details and try again.')
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
			<div className="bg-white md:px-20 p-6 w-full lg:w-1/2 mx-auto h-full flex flex-col">
				<button onClick={closeAllModals} className="ml-auto">
					<IoMdClose className="size-5" />
				</button>
				<h2 className="text-2xl lg:text-4xl font-semibold mb-4">Sign up</h2>
				<p className="text-sm text-gray-600 mb-6">
					Become a member and enjoy personalized gift recommendations, fast
					checkout, and more.
				</p>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-4">
						<div className="flex flex-col gap-2 ">
							<label htmlFor="">Email</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								name=""
								id=""
								placeholder="ENTER YOUR EMAIL"
								className="border border-gray-300 p-4 "
								required
							/>
						</div>
						<div className="flex flex-col gap-2 ">
							<label htmlFor="">Name</label>
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								type="text"
								name=""
								id=""
								placeholder="ENTER YOUR NAME"
								className="border border-gray-300 p-4 "
								required
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="" className="text-[16px]">
								Password
							</label>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								name=""
								id=""
								className="border border-gray-300 p-4 w-full "
								required
							/>
						</div>
					</div>
					<button
						type="submit"
						disabled={isLoading}
						className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading ? 'JOINING...' : 'JOIN US'}
					</button>
				</form>
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
	)
}
