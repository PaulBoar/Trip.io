import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Kyiv from '../assets/images/HeroKyiv.jpg'
import Footer from '../components/Footer';
import AboutInfo from '../components/AboutInfo';

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
			<AboutInfo />
			<Footer />
		</>
	);
}

export default About;
