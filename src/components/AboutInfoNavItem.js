import React, { useState } from 'react';
import classes from './AboutInfo.module.css';

function AboutInfoNavItem(props) {
	const [activate, setActivate] = useState(false);

 
	return (
		<li
			className={
				activate ? [classes.item, classes.active].join(' ') : classes.item
			}>
			<button onClick={() => setActivate((prev) => !prev)}>
				{props.title}
			</button>
		</li>
	);
}

export default AboutInfoNavItem;
