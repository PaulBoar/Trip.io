import React, { useState } from 'react';
import classes from './AboutInfo.module.css';
import AboutInfoNavItem from './AboutInfoNavItem';

const aboutList = ['our mission', 'success', 'stories'];

function AboutInfo() {
	const [choosenSec, setChoosenSec] = useState(false);
	let active;

	choosenSec
		? (active = [classes.item, classes.active].join(' '))
		: (active = `${classes.item}`);

	const handleActivate = () => {
		setChoosenSec(!choosenSec);
	};

	return (
		<section className={classes.about}>
			AboutInfo
			<ul className={classes['about-nav']}>
				{aboutList.map((item) => {
					return (
						<AboutInfoNavItem title={item} />
					);
				})}{' '}
			</ul>
		</section>
	);
}

export default AboutInfo;
