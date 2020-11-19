import React, { useState } from 'react';
// css
import '../assets/css/SchoolCard.css';

// Image
import location from '../assets/img/location.svg';

// Component
import Modal from '../Components/Modal';

const SchoolCard = ({ infos }) => {
	//----------- State(s) ------------
	const [isModalShowing, setIsModalShowing] = useState(false);

	//----------- Function(s) ------------

	// Allow to show/hide patient infos modal
	const toggle = () => {
		setIsModalShowing(!isModalShowing);
	};

	return (
		<div className='schoolcard-container'>
			<div className={isModalShowing ? 'modal-wrapper' : 'hide'}>
				<Modal isModalShowing={isModalShowing} hide={toggle} infos={infos} />
			</div>

			<p>{infos.schoolName}</p>
			<p>Students number : {infos.schoolYearlyDetails[0].numberOfStudents}</p>
			<p>
				{infos.address.street} {infos.address.city} {infos.address.stateFull}{' '}
				{infos.address.zip}
			</p>
			<div className='location-image-container'>
				<button type='button' className='location-button' onClick={toggle}>
					<img src={location} alt='location' />
				</button>
			</div>
		</div>
	);
};

export default SchoolCard;
