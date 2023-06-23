import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ApartmentsList(props) {
	useEffect(() => {
		const getApartments = async () => {
			try {
				const response = await axios.get(
					process.env.REACT_APP_API_URL + '/apartments'
				);
				console.log(response);
				props.setApartments(response.data);
			} catch (error) {
				console.log('error: ', error);
			}
		};
		getApartments();
	}, []);

	return (
		<section>
			{props.apartments.map((apartment, index) => (
				<div
					key={'apartment' + index}
					className="container d-flex justify-content-center"
				>
					<Card className="m-4" style={{ width: '18rem' }}>
						<Card.Img variant="top" src={apartment.img} />
						<Card.Body>
							<Card.Title>{apartment.title}</Card.Title>
							<Card.Text>{apartment.description}</Card.Text>

							<Link to={`/apartments/${apartment._id}`}>
								<Button variant="primary">Details</Button>
							</Link>
						</Card.Body>
					</Card>
				</div>
			))}
		</section>
	);
}
