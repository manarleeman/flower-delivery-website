import { AiOutlineMenu, AiOutlinePinterest } from 'react-icons/ai'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { Link } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'
import useModalStore from '../store/useModalStore'
import useCartStore from '../store/useCartStore'
import toast from 'react-hot-toast'

export default function Navbar() {
	const { toggleModal, openModal } = useModalStore()
	const { isAuthenticated, logout } = useAuthStore()
	const { getTotalItems } = useCartStore()
	const cartItemCount = getTotalItems()

	const handleCartClick = () => {
		if (!isAuthenticated) {
			toast.error('Please sign in to view your cart')
			openModal('signIn')
			return
		}
		toggleModal('cart')
	}
	return (
		<>
			<header className="sticky z-10 top-0">
				<nav className=" bg-white border-b border-secondary flex flex-row justify-between items-center ">
					<div className="flex w-full lg:hidden">
						<button
							className="lg:hidden p-5 border-secondary border-r"
							onClick={() => toggleModal('mobileMenu')}
						>
							<AiOutlineMenu className="size-[18px]" />
						</button>
						<button
							className="p-5 border-secondary border-l ml-auto relative"
							onClick={handleCartClick}
						>
							<MdOutlineShoppingBag className="size-[18px]" />
							{isAuthenticated && cartItemCount > 0 && (
								<span className="absolute top-2 right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
									{cartItemCount}
								</span>
							)}
						</button>
					</div>
					<ul className="w-full hidden lg:flex">
						<li>
							<Link to={'/'} className="p-8 border-secondary border-r flex">
								Shop
							</Link>
						</li>
						<li>
							<Link
								to={'/aboutus'}
								className="p-8 border-secondary border-r flex"
							>
								Contact
							</Link>
						</li>
						<li className="ml-auto">
							{isAuthenticated ? (
								<button
									className="flex  border-r border-l p-8 border-secondary "
									onClick={() => logout()}
								>
									Sign Out
								</button>
							) : (
								<button
									onClick={() => toggleModal('signIn')}
									className="flex  border-r border-l p-8 border-secondary"
								>
									Sign In
								</button>
							)}
						</li>
						<li>
							<button
								className="p-8 border-secondary  text-center w-full flex relative"
								onClick={handleCartClick}
							>
								Cart
								{isAuthenticated && cartItemCount > 0 && (
									<span className="ml-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
										{cartItemCount}
									</span>
								)}
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
f4855a4565984904169c8c4ca6162ef9b581214f
}
