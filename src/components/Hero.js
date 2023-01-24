import React from 'react'
import classes from './Hero.module.css'


function Hero(props) {
  return (
    <div className={classes[`${props.cName}`]}>
     <img alt='hero img' src={props.heroImg} />

     <div className={classes['hero-text']}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a href={props.url} className={classes[`${props.btnClass}`]}>{props.btnText}</a>
     </div>
    </div>
  )
}

export default Hero