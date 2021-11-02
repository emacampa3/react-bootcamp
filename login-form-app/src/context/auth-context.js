import React, { useState, useEffect } from "react"

/* AuthContext is an object, that will contain a component */
const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
  onLogin: (email, password) => {}
})

/* separate file that manages the entire state */
export const AuthContextProviderComponent = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn")

		if (storedUserLoggedInInformation === "1") {
			setIsLoggedIn(true)
		}
	}, []) /* no dependancies */

	const logoutHandler = () => {
		localStorage.removeItem("isLogged")
		setIsLoggedIn(false)
	}

	const loginHandler = () => {
		localStorage.setItem("isLoggedIn", "1")
		setIsLoggedIn(true)
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext
