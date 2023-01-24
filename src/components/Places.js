import React from 'react'
import classes from './Places.module.css'

import GoldenGate from '../assets/images/golden-gate.jpg'
import GoldenGateStatue from '../assets/images/golden-gate-statue.jpg.webp'
import PlacesData from './PlacesData'

function Places() {
  return (
    <div className={classes.places}>
     <h1>Popular places</h1>
     <p>Guided tours shows you real Kyiv</p>

     <PlacesData />
    </div>
  )
}

export default Places