describe('Turing Cafe Reservations', () => {

	beforeEach(() => {
		cy.intercept('http://localhost:3001/api/v1/reservations', [{
			"id": 1,
			"name": "Christie",
			"date": "12/29",
			"time": "7:00",
			"number": 12
			},
			{
			"id": 2,
			"name": "Leta",
			"date": "4/5",
			"time": "7:00",
			"number": 2
			},
			{
			"id": 3,
			"name": "Pam",
			"date": "1/21",
			"time": "6:00",
			"number": 4
			}])
		cy.visit('http://localhost:3000/')
	});

	it('should be able to visit the site and render the correct elements', () => {
		cy.contains('Turing Cafe Reservations')
		.get('.card')
		.should('have.length', 3)
		cy.contains('Christie')
		cy.contains('Leta')
		cy.contains('Pam')
		cy.contains('Cancel')
		cy.contains('Make Reservation')
	})

	it('should be able to select each input and fill them in with corresponding values', () => {
		cy.get('input[name = "name"]')
			.type('Carly')
			.should('have.value', 'Carly')
			.get('input[name = "date"]')
			.type('04/04')
			.should('have.value', '04/04')
			.get('input[name = "time"]')
			.type('6:00')
			.should('have.value', '6:00')
			.get('input[name = "guests"]')
			.type('4')
			.should('have.value', '4')
	})

	it('should be able to create a reservation after filling out input fields', () => {
		cy.get('input[name = "name"]')
			.type('Carly')
			.should('have.value', 'Carly')
			.get('input[name = "date"]')
			.type('04/04')
			.should('have.value', '04/04')
			.get('input[name = "time"]')
			.type('6:00')
			.should('have.value', '6:00')
			.get('input[name = "guests"]')
			.type('4')
			.should('have.value', '4')
			cy.get('.rezo-button').click()
			cy.contains('Carly')
			cy.contains('04/04')
			cy.contains('6:00')
			cy.contains('4')
	})
})