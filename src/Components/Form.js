import React from 'react';
// css
import '../assets/css/Form.css';

// Logo
import search from '../assets/img/search.svg';

const Form = ({ setSchoolInput, setStateInput, handleSubmit }) => {
	// ------------------JSX---------------------
	return (
		<form className='form-container' onSubmit={handleSubmit}>
			<input
				placeholder='State (ex : CA)'
				onChange={(e) => setStateInput(e.target.value)}
			/>
			<input
				placeholder='School name'
				onChange={(e) => setSchoolInput(e.target.value)}
			/>
			<button type='submit' className='submit-button'>
				<img src={search} alt='search' />
			</button>
		</form>
	);
};

export default Form;
