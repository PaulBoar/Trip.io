import React from 'react';

import classes from './Trip.module.css';

function TripData(props) {
	return (
		<div className={classes.card}>
			<div className={classes['trip-img']}>
				<img src={props.image} alt='trip image' />
			</div>
			<div className={classes['trip-text']}>
			<h4>{props.heading}</h4>
			<p>{props.text}</p>
			</div>
		</div>
	);
}

export default TripData;
