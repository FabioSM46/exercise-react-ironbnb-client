import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

export function ApartmentsDetails() {
	const { id } = useParams();
	console.log(id);
	const [apartment, setApartment] = useState([]);

	useEffect(() => {
		const getApartmentById = async (id) => {
			try {
				const response = await axios.get(
					process.env.REACT_APP_API_URL + `/apartments/${id}`
				);
				console.log(response);
				setApartment(response.data);
			} catch (error) {
				console.log('error: ', error);
			}
		};
		getApartmentById(id);
	}, []);

	return (
		<div className="container d-flex justify-content-center">
			<Card className="m-4" style={{ width: '18rem' }}>
				<Card.Img variant="top" src={apartment.img} />
				<Card.Body>
					<Card.Title>{apartment.title}</Card.Title>
					<Card.Text>{apartment.description}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}
