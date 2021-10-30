import React, { useState, useEffect, useReducer } from "react"

import Card from "../UI/Card/Card"
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"

/* created outside the component function */
const emailReducerFunction = (state, action) => {
	if (action.type === 'USER_INPUT') {
			return { value: action.val, isValid: action.val.includes('@') };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') };
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

	const emailChangeHandler = (event) => {
		dispatchEmail({
			type: "USER_INPUT",
			val: event.target.value,
		})
	}

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value)
	}

	const validateEmailHandler = () => {
		setEmailIsValid(enteredEmail.includes("@"))
	}

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		props.onLogin(enteredEmail, enteredPassword)
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailIsValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={enteredEmail}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordIsValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={enteredPassword}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default Login
