import React from 'react';
// css
import '../assets/css/SchoolCard.css';

// Image
import location from '../assets/img/location.svg';

const SchoolCard = ({ infos }) => {
	return (
		<div className='schoolcard-container'>
			<p>{infos.schoolName}</p>
			<p>Students number : 3400</p>
			<p>adresse</p>
			<button type='button' className='location-image-container'>
				<img src={location} alt='location' />
			</button>
		</div>
	);
};

export default SchoolCard;
