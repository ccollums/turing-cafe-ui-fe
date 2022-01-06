import React from 'react';
import './Reservations.css'
import RezoCard from './RezoCard.js'

const Reservations = ({ rezos, deleteRezo }) => {
	
	const rezoCards = rezos.map(rezo => {
    return (
      <RezoCard
        name={rezo.name}
        date={rezo.date}
        time={rezo.time}
				number={rezo.number}
				id={rezo.id}
        key={rezo.id}
        deleteRezo={deleteRezo}
      />
    )
  })
	
	return (
		<div className='rezo-container'>
			{rezoCards}
		</div>
	)

}


export default Reservations;