import React, { useEffect, useState } from 'react';

// css
import './assets/css/App.css';

// Axios
import axios from 'axios';

//  Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import SchoolCard from './Components/SchoolCard';

// Logo(s)
import left from './assets/img/angle-left-solid.svg';
import right from './assets/img/angle-right-solid.svg';

/** Function to fetch data
 *
 * @param {stateInput} state
 * @param {schoolInput} query
 * @param {page} page
 */

const fetchData = async (state, query, page = 1) => {
	if (!state || !query) {
		throw new Error('No query');
	}

	const response = await axios.get(
		`https://api.schooldigger.com/v1/schools?st=${state}&q=${query}&page=${page}&appID=${process.env.REACT_APP_APP_ID}&appKey=${process.env.REACT_APP_API_KEY}`
	);

	return response.data;
};

function App() {
	// -----------------States-----------------------
	const [result, setResult] = useState({});
	const [stateInput, setStateInput] = useState('');
	const [schoolInput, setSchoolInput] = useState('');
	const [page, setPage] = useState(1);

	// --------useEffect---------------------------

	// Using a useEffect to handle the page' changing and set the data into result state
	useEffect(() => {
		if (stateInput.length > 0 && schoolInput.length > 0) {
			fetchData(stateInput, schoolInput, page).then((data) => {
				setResult(data);
			});
		}
	}, [page]);
	// ----------------------JSX---------------------------
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<div className='form-wrapper'>
				<Form
					setStateInput={setStateInput}
					setSchoolInput={setSchoolInput}
					// using a function to submit the form and start searching
					handleSubmit={async (e) => {
						e.preventDefault();
						try {
							const result = await fetchData(stateInput, schoolInput, page);
							setResult(result);
						} catch (e) {
							console.error(e);
						}
					}}
				/>
			</div>
			<div className='result-container'>
				<p>
					{result.numberOfSchools ? result.numberOfSchools : 0} school(s) found
				</p>
			</div>
			<main>
				{result.schoolList ? (
					result.schoolList.map((infos, i) => {
						return <SchoolCard infos={infos} key={i} />;
					})
				) : (
					<div />
				)}
			</main>

			<div className='pagination-container'>
				<button
					type='button'
					onClick={() => {
						setPage((page) => page - 1);
					}}>
					<img src={left} alt='previous' />
				</button>
				<button
					type='button'
					onClick={() => {
						setPage((page) => page + 1);
					}}>
					<img src={right} alt='next' />
				</button>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
