import { AiOutlinePinterest } from 'react-icons/ai'
import { CiInstagram } from 'react-icons/ci'
import { FiFacebook } from 'react-icons/fi'
import { PiTelegramLogo } from 'react-icons/pi'
import { SlSocialTwitter } from 'react-icons/sl'
import useModalStore from '../store/useModalStore'
import useAuthStore from '../store/useAuthStore'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

function MobileMenu() {
	const { closeAllModals, openModal } = useModalStore()
	const { isAuthenticated, logout } = useAuthStore()

	const handleSignInOrOut = () => {
		if (isAuthenticated) {
			logout()
			closeAllModals()
			toast.success('Signed out successfully')
		} else {
			openModal('signIn')
		}
	}

	const links = [
		{
			text: isAuthenticated ? 'Sign Out' : 'Sign In',
			link: '#',
			action: handleSignInOrOut,
		},
		{
			text: 'Shop',
			link: '/',
		},
		{
			text: 'Services',
			link: '#services',
		},
		{
			text: 'Contact',
			link: '#contact',
		},
		{
			text: 'About Us',
			link: '/aboutus',
		},
	]
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-20">
			<div className="bg-white w-full md:w-1/2 h-full md:mr-auto flex flex-col ">
				<button
					onClick={closeAllModals}
					className="border-b border-secondary p-6"
				>
					<IoMdClose />
				</button>
				<ul className="flex flex-col gap-3 text-sm font-medium divide-y divide-secondary h-full overflow-y-scroll">
					{links.map((item, index) => (
						<li key={index}>
							{item.action ? (
								<button
									className="text-[18px] md:text-[21px] p-6 flex"
									onClick={item.action}
								>
									{item.text}
								</button>
							) : (
								<Link
									onClick={closeAllModals}
									to={item.link}
									className="text-[18px] md:text-[21px] p-6 flex"
								>
									{item.text}
								</Link>
							)}
						</li>
					))}

					<li className="text-secondary flex flex-col gap-4 p-4">
						<p className=" font-medium text-sm md:text-[16px]">
							Shipping & returns
						</p>
						<p className=" font-medium text-sm md:text-[16px]">
							Terms & conditions
						</p>
						<p className=" font-medium text-sm md:text-[16px]">
							Privacy policy
						</p>
					</li>
					<li className="flex flex-row items-center justify-between p-6">
						<CiInstagram className="size-5" />
						<AiOutlinePinterest className="size-5" />
						<FiFacebook className="size-5" />
						<SlSocialTwitter className="size-5" />
						<PiTelegramLogo className="size-5" />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MobileMenu
