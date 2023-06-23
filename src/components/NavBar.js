import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function NavBar() {
	return (
		<>
			<NavLink to={'/'}>
				<Button className="m-2" variant="primary">
					Home
				</Button>
			</NavLink>
			<NavLink to={'/apartments'}>
				<Button className="m-2" variant="primary">
					Apartment List
				</Button>
			</NavLink>
			<NavLink to={'/apartments/create'}>
				<Button className="m-2" variant="primary">
					Create Apartment
				</Button>
			</NavLink>
		</>
	);
}
