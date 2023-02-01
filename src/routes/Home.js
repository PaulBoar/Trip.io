import React, { useState } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Places from '../components/Places';
import Independence from '../assets/images/Independence.jpg';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import TripVideo from '../components/TripVideo';

function Home() {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const hideModalHandler = () => setModalIsVisible(false)
	const showModalHandler = () => setModalIsVisible(true)

	return (
		<>
			<Navbar />
			{modalIsVisible && (
				<Modal onHideModal={hideModalHandler}>
					<TripVideo />
				</Modal>
			)}
			<Hero
				cName='hero'
				heroImg={Independence}
				title='Your Journey Starts Here'
				text='Explore the Heart of Ukraine'
				btnText='Trip Video'
				btnClass='show'
				url='/'
				onShowModal={showModalHandler}
			/>
			<Places />
			<Trip />
			<Footer />
		</>
	);
}

export default Home;
