import React from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../store/useCartStore'

function CartCard({ imgUrl, title, quantity, price, productId }) {
	const { removeItem } = useCartStore()

	const handleRemove = () => {
		removeItem(productId)
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 pr-[71px] pl-4">
			<div>
				<img
					src={imgUrl}
					alt={title}
					srcset=""
					className="w-[160px] h-[160px] border border-secondary object-cover"
				/>
			</div>
			<div className=" flex flex-row justify-between text-center py-[36px] px">
				<div className="">
					<h3 className="text-left text-[18px] font-medium">{title}</h3>
					<h4 className="text-left text-[16px] font-normal">
						{' '}
						Quantity ({quantity})
					</h4>
					<h5 className="text-left texy-[18px] font-medium">
						${(price * quantity).toFixed(2)}
					</h5>
				</div>
				<div className=" ">
					<button
						onClick={handleRemove}
						className="text-center text-tertiary text-sm hover:text-red-600 transition"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartCard
