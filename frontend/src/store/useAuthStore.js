import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import useCartStore from './useCartStore'

const useAuthStore = create(
	persist(
		(set, get) => ({
			// State
			user: null,
			token: null,
			isAuthenticated: false,
			isLoading: false,
			error: null,
			errorStatus: null,

			// Actions
			setUser: (user) => set({ user, isAuthenticated: !!user }),

			setToken: (token) => set({ token }),

			login: async (credentials) => {
				set({ isLoading: true, error: null, errorStatus: null })
				try {
					const serverUrl = import.meta.env.VITE_SERVER_URL
					const response = await fetch(`${serverUrl}/api/auth/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(credentials),
					})

					const data = await response.json()

					if (!response.ok) {
						set({
							error: data || { message: 'Login failed' },
							errorStatus: response.status,
							isLoading: false,
						})

						return {
							success: false,
							error: data || { message: 'Login failed' },
							status: response.status,
							data,
						}
					}

					set({
						user: data.user,
						token: data.token,
						isAuthenticated: true,
						isLoading: false,
						error: null,
						errorStatus: null,
					})

					return { success: true, data, status: response.status }
				} catch (error) {
					set({
						error: { message: error.message },
						errorStatus: 0,
						isLoading: false,
					})
					return {
						success: false,
						error: { message: error.message },
						status: 0,
					}
				}
			},

			signup: async (userData) => {
				set({ isLoading: true, error: null, errorStatus: null })
				try {
					const serverUrl = import.meta.env.VITE_SERVER_URL
					const response = await fetch(`${serverUrl}/api/auth/signUp`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(userData),
					})

					const data = await response.json()

					if (!response.ok) {
						set({
							error: data || { message: 'Sign up failed' },
							errorStatus: response.status,
							isLoading: false,
						})

						return {
							success: false,
							error: data || { message: 'Sign up failed' },
							status: response.status,
							data,
						}
					}

					set({
						user: data.user,
						token: data.token,
						isAuthenticated: true,
						isLoading: false,
						error: null,
						errorStatus: null,
					})

					return { success: true, data, status: response.status }
				} catch (error) {
					set({
						error: { message: error.message },
						errorStatus: 0,
						isLoading: false,
					})
					return {
						success: false,
						error: { message: error.message },
						status: 0,
					}
				}
			},

			logout: () => {
				// Clear cart when logging out
				const { clearCart } = useCartStore.getState()
				clearCart()

				set({
					user: null,
					token: null,
					isAuthenticated: false,
					error: null,
					errorStatus: null,
				})
			},

			updateUser: (userData) => {
				set((state) => ({
					user: { ...state.user, ...userData },
				}))
			},

			clearError: () => set({ error: null, errorStatus: null }),

			getAuthHeader: () => {
				const token = get().token
				return token ? { Authorization: `Bearer ${token}` } : {}
			},
		}),
		{
			name: 'auth-storage',
			partialize: (state) => ({
				user: state.user,
				token: state.token,
				isAuthenticated: state.isAuthenticated,
			}),
		}
	)
)

export default useAuthStore
