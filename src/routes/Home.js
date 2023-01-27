import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Places from '../components/Places';
import Independence from '../assets/images/Independence.jpg'
import Trip from '../components/Trip';

function Home() {
	return (
		<>
			<Navbar />
			<Hero
				cName='hero'
				heroImg={Independence}
				title='Your Journey Starts Here'
				text='Explore the Heart of Ukraine'
				btnText='Travel Plan'
				btnClass='show'
				url='/'
			/>
			<Places />
			<Trip />
		</>
	);
}

export default Home;
