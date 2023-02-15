import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import NotFoundImg from '../assets/images/NotFoundImg.jpg'

function NotFound() {
	return (
		<>
			<Navbar />
			<Hero
				cName='hero'
				heroImg={NotFoundImg}
				title='Page Not Found'
				btnClass='hide'
			/>
			{/* <Footer /> */}
		</>
	);
}

export default NotFound;
