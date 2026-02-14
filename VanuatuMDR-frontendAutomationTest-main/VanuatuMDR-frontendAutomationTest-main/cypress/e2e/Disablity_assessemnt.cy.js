import 'C:/MDR/cypress/support/Function.js'
describe('Disabilty assessment', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearLocalStorage()
    })
    it('Add/Edit - Disabilty assessment', () => {
        cy.Login_web('function calling')
        cy.intercept('GET', 'https://fhir.api.thelattice.org/test/api/v1/address/map').as('text')
        cy.get('.mat-list-item-content').eq(1).click()
        cy.wait('@text')
        cy.get('.mat-input-element').type('Lkjarbht').wait(1000)//Enter patient name
        cy.get('.mat-row > .cdk-column-patientsName').click().wait(1000)
        cy.get('.card-header').find('.mat-button-wrapper').should('contains.text', 'VIEW DETAILS')
        cy.contains('START').then(($button1) => {
            if ($button1.is(':disabled')) {
                cy.get('.date-card').first().click()
                cy.contains('EDIT').then(($button2) => {
                    if ($button2.is(':disabled')) {
                        cy.contains('EDIT').should('be.disabled')
                        cy.get('.card-header').find('.mat-icon').click()
                        cy.get('.card-header').find('.mat-button-wrapper').should('contains.text', 'VIEW DETAILS')
                    }
                    else {
                        cy.contains('EDIT').should('be.enabled').click()
                        cy.get('body').find('.mat-display-3').should('contain.text', 'Disability assessment')
                        cy.contains('SAVE').should('be.enabled').click()
                        cy.get('.mat-simple-snackbar').should('have.text', 'Disability assessment data updated')
                        cy.contains('EDIT').click()
                        cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(0).click()
                        cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(0).click()
                        cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(0).click()
                        cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(0).click()
                        cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(0).click()
                        cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(0).click()
                        cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(1).click()
                        cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(1).click()
                        cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(1).click()
                        cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(1).click()
                        cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(1).click()
                        cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(1).click()
                        cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(2).click()
                        cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(2).click()
                        cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(2).click()
                        cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(2).click()
                        cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(2).click()
                        cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(2).click()
                        cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(3).click()
                        cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(3).click()
                        cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(3).click()
                        cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(3).click()
                        cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(3).click()
                        cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(3).click()    
                        cy.Randomnumber1().then((randomNumber) => {
                            cy.get('.mat-radio-label').eq(randomNumber).click()
                        })
                        cy.Randomnumber2().then((randomNumber) => {
                            cy.get('.mat-radio-label').eq(randomNumber).click()
                        })
                        cy.Randomnumber3().then((randomNumber) => {
                            cy.get('.mat-radio-label').eq(randomNumber).click()
                        })
                        cy.Randomnumber4().then((randomNumber) => {
                            cy.get('.mat-radio-label').eq(randomNumber).click()
                        })
                        cy.Randomnumber5().then((randomNumber) => {
                            cy.get('.mat-radio-label').eq(randomNumber).click()
                        })
                        cy.Randomnumber6().then((randomNumber) => {
                            cy.get('.mat-radio-label').eq(randomNumber).click()
                        })
                        cy.contains('SAVE').should('be.enabled').click()
                        cy.get('.mat-simple-snackbar').should('have.text', 'Disability assessment data updated')
                    }
                })
            }
            else{
                    cy.contains('START').click()
                    cy.get('body').find('.mat-display-3').should('contain.text', 'Disability assessment')
                    cy.get('.card-header').find('.mat-icon').click()
                    cy.get('.card-header').find('.mat-button-wrapper').should('contains.text', 'VIEW DETAILS')
                    cy.contains('START').click()
                    cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(0).click()
                    cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(0).click()
                    cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(0).click()
                    cy.contains('SAVE').should('be.disabled')
                    cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(0).click()
                    cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(0).click()
                    cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(0).click()
                    cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(1).click()
                    cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(1).click()
                    cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(1).click()
                    cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(1).click()
                    cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(1).click()
                    cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(1).click()
                    cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(2).click()
                    cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(2).click()
                    cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(2).click()
                    cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(2).click()
                    cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(2).click()
                    cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(2).click()
                    cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(3).click()
                    cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(3).click()
                    cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(3).click()
                    cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(3).click()
                    cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(3).click()
                    cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(3).click()
                    cy.Randomnumber1().then((randomNumber) => {
                        cy.get('.mat-radio-label').eq(randomNumber).click()
                    })
                    cy.Randomnumber2().then((randomNumber) => {
                        cy.get('.mat-radio-label').eq(randomNumber).click()
                    })
                    cy.Randomnumber3().then((randomNumber) => {
                        cy.get('.mat-radio-label').eq(randomNumber).click()
                    })
                    cy.Randomnumber4().then((randomNumber) => {
                        cy.get('.mat-radio-label').eq(randomNumber).click()
                    })

                    cy.Randomnumber5().then((randomNumber) => {
                        cy.get('.mat-radio-label').eq(randomNumber).click()
                    })
                    cy.Randomnumber6().then((randomNumber) => {
                        cy.get('.mat-radio-label').eq(randomNumber).click()
                    })
                    cy.contains('SAVE').should('be.enabled').click()
                    cy.get('.mat-simple-snackbar').should('have.text', 'Disability assessment data saved')
                }
            })
    })
})
