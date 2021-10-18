const AddUser = (props) => {
  const addUserHnandler = (event) => {
    event.preventDefault();
  };

	return (
		<form onSubmit={addUserHnandler}>
			<label htmlFor='username'>Username</label>
			<input id='username' type='text'  />
			<label htmlFor='age'>Age (Years)</label>
			<input id='age' type='number' />
      <button type='submit'>Add User</button>
		</form>
	);
};

export default AddUser;
