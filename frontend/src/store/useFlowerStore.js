import { create } from 'zustand'

const API_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

const useFlowerStore = create((set) => ({
	// State
	flowers: [],
	currentFlower: null,
	loading: false,
	error: null,

	// Actions
	getFlowers: async (category = null) => {
		set({ loading: true, error: null })
		try {
			const url = category
				? `${API_URL}/api/flowers?category=${encodeURIComponent(category)}`
				: `${API_URL}/api/flowers`

			const response = await fetch(url)

			if (!response.ok) {
				throw new Error('Failed to fetch flowers')
			}

			const data = await response.json()
			set({ flowers: data, loading: false })
			return data
		} catch (error) {
			set({ error: error.message, loading: false })
			console.error('Error fetching flowers:', error)
			return []
		}
	},

	getFlowerById: async (id) => {
		set({ loading: true, error: null })
		try {
			const response = await fetch(`${API_URL}/api/flowers/${id}`)

			if (!response.ok) {
				throw new Error('Failed to fetch flower')
			}

			const data = await response.json()
			set({ currentFlower: data, loading: false })
			return data
		} catch (error) {
			set({ error: error.message, loading: false, currentFlower: null })
			console.error('Error fetching flower:', error)
			return null
		}
	},

	clearCurrentFlower: () => set({ currentFlower: null }),

	clearError: () => set({ error: null }),
}))

export default useFlowerStore
