import React from 'react';
// css
import '../assets/css/Footer.css';

const Footer = () => {
	return (
		<div className='footer-text-wrapper'>
			<p>
				Made with React.js by{' '}
				<a href='https://tinyurl.com/y6k63aml' target='_blank' rel='noreferrer'>
					Marine Le Pennec
				</a>{' '}
				for{' '}
				<a href='https://tinyurl.com/zjw4nu9' target='_blank' rel='noreferrer'>
					Emmaüs
				</a>{' '}
				| Background by{' '}
				<a href='https://tinyurl.com/y4wpyyz7' target='_blank' rel='noreferrer'>
					Oussama Zaidi
				</a>
			</p>
		</div>
	);
};

export default Footer;
