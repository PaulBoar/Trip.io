import React from 'react'
import classes from './Places.module.css'

function PlacesData(props) {
  return (
   <div className={classes['first-description']}>
   <div className={classes['description-text']}>
     <h2>{props.heading}</h2>
     <p>{props.text}</p>
   </div>

   <div className={classes['image']}>
     <img alt='golden gate kyiv' src={props.img1}/>
     <img alt='golden gate kyiv' src={props.img2}/>
   </div>
  </div>
  )
}

export default PlacesData