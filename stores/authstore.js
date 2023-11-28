import {defineStore} from "pinia";

export const useUserStore = defineStore('user', () => {
	const user = ref(null);
	const handleLogin = () => {}
	const handleSignUp = (credentials) => {
		const {email, password} = credentials;
	}
	const handleLogout = () => {}
	const getUser = () => {}
})

