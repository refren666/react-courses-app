import React from 'react';

import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';

const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Courses />
		</div>
	);
};

export default App;
