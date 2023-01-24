import React from 'react'
import classes from './Places.module.css'

import GoldenGate from '../assets/images/golden-gate.jpg'
import GoldenGateStatue from '../assets/images/golden-gate-statue.jpg.webp'

function PlacesData() {
  return (
   <div className={classes['first-description']}>
   <div className={classes['description-text']}>
     <h2>Golden Gate</h2>
     <p>he Golden Gate of Kyiv was the main gate in the 11th century fortifications of Kiev, the capital of Kievan Rus'. It was named in imitation of the Golden Gate of Constantinople. The structure was dismantled in the Middle Ages, leaving few vestiges of its existence.</p>
   </div>

   <div className={classes['image']}>
     <img alt='golden gate kyiv' src={GoldenGate}/>
     <img alt='golden gate kyiv' src={GoldenGateStatue}/>
   </div>
  </div>
  )
}

export default PlacesData