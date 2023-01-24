import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Kyiv from '../assets/images/HeroKyiv.jpg'

function About() {
	return (
		<>
			<Navbar />
			<Hero
				cName='hero-mid'
				heroImg={Kyiv}
				title='About Ukraine'
				btnClass='hide'
			/>
		</>
	);
}

export default About;
