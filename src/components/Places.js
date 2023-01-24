import React from 'react'
import classes from './Places.module.css'

import GoldenGate from '../assets/images/golden-gate.jpg'
import GoldenGateStatue from '../assets/images/golden-gate-statue.jpg.webp'
import PlacesData from './PlacesData'

function Places() {
  return (
    <div className={classes.places}>
     <h1>Popular places</h1>
     <p className={classes.subhead}>Guided tours shows you the real Kyiv</p>

     <PlacesData
      heading='Independence Square'
      text='The Independence Square, or Maidan Nezalezhnosti, is the central square in Kiev, the main and the most beautiful one. Parades, concerts, festivals and other city arrangements and holidays take place on this square. It contains six fountains, Independence Column and artificial waterfall. The Independence Square has much to offer: the huge building with the tower and chimes, the Trade Union Association Office and other attractions. The left side of the Independence square is covered with granite. The splendid panoramic view of Old Kiev opens from the upper floors of the square buildings.'
      img1='https://img.itinari.com/activity/images/original/28008abe-6c2d-4123-99cb-254aa3796d75-istock-1134658793.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=3081e51a2c2f97ad632c9573e64d2428'
      img2='https://ukrainetrek.com/blog/wp-content/uploads/2014/09/restored-independence-square-kyiv-ukraine-7.jpg'
     />

     <PlacesData
      heading='Golden Gate'
      text='The Golden Gate of Kyiv was the main gate in the 11th century fortifications of Kiev, the capital of Kievan Rus. It was named in imitation of the Golden Gate of Constantinople. The structure was dismantled in the Middle Ages, leaving few vestiges of its existence.'
      img1={GoldenGate}
      img2={GoldenGateStatue}
     />
    </div>
  )
}

export default Places