import React from 'react';
import classes from './TripVideo.module.css';

function TripVideo() {
	return (
		<div className={classes.container}>
			<div className={classes.video}>
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/L2wDY6h4T8A'
					title='YouTube video player'
					// frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>
			</div>
		</div>
	);
}

export default TripVideo;
