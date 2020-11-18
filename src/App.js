import React, { useState } from 'react';

// Base URL
import { baseUrl } from './global';

// css
import './assets/css/App.css';

// Axios
import axios from 'axios';

//  Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import SchoolCard from './Components/SchoolCard';

console.log(baseUrl);

function App() {
	const [stateInput, setStateInput] = useState('');
	const [schoolInput, setSchoolInput] = useState('');

	const [result, setResult] = useState([]);
	console.log(stateInput);

	// Fetchdata
	const fetchData = async () => {
		console.log(1);
		try {
			console.log(2);
			if (stateInput && schoolInput) {
				const response = await axios.get(
					`${baseUrl}?st=${stateInput}&q={schoolInput}&appID={process.env.REACT_APP_APP_ID}&appKey=${process.env.REACT_APP_API_KEY}`
				);
				console.log(3);
				setResult(response.data);
			}
		} catch (e) {
			alert('An error occurred');
		}
	};

	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<div className='form-wrapper'>
				<Form
					setStateInput={setStateInput}
					setSchoolInput={setSchoolInput}
					handleSubmit={fetchData}
				/>
			</div>
			<div className='result-container'>
				<p>Number of results {result.numberOfSchools}</p>
			</div>
			<main>
				{result.length === 0 ? (
					<div></div>
				) : (
					result.schoolList.map((infos, i) => {
						return <SchoolCard infos={infos} key={i} />;
					})
				)}
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
