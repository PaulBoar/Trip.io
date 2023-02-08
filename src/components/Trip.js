import React from 'react'

import classes from './Trip.module.css'
import TripData from './TripData'
import Lviv from '../assets/images/Lviv.jpg'
import Odessa from '../assets/images/Odessa.jpg'
import Chenrnobyl from '../assets/images/Chernobyl.jpg'

function Trip() {
  return (
    <div className={classes.trip}>
     <h2>Recent Trips</h2>
     <p>You can discover the unique Ukraine with our trip offers</p>
     <div className={classes['trip-card']}>
      <TripData 
      image={Lviv}
      heading='Magic of Lviv'
      text='Lviv is an amazing city. Lviv is a city in western Ukraine, around 70 kilometers from the border with Poland. Traces of its Polish and Austro-Hungarian heritage are evident in its architecture, which blends Central and Eastern European styles with those of Italy and Germany.'
      />
      <TripData 
      image={Odessa}
      heading='Sunny Odessa'
      text='Odessa is an amazing city. Odessa is a port city on the Black Sea in southern Ukraine. It’s known for its beaches and 19th-century architecture, including the Odessa Opera and Ballet Theater. Odess is the third most populous city and municipality in Ukraine and a major seaport and transport hub located in the south-west of Ukraine'
      />
      <TripData 
      image={Chenrnobyl}
      heading='History of Chernobyl'
      text='The Chernobyl disaster was a nuclear accident that occurred on 26 April 1986 at the No. 4 reactor in the Chernobyl Nuclear Power Plant, near the city of Pripyat in the north of the Ukrainian SSR in the Soviet Union. The Exclusion Zone was originally an area with a radius of 30 kilometres in all directions from the plant, but was subsequently greatly enlarged to include an area measuring approximately 2,600 km2.'
      />
     </div>
    </div>
  )
}

export default Trip