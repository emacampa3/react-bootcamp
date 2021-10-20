import React, { useState, Fragment, useRef } from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHnandler = (event) => {
    event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;
    if (
			enteredName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty value).",
			});
			return;
		}
    if (+enteredUserAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (> 0).",
			});
			return;
		}
    props.onAddUser(enteredName, enteredUserAge);
		nameInputRef.current.value = ''; /* using refs to manipulating DOM to clean the inputs */
		ageInputRef.current.value = '';
	};

  const errorHandler = () => {
    setError(null);
  };

	return (
		<Fragment> {/* empty component in React */}
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
			<Card className={classes.input}>
				<form onSubmit={addUserHnandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						ref={nameInputRef} /* accesing values with a ref: uncontrolled component */
					/>
					<label htmlFor='age'>Age (Years)</label>
					<input
						id='age'
						type='number'
						ref={ageInputRef}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Fragment>
	);
};

export default AddUser;
