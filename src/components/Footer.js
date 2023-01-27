import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faSquareFacebook, faSquareYoutube, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
	return (
		<div className={classes.footer}>
			<div className={classes.top}>
				<div className={classes.text}>
					<h4>Trip.io</h4>
					<p>Choose your best UA destination</p>
				</div>
				<div className={classes.socials}>
					<a href='/'><FontAwesomeIcon icon={faSquareFacebook} /></a>
					<a href='/'><FontAwesomeIcon icon={faSquareTwitter} /></a>
					<a href='/'><FontAwesomeIcon icon={faSquareInstagram} /></a>
					<a href='/'><FontAwesomeIcon icon={faSquareYoutube} /></a>
				</div>
			</div>

			<div className={classes.bottom}>
    <div className={classes.column}>
     <h5>Project</h5>
     <ul className={classes['column-list']}>
      <li><a href='/'>Smotemom</a></li>
      <li><a href='/'>Status</a></li>
      <li><a href='/'>License</a></li>
      <li><a href='/'>All versions</a></li>
     </ul>
    </div>
    <div className={classes.column}>
     <h5>Project</h5>
     <ul className={classes['column-list']}>
      <li><a href='/'>Smotemom</a></li>
      <li><a href='/'>Status</a></li>
      <li><a href='/'>License</a></li>
      <li><a href='/'>All versions</a></li>
     </ul>
    </div>
    <div className={classes.column}>
     <h5>Project</h5>
     <ul className={classes['column-list']}>
      <li><a href='/'>Smotemom</a></li>
      <li><a href='/'>Status</a></li>
      <li><a href='/'>License</a></li>
      <li><a href='/'>All versions</a></li>
     </ul>
    </div>
    <div className={classes.column}>
     <h5>Project</h5>
     <ul className={classes['column-list']}>
      <li><a href='/'>Smotemom</a></li>
      <li><a href='/'>Status</a></li>
      <li><a href='/'>License</a></li>
      <li><a href='/'>All versions</a></li>
     </ul>
    </div>
    
   </div>
		</div>
	);
}

export default Footer;
