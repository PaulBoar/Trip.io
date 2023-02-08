import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { MenuItems } from './MenuItems';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
	const [clicked, setClicked] = useState(false);

	const handleShowMenu = () => {
		setClicked(!clicked);
		console.log('first');
	};

	let menuIcon;
	let active;

	clicked ? (menuIcon = faTimes) : (menuIcon = faBars);
	clicked
		? (active = [classes['nav-menu'], classes.active].join(' '))
		: (active = `${classes['nav-menu']}`);

	return (
		<nav className={classes.navbar}>
			<h1 className={classes['navbar-logo']}>
				<Link to='/' className={classes.logo}>
					Trip.io
				</Link>
			</h1>

			<div className={classes['menu-icon']}>
				<button onClick={handleShowMenu}>
					<FontAwesomeIcon icon={menuIcon} />
				</button>
			</div>

			<ul className={active}>
				{MenuItems.map((item, index) => {
					let classLink;
					item.cName === 'nav-link-mobile'
						? (classLink = 'nav-link-mobile')
						: (classLink = 'nav-link');

					return (
						<li key={index}>
							<Link to={item.url} className={classes[classLink]}>
								{item.icon && (
									<FontAwesomeIcon
										icon={item.icon}
										className={classes['nav-icon']}
									/>
								)}
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
