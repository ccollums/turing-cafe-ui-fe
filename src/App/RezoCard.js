import React from 'react';
import './RezoCard.css';

const RezoCard = ({ name, date, time, number, id, deleteRezo }) => {

	return (
		<section className='card'>
			<h2>{name}</h2>
			<p>{date}</p>
			<p>{time} pm</p>
			<p>Number of Guests:{number}</p>
			<button className='cancel-button' onClick={() => deleteRezo(id)}>Cancel</button>
		</section>
	)
}


export default RezoCard;