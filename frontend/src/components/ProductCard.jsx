import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ productImage, productName, productPrice, productLink }) {
	return (
		<Link
			to={productLink}
			className="flex flex-col text-center p-6 border border-secondary bg-no-repeat bg-cover md:bg-contain lg:bg-cover bg-top hover:shadow-lg transition-shadow"
			style={{
				backgroundImage: `url(${productImage})`,
			}}
		>
			<div className="bg-white mt-auto bg-opacity-20">
				<h2 className="">{productName}</h2>
				<p>${productPrice}</p>
			</div>
		</Link>
	)
}

export default ProductCard
