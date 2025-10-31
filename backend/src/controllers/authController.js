import { validationResult } from 'express-validator'
import User from '../models/userModel.js'

export const register = async (req, res) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res
				.status(400)
				.json({ errors: errors.array(), message: 'Invalid input data' })
		}
		const name = req.body.name
		const email = req.body.email
		const password = req.body.password
		const user = await User.create({ name, email, password })
		const token = user.generateAuthToken()
		res.status(201).json({
			message: 'user created successfully',
			token,
			user: { id: user._id, email: user.email, name: user.name },
		})
	} catch (error) {
		if (error.code === 11000) {
			return res.status(409).json({ message: 'email already exists' })
		}
		res.status(500).json({ message: 'failed to create user' })
	}
}
export const login = async (req, res) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		const email = req.body.email
		const password = req.body.password
		const user = await User.findOne({ email })
		if (!user) {
			return res.status(404).json({ message: 'user not found' })
		}
		const isMatch = await user.comparePassword(password)
		if (!isMatch) {
			return res.status(401).json({ message: 'invalid credentials' })
		}
		// Generate JWT token
		const token = user.generateAuthToken()
		res.status(200).json({
			message: 'login successful',
			token,
			user: { id: user._id, email: user.email, name: user.name },
		})
	} catch (error) {
		res.status(500).json({ message: 'failed to login' })
	}
}