import React, { useState } from 'react';
import './Form.css'

const Form = ({ addRezo }) => {
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [guests, setGuests] = useState('');

	const submitRezo = (event) => {
		event.preventDefault()
		const newRezo = {
			id: Date.now(),
			name,
			date,
			time,
			number: Number(guests)
		}
		addRezo(newRezo);
		clearInputs();
	}

	const clearInputs = () => {
		setName('');
		setDate('');
		setTime('');
		setGuests('');
	}

	return (
		<form>
			<input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
      />
			<input
        type='text'
        placeholder='Date (mm/dd)'
        name='date'
        value={date}
        onChange={event => setDate(event.target.value)}
      />
			<input
        type='text'
        placeholder='Time'
        name='time'
        value={time}
        onChange={event => setTime(event.target.value)}
      />
			<input
        type='text'
        placeholder='Number of Guests'
        name='guests'
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
      />
			<button className='rezo-button'onClick={event => submitRezo(event)}>Make Reservation</button>
			
		</form>
	)
}


export default Form;