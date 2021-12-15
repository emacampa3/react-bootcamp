import { useRef, useState } from "react"

import classes from "./Checkout.module.css"

const isEmpty = (value) => value.trim() === ""
const isFourChars = (value) => value.trim() === 4

const Checkout = (props) => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		/* initial values */
		name: true,
		street: true,
		postalCode: true,
		city: true,
	})

	/* we can use Refs to read what the user wrote */
	const nameInputRef = useRef()
	const streetInputRef = useRef()
	const postalCodeInputRef = useRef()
	const cityInputRef = useRef()

	const confirmHandler = (event) => {
		event.preventDefault()

		/* current gives you the the values inside the input */
		const enteredName = nameInputRef.current.value
		const enteredStreet = streetInputRef.current.value
		const enteredPostalCode = postalCodeInputRef.current.value
		const enteredCity = cityInputRef.current.value

		const enteredNameIsValid = !isEmpty(enteredName)
		const enteredStreetIsValid = !isEmpty(enteredStreet)
		const enteredPostalCodeIsValid = isFourChars(enteredPostalCode)
		const enteredCityIsValid = !isEmpty(enteredCity)

		/* state updating function, overriding the entire state */
		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postalCode: enteredPostalCodeIsValid,
		})

		const formIsvalid =
			enteredName && enteredStreet && enteredPostalCode && enteredCity

		if (!formIsvalid) {
			return /* to not continue with code execution */
		}
	}

	const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`
	const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`
	const postalControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`
	const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={nameControlClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameInputRef} />
				{!formInputsValidity.name && <p>Please enter a valid name!</p>}
			</div>
			<div className={streetControlClasses}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetInputRef} />
				{!formInputsValidity.street && <p>Please enter a valid street name!</p>}
			</div>
			<div className={postalControlClasses}>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' ref={postalCodeInputRef} />
				{!formInputsValidity.postalCode && (
					<p>Please enter a valid postal code (4 charecters long)!</p>
				)}
			</div>
			<div className={cityControlClasses}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInputRef} />
				{!formInputsValidity.city && <p>Please enter a valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={props.onCancel}>Cancel</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	)
}

export default Checkout
