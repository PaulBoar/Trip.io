import React from 'react';
import classes from './Places.module.css';

import GoldenGate from '../assets/images/golden-gate.jpg';
import GoldenGateStatue from '../assets/images/golden-gate-statue.jpg.webp';
import Motherland from '../assets/images/Motherland.jpg';
import Motherland2 from '../assets/images/Motherland2.jpg';
import PlacesData from './PlacesData';

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
				heading='The Motherland Monument'
				text='This statue, located in Victory Park, commemorates the Soviet victory over Nazi Germany and is a focal point in Kiev. Take a walk around the grounds and admire the views overlooking the Dnieper river.
      Inside, visitors will find the Museum of the Great Patriotic War, opened in 1995 at the base of the statue. Thousands of visitors have flocked here to observe and view World War II memorabilia, from weapons to battle dioramas.
      
      This giant titanium statue is taller than the Statue of Liberty. There is a viewing platform that can be reached by elevator, but only with a guide. When you are here, be sure to check out the Hall of Glory and the Hall of Remembrance and Sorrow, a sober reminder of those who lost their lives.'
				img1={Motherland}
				img2={Motherland2}
			/>
			<PlacesData
				heading='Golden Gate'
				text='The Golden Gate of Kyiv was the main gate in the 11th century fortifications of Kiev, the capital of Kievan Rus. It was named in imitation of the Golden Gate of Constantinople. The structure was dismantled in the Middle Ages, leaving few vestiges of its existence.Located on the south side of the city, the gates formed one of three entrance gateways to Kiev constructed in the first half of the 11th century by Yaroslav the Wise. They were a considerable achievement in fortifying Kievan Rus.'
				img1={GoldenGate}
				img2={GoldenGateStatue}
			/>
		</div>
	);
}

export default Places;
