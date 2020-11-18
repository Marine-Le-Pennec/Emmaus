import React, { useState } from 'react';

// css
import './assets/css/App.css';

// Axios
import axios from 'axios';

//  Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import SchoolCard from './Components/SchoolCard';

function App() {
	const [stateInput, setStateInput] = useState('');
	const [schoolInput, setSchoolInput] = useState('');

	const [result, setResult] = useState([]);

	// Fetchdata
	const fetchData = async () => {
		try {
			const response = await axios.get(
				`https://api.schooldigger.com/v1/schools?st=${stateInput}&q=${schoolInput}&appID=${process.env.REACT_APP_APP_ID}&appKey=${process.env.REACT_APP_API_KEY}`
			);

			setResult(response.data);
		} catch (e) {
			alert('An error occurred');
		}
	};

	return (
		<div className='App'>
			<div className='wrapper'>
				<header>
					<Header />
				</header>
				<div className='form-wrapper'>
					<Form
						setStateInput={setStateInput}
						setSchoolInput={setSchoolInput}
						handleSubmit={(e) => {
							e.preventDefault();
							fetchData();
						}}
					/>
				</div>
				<div className='result-container'>
					<p>{result.numberOfSchools} school(s) found</p>
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
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
