import React from 'react';
// css
import '../assets/css/SchoolCard.css';

// Image
import location from '../assets/img/location.svg';

const SchoolCard = ({ infos }) => {
	return (
		<div className='schoolcard-container'>
			<p>{infos.schoolName}</p>
			<p>Students number : {infos.schoolYearlyDetails[0].numberOfStudents}</p>
			<p>
				{infos.address.street} {infos.address.city} {infos.address.stateFull}{' '}
				{infos.address.zip}
			</p>
			<div className='location-image-container'>
				<button type='button' className='location-button'>
					<img src={location} alt='location' />
				</button>
			</div>
		</div>
	);
};

export default SchoolCard;
