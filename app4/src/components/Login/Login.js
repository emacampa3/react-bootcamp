import React, { useState, useEffect, useReducer, useContext, useRef } from "react"

import Card from "../UI/Card/Card"
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"
import AuthContext from "../../context/auth-context"
import Input from "../UI/Input/Input"

/* created outside the component function */
const emailReducerFunction = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") }
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.includes("@") }
	}
	return { value: "", isValid: false }
}

const passwordReducerFunction = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.trim().length > 6 }
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 }
	}
	return { value: "", isValid: false }
}

const Login = (props) => {
	const [formIsValid, setFormIsValid] = useState(false)

	/* calling the useReducer that returns an array with two elements (first argument is a function) adding the initial values */
	const [emailState, dispatchEmail] = useReducer(emailReducerFunction, {
		value: "",
		isValid: null,
	})

	const [passwordState, dispatchPassword] = useReducer(
		passwordReducerFunction,
		{
			value: "",
			isValid: null,
		}
	)

	const authCtx = useContext(AuthContext)

	const emailInputRef = useRef()
	const passwordInputRef = useRef()

	/* the optimal way of updating state:
	object destructuring with alias assignment: pulling out a value of isValid and storing it inside alias (emailIsValid or passwordIsValid) */
	const { isValid: emailIsValid } = emailState
	const { isValid: passwordIsValid } = passwordState
	/* when just the value changes, while validity does not, useEffect() will not rerun (once it reaches the valid point) */

	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(emailIsValid && passwordIsValid)
		}, 500)

		return () => {
			clearTimeout(identifier)
		}
	}, [emailIsValid, passwordIsValid])
	/* dependancies: all the data that is from inside of the 
	useEffect component function needs to go into an array of dependancies */

	const emailChangeHandler = (event) => {
		dispatchEmail({
			type: "USER_INPUT",
			val: event.target.value,
		})
	}

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value })
	}

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" })
	}

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" })
	}

	const submitHandler = (event) => {
		event.preventDefault()
		if (formIsValid) {
			authCtx.onLogin(emailState.value, passwordState.value)
		} else if (!emailIsValid) { /* focusing the cursor at the first invalid input */
			emailInputRef.current.focus() /* focus is the external name for the activate function */
		} else {
			passwordInputRef.current.focus()
		}
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
				ref={emailInputRef}
					id='email'
					label='E-mail'
					type='email'
					isValid={emailIsValid}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
				ref={passwordInputRef}
					id='password'
					label='Password'
					type='password'
					isValid={passwordIsValid}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn} >
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default Login
