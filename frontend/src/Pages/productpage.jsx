import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import useFlowerStore from '../store/useFlowerStore'
import useCartStore from '../store/useCartStore'
import useAuthStore from '../store/useAuthStore'
import useModalStore from '../store/useModalStore'
import toast from 'react-hot-toast'

function ProductPage() {
	const { productId } = useParams()
	const [quantity, setQuantity] = useState(1)
	const { currentFlower, loading, error, getFlowerById, getFlowers, flowers } =
		useFlowerStore()
	const { addItem } = useCartStore()
	const { isAuthenticated } = useAuthStore()
	const { openModal } = useModalStore()

	useEffect(() => {
		if (productId) {
			getFlowerById(productId)
		}
	}, [productId, getFlowerById])

	useEffect(() => {
		// Fetch all flowers for "You may also like" section
		getFlowers()
	}, [getFlowers])

	function incrementQuantity() {
		setQuantity((prevQuantity) => prevQuantity + 1)
	}

	function decrementQuantity() {
		setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))
	}

	function handleAddToCart() {
		if (!isAuthenticated) {
			toast.error('Please sign in to add items to cart')
			openModal('signIn')
			return
		}

		if (currentFlower) {
			addItem({
				id: currentFlower._id,
				name: currentFlower.name,
				price: currentFlower.price,
				imageUrl: currentFlower.imageUrl,
				quantity: quantity,
			})
			toast.success(`${quantity} x ${currentFlower.name} added to cart!`)
			// Reset quantity after adding
			setQuantity(1)
		}
	}

	if (loading) {
		return (
			<div className="p-10 text-center text-xl">Loading flower details...</div>
		)
	}

	if (error) {
		return (
			<div className="p-10 text-center text-xl text-red-500">
				Error: {error}
			</div>
		)
	}

	if (!currentFlower) {
		return <div className="p-10 text-center text-xl">Flower not found</div>
	}

	// Get related flowers (different from current one)
	const relatedFlowers = flowers
		.filter((f) => f._id !== currentFlower._id)
		.slice(0, 4)

	return (
		<div className="">
			<div className="grid grid-cols-1 lg:grid-cols-2 border border-secondary">
				<img
					src={currentFlower.imageUrl}
					alt={currentFlower.name}
					className="w-full max-h-[420px] md:max-h-[670px] lg:max-h-[413px] object-cover"
				/>
				<div className="mt-10 px-4 md:px-10 gap-2 flex flex-col">
					<h3 className="text-sm text-secondary text-left">
						{currentFlower.category?.toUpperCase()}{' '}
						<span className="text-tertiary ">
							/ {currentFlower.name?.toUpperCase()}
						</span>
					</h3>
					<div className="flex flex-col gap-4 pt-6">
						<p className="font-semibold text-[16px] md:text-[36px] ">
							{currentFlower.name} - ${currentFlower.price}
						</p>
						<p className="text-sm md:text-[16px]">
							{currentFlower.description}
						</p>
					</div>
					<div className="flex gap-4 items-center">
						<span>Quantity</span>
						<div className="border border-secondary divide-x divide-secondary flex">
							<button onClick={decrementQuantity} className="px-2 py-1">
								<AiOutlineMinus />
							</button>
							<span className="px-3 py-1"> {quantity} </span>
							<button onClick={incrementQuantity} className="px-2 py-1">
								<AiOutlinePlus />
							</button>
						</div>
					</div>
					<div className="md:pt-10 md:pb-10 pt-4 pb-4">
						<button
							className="bg-black text-white h-12 w-full hover:bg-gray-800 transition"
							onClick={handleAddToCart}
						>
							ADD TO BASKET
						</button>
					</div>
				</div>
			</div>
			<div>
				<h3 className="text-[26px] p-[40px] md:text-[38px] font-semibold text-center md:p-[80px]">
					You may also like
				</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[360px]">
				{relatedFlowers.length > 0 ? (
					relatedFlowers.map((flower) => (
						<ProductCard
							key={flower._id}
							productName={flower.name}
							productImage={flower.imageUrl}
							productPrice={flower.price}
							productLink={`/product/${flower._id}`}
						/>
					))
				) : (
					<div className="col-span-4 text-center p-10">
						No related products available
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductPage
