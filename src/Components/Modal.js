import React, { useState } from 'react';
// css
import '../assets/css/Modal.css';

// logo
import hidebutton from '../assets/img/times-solid.svg';
import marker from '../assets/img/map-marker-alt-solid 4.png';

import ReactMapGL, { Marker } from 'react-map-gl';

const Modal = ({ hide, infos }) => {
	console.log(infos.address.latLong);

	const [viewport, setViewport] = useState({
		latitude: infos.address.latLong.latitude,
		longitude: infos.address.latLong.longitude,
		zoom: 13,
	});

	return (
		<div className='modal-container'>
			<button type='button' onClick={hide}>
				<img src={hidebutton} alt='hide modal' />
			</button>
			<div className='mapbox-react'>
				<ReactMapGL
					{...viewport}
					width='1000px'
					height='500px'
					mapStyle='mapbox://styles/mapbox/streets-v11'
					onViewportChange={(nextViewport) => setViewport(nextViewport)}
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
					<Marker
						latitude={infos.address.latLong.latitude}
						longitude={infos.address.latLong.longitude}
						offsetLeft={-20}
						offsetTop={-10}>
						<img src={marker} alt='marker' />
					</Marker>
				</ReactMapGL>
			</div>
		</div>
	);
};

export default Modal;
