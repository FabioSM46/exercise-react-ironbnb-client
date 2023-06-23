import { Route, Routes } from 'react-router-dom';
import './App.css';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { ApartmentsDetails } from './components/ApartmentDetails';
import { ApartmentsList } from './components/ApartmentsList';
import { CreateApartment } from './components/CreateApartment';

function App() {
	return (
		<div className="App">
			<h1>Welcome</h1>

			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/apartments" element={<ApartmentsList />} />
				<Route path="/apartments/:id" element={<ApartmentsDetails />} />
				<Route path="/apartments/create" element={<CreateApartment />} />
			</Routes>
		</div>
	);
}

export default App;
