import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FreshFlower from '../../assets/homepage/freshFlower.jpg'
import DriedFlower from '../../assets/homepage/driedFlower.png'
import ProductCard from '../../components/ProductCard'
import LivePlants from '../../assets/homepage/livePlant.png'
import AromaticCandles from '../../assets/homepage/aromaticCandle.png'
import Fresheners from '../../assets/homepage/fresheners.png'
import useFlowerStore from '../../store/useFlowerStore'

const categories = {
	'fresh-flowers': 'Fresh Flower',
	'dried-flowers': 'Dried Flower',
	'live-plants': 'Live Plant',
	'aromatic-candles': 'Aromatic Candle',
	fresheners: 'Freshener',
}

// Map URL category names to database category names
const categoryMapping = {
	'fresh-flowers': 'Fresh Flowers',
	'dried-flowers': 'Dried Flowers',
	'live-plants': 'Live Plants',
	'aromatic-candles': 'Aroma Candels',
	fresheners: 'Fresheners',
}

function CategoryPage() {
	const { categoryName } = useParams()
	const { flowers, loading, error, getFlowers } = useFlowerStore()

	const CategoryImages = {
		'fresh-flowers': FreshFlower,
		'dried-flowers': DriedFlower,
		'live-plants': LivePlants,
		'aromatic-candles': AromaticCandles,
		fresheners: Fresheners,
	}

	useEffect(() => {
		if (categoryName && categoryMapping[categoryName]) {
			getFlowers(categoryMapping[categoryName])
		}
	}, [categoryName, getFlowers])

	if (!categoryName || !categories[categoryName]) {
		return <div className="p-10 text-center text-xl">Category not found</div>
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[360px]">
			<div
				className={`flex flex-col bg-cover bg-center justify-center items-center md:col-span-2 lg:row-span-2 border-b lg:border-r border-secondary`}
				style={{
					backgroundImage: `url(${CategoryImages[categoryName]})`,
				}}
			>
				<h1 className="text-white text-4xl font-bold text-center">
					{categories[categoryName]}
				</h1>
			</div>
			{loading && (
				<div className="col-span-2 p-10 text-center">Loading flowers...</div>
			)}

			{error && (
				<div className="col-span-2 p-10 text-center text-red-500">
					Error: {error}
				</div>
			)}

			{!loading && !error && flowers.length === 0 && (
				<div className="col-span-2 p-10 text-center">
					No flowers found in this category.
				</div>
			)}

			{!loading &&
				!error &&
				flowers.map((flower) => (
					<ProductCard
						key={flower._id}
						productImage={flower.imageUrl}
						productLink={`/product/${flower._id}`}
						productName={flower.name}
						productPrice={flower.price}
					/>
				))}
		</div>
	)
}

export default CategoryPage
