import uploadFiletoCloud from '../claudinary.js'
import Flower from '../models/flowerModel.js'
import express, { response } from 'express'

export const getFlowers = async (req, res) => {
	try {
		const { category } = req.query
		const query = category ? { category } : {}
		const flowers = await Flower.find(query)
		res.status(200).json(flowers)
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch flowers' })
	}
}
export const getFlower = async (req, res) => {
	try {
		const id = req.params.id
		const flower = await Flower.findById(id)
		res.status(200).json(flower)
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch flower' })
	}
}
export const addFlower = async (req, res) => {
	try {
		const name = req.body.name
		const description = req.body.description
		const price = req.body.price
		const category = req.body.category
		let imageFileURL = ''
		const imageFile = req.file
		if (imageFile) {
			try {
				const response = await uploadFiletoCloud(imageFile.path)
				imageFileURL = response.secure_url
			} catch (error) {
				console.log('file upload failed')
				console.log(error)
			}
		}

		// const { name, description, price, category } = req.body;
		// const image = req.file?.path;

		const flower = await Flower.create({
			name: name,
			description: description,
			price: price,
			category: category,
			imageUrl: imageFileURL,
		})

		res.status(201).json(flower)
	} catch (err) {
		res.status(500).json({ error: 'Failed to add flower' })
		console.log(err)
	}
}

export const deleteFlower = async (req, res) => {
	try {
		await Flower.findByIdAndDelete(req.params.id)
		res.status(200).json({ message: 'Flower deleted Successfully' })
	} catch (err) {
		res.status(500).json({ error: 'Failed to delete flower' })
	}
}

//  Export all controller methods as an object
// const flowerCtrl = {
// 	getFlower,
// 	addFlower,
// 	deleteFlower,
// };

// export default flowerCtrl;
