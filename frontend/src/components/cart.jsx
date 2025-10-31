import { IoMdClose } from 'react-icons/io'
import useModalStore from '../store/useModalStore'
import useCartStore from '../store/useCartStore'
import CartCard from './cartCard'
import { Link } from 'react-router-dom'

function Cart() {
	const { closeAllModals } = useModalStore()
	const { items, getTotalPrice } = useCartStore()

	const subtotal = getTotalPrice()
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-20">
			<div className="bg-white w-full lg:w-1/2 h-full lg:ml-auto flex flex-col">
				<div className=" flex flex-row border-b border-secondary md:py-[26px]  md:px-[40px] py-3 px-6">
					<h3 className="text-[16px]">Shopping cart</h3>
					<button onClick={closeAllModals} className="ml-auto ">
						<IoMdClose />
					</button>
				</div>
				<div className="flex-1 overflow-y-auto">
					<div className="border-b border-secondary">
						{items.length === 0 ? (
							<div className="p-10 text-center text-gray-500">
								Your cart is empty
							</div>
						) : (
							items.map((item) => (
								<CartCard
									key={item.id}
									imgUrl={item.imageUrl}
									title={item.name}
									quantity={item.quantity}
									price={item.price}
									productId={item.id}
								/>
							))
						)}
					</div>
					<div className="flex flex-row justify-between py-[21px] pl-4 pr-[71px] md:p-[40px] border-b border-secondary">
						<p className="text-[18px]">Subtotal</p>
						<p className="text-[21px]">${subtotal.toFixed(2)}</p>
					</div>
					<div className="md:p-[40px] py-6 px-4 border-b border-secondary">
						<textarea
							placeholder="Gift Message"
							id=""
							className=" w-full h-[120px] border border-transparent hover:border-gray-400"
						></textarea>
					</div>
					<div className="px-4 py-6 md:px-[40px] md:py-[45px]">
						<p className="text-center text-sm">
							Shipping & taxes calculated at checkout Free standard shipping
							within Kyiv
						</p>
					</div>
					<div className="">
						<Link
							onClick={closeAllModals}
							to="/checkout"
							className="w-full inline-flex items-center justify-center bg-black text-white md:h-[56px] h-[46px]"
						>
							Check Out
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
