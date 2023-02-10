import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Kyiv from '../assets/images/HeroKyiv.jpg'
import QuizUA from '../components/Quiz/QuizUA';
import Footer from '../components/Footer';

function Quiz() {
	return (
		<>
				<Navbar />
			<Hero
				cName='hero-mid'
				heroImg={Kyiv}
				title='Quiz'
				btnClass='hide'
			/>
			<QuizUA />
			<Footer />
		</>
	);
}

export default Quiz;
