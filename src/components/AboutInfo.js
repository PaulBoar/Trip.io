import React from 'react'
import classes from './AboutInfo.module.css'

function AboutInfo() {
		return (
				<div className={classes['about-container']}>
					<h3>Our History</h3>
					<p>Trip.io was created in 2020 by a great team of Ukrainians travellers, history passionates and active city and country guides. Despite the pandemy we've managed to provide dozens of excursion all over Ukraine.  </p>

					<h3>Our Mission</h3>
					<p>Our mission is to provide best travel experience to those who want to travel to Ukraine and explore it's beautiful cities, mountains, rich architecture and strong Ukrainian spirit. </p>

					<h3>Our Vision</h3>
					<p>We take a customer centric approach and want to show that Ukraine is really great country with great people</p>
				</div>
		)
}

export default AboutInfo