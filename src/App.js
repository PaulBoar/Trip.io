import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Quiz from './routes/Quiz';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/about' element={<About/>} />
				<Route path='/quiz' element={<Quiz/>} />
				<Route path='/contact' element={<Contact/>} />
				<Route path='*' element={<NotFound />}/>
			</Routes>
		</div>
	);
}

export default App;
