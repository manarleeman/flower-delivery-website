import { create } from 'zustand'

const useModalStore = create((set) => ({
	// State for different modals
	modals: {
		signIn: false,
		signUp: false,
		cart: false,
		productDetails: false,
		confirmOrder: false,
		mobileMenu: false,
	},

	modalData: null,

	// Actions
	openModal: (modalName, data = null) =>
		set((state) => ({
			modals: Object.keys(state.modals).reduce((acc, key) => {
				acc[key] = key === modalName
				return acc
			}, {}),
			modalData: data,
		})),

	closeModal: (modalName) =>
		set((state) => ({
			modals: { ...state.modals, [modalName]: false },
			modalData: null,
		})),

	closeAllModals: () =>
		set((state) => ({
			modals: Object.keys(state.modals).reduce((acc, key) => {
				acc[key] = false
				return acc
			}, {}),
			modalData: null,
		})),

	toggleModal: (modalName) =>
		set((state) => ({
			modals: { ...state.modals, [modalName]: !state.modals[modalName] },
		})),

	isModalOpen: (modalName) => {
		const state = useModalStore.getState()
		return state.modals[modalName] || false
	},
}))

export default useModalStore
