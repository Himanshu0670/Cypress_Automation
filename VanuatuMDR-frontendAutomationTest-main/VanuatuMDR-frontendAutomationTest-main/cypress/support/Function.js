Cypress.Commands.add('Login_web', () => {
    var text = "";
    cy.get('.mat-form-field').type(Cypress.env('Mobile_Num'))
    cy.contains('VERIFY').should('be.enabled').click()
    cy.get('.mat-form-field').type(Cypress.env('Password'))
    cy.intercept('GET', 'https://mdr.test.thelattice.org/fhir/Organization?_count=200&_elements=_id,name').as('text')
    cy.contains('VERIFY').should('be.enabled').click()
    cy.wait('@text')
    cy.get('.mat-simple-snackbar').should('be.exist').and('have.text', 'Logged in successfully')
})

Cypress.Commands.add('Login_web_HealthcarePro', () => {
        cy.get('.mat-form-field').type('333333')
        cy.contains('VERIFY').should('be.enabled').click()
        cy.get('.mat-form-field').type('Pass@123')
        cy.intercept('GET', 'https://fhir.api.thelattice.org/test/api/v1/address/map').as('text')
        cy.contains('VERIFY').should('be.enabled').click()
        cy.get('.mat-simple-snackbar').should('be.exist').and('have.text', 'Logged in successfully')
        cy.wait('@text')

})



Cypress.Commands.add('Randomnumber1',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 0;
      const max = 3;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})
Cypress.Commands.add('Randomnumber2',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 4;
      const max = 7;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})
Cypress.Commands.add('Randomnumber3',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 8;
      const max = 11;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})
Cypress.Commands.add('Randomnumber4',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 12;
      const max = 15;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})
Cypress.Commands.add('Randomnumber5',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 16;
      const max = 19;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})
Cypress.Commands.add('Randomnumber6',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 20;
      const max = 23;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})


// Function for Allied Health Referral
Cypress.Commands.add('Health',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 38;
      const max = 42;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})


// Function for Allied health assessment module - (Functional assessment)

Cypress.Commands.add('Random1',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 0;
      const max = 1;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})
Cypress.Commands.add('Random2',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 0;
      const max = 2;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})
Cypress.Commands.add('Random3',() =>{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const min = 0;
      const max = 4;
       const randomNumber = getRandomInt(min, max);
       return randomNumber;
})