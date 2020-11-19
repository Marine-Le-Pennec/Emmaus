import React, { useState } from 'react';
// css
import '../assets/css/Modal.css';

// logo
import hidebutton from '../assets/img/times-solid.svg';
import marker from '../assets/img/map-marker-alt-solid 4.png';

// ReactMapGL : https://visgl.github.io/react-map-gl/
import ReactMapGL, { Marker } from 'react-map-gl';

const Modal = ({ hide, infos }) => {
	// Handle the  viewport state if there is nos latLong data (for exemple if you already use all your api request)
	const handleLatLong = () => {
		if (infos.address.latLong) {
			return {
				latitude: infos.address.latLong.latitude,
				longitude: infos.address.latLong.longitude,
				zoom: 13,
			};
		} else {
			return { latitude: null, longitude: null, zoom: null };
		}
	};

	const [viewport, setViewport] = useState(handleLatLong());

	// ------------------JSX--------------------------------
	return (
		<div className='modal-container'>
			<button type='button' onClick={hide}>
				<img src={hidebutton} alt='hide modal' />
			</button>
			{infos.address.latLong ? (
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
							longitude={infos.address.latLong.longitude}>
							<img src={marker} alt='marker' />
						</Marker>
					</ReactMapGL>
				</div>
			) : (
				<p>NO DATA</p>
			)}
		</div>
	);
};

export default Modal;
