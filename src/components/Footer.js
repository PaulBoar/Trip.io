import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareTwitter,
	faSquareFacebook,
	faSquareYoutube,
	faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<div className={classes.footer}>
			<div className={classes.container}>
				<div className={classes.top}>
					<div className={classes.text}>
						<h4>Trip.io</h4>
						<p>Choose your best UA destination</p>
					</div>
					<div className={classes.socials}>
						<a href='https://facebook.com/' target='_blank'>
							<FontAwesomeIcon icon={faSquareFacebook} />
						</a>
						<a href='https://twitter.com/' target='_blank'>
							<FontAwesomeIcon icon={faSquareTwitter} />
						</a>
						<a href='https://www.instagram.com/' target='_blank'>
							<FontAwesomeIcon icon={faSquareInstagram} />
						</a>
						<a href='https://www.youtube.com/' target='_blank'>
							<FontAwesomeIcon icon={faSquareYoutube} />
						</a>
					</div>
				</div>

				<div className={classes.bottom}>
					<div className={classes.column}>
						<h5>Project</h5>
						<ul className={classes['column-list']}>
							<li>
								<a href='/'>Smotemom</a>
							</li>
							<li>
								<a href='/'>Status</a>
							</li>
							<li>
								<a href='/'>License</a>
							</li>
							<li>
								<a href='/'>All versions</a>
							</li>
						</ul>
					</div>
					<div className={classes.column}>
						<h5>Community</h5>
						<ul className={classes['column-list']}>
							<li>
								<a href='/'>Github</a>
							</li>
							<li>
								<a href='/'>Issues</a>
							</li>
							<li>
								<a href='/'>Project</a>
							</li>
							<li>
								<a href='/'>Twitter</a>
							</li>
						</ul>
					</div>
					<div className={classes.column}>
						<h5>Help</h5>
						<ul className={classes['column-list']}>
							<li>
								<a href='/'>Support</a>
							</li>
							<li>
								<a href='/'>Troubleshooting</a>
							</li>
							<li>
								<a href='/contact'>Contact us</a>
							</li>
						</ul>
					</div>
					<div className={classes.column}>
						<h5>Others</h5>
						<ul className={classes['column-list']}>
							<li>
								<a href='/'>Terms of Service</a>
							</li>
							<li>
								<a href='/'>Privacy Policy</a>
							</li>
							<li>
								<a href='/'>License</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
