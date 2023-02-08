import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Kyiv from '../assets/images/HeroKyiv.jpg'
import Footer from '../components/Footer';

function About() {
	return (
		<>
			<Navbar />
			<Hero
				cName='hero-mid'
				heroImg={Kyiv}
				title='About Trip.io'
				btnClass='hide'
			/>
			<Footer />
		</>
	);
}

export default About;
