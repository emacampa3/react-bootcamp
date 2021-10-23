import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [emailIsValid, setEmailIsValid] = useState();
	const [enteredPassword, setEnteredPassword] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(
				enteredEmail.includes('@') && enteredPassword.trim().length > 6
			);
		}, 500);

		/* clean-up function: runs before useEffect() runs for the second time */
		return () => {
			clearTimeout(identifier); /* if user types a letter every 500ms, the setFormIsValid() will not run until the user stops typing */
		};
	}, [enteredEmail, enteredPassword]); /* setFormIsValid does not need to be in dependencies as it never changes */
	/* adding the pointers to the functions: after every Login execution, 
  it will rerun useEffect() but only if any dependancies in array is changed,
  otherwise function will not rerun */

	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);

    setFormIsValid(
      emailState.isValid.includes('@')&& event.target.value.trim().length > 6
    );
	};

	const validateEmailHandler = () => {
		setEmailIsValid(emailState.value.isValid);
	};

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, enteredPassword);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={emailState.value}
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
	);
};

export default Login;
