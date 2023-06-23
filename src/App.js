//Package imports
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

//Component Imports

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { ApartmentsDetails } from './components/ApartmentDetails';
import { ApartmentsList } from './components/ApartmentsList';
import { CreateApartment } from './components/CreateApartment';

// Bootstrap Imports
import './App.css';

function App() {
	const [apartments, setApartments] = useState([]);

	return (
		<div className="App">
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route
					path="/apartments"
					element={
						<ApartmentsList
							apartments={apartments}
							setApartments={setApartments}
						/>
					}
				/>
				<Route path="/apartments/:id" element={<ApartmentsDetails />} />
				<Route path="/apartments/create" element={<CreateApartment />} />
			</Routes>
		</div>
	);
}

export default App;
