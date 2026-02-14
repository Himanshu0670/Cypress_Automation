import 'C:/MDR/cypress/support/Function.js'
describe('Issue assistive device(s)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearLocalStorage()
    })
    it('Issue/Remove - Issue assistive device(s)', () => {
        cy.Login_web('function calling')
        cy.intercept('GET', 'https://fhir.api.thelattice.org/test/api/v1/address/map').as('text')
        cy.get('.mat-list-item-content').eq(1).click()
        cy.wait('@text')
        cy.get('.mat-input-element').type('Nadia').wait(1000)//Enter patient name
        cy.get('.mat-row > .cdk-column-patientsName').click().wait(1000)
        cy.get('.issue-device-content').eq(1).then(($details) => {
            if ($details.text().includes('ISSUE DEVICE')) {
                cy.contains('ISSUE DEVICE').click()
                cy.get('.mat-dialog-container').should('exist')
                cy.get('.mat-dialog-container').find('.mat-h1').should('have.text',' Issue device ')
                cy.get('body').click('top')
                cy.get('.mat-dialog-container').should('exist')
                cy.get('.mat-dialog-container').contains('CANCEL').click()
                cy.get('.mat-dialog-container').should('not.exist')
                cy.contains('ISSUE DEVICE').click()
                cy.get('.mat-form-field').type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-input-element').should('have.value','World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu')
                cy.get('.mat-form-field').type('{selectall}{backspace}').type('Notes')
                cy.contains('SAVE').should('be.enabled').click()
                cy.get('.mat-simple-snackbar').should('have.text', 'Recommend assistive device(s) data saved')
            }
            else{
                cy.get('.issue-device-content').contains('VIEW DETAILS').click()
                cy.get('.mat-dialog-container').should('exist')
                cy.get('.mat-dialog-container').find('.mat-button-wrapper').then(($input) => {
                    const number = $input.length
                    cy.log(number)
                    if (number == 2) {
                        cy.contains('CLOSE').click()
                        cy.get('.mat-dialog-container').should('not.exist')
                        cy.get('.issue-device-content').contains('VIEW DETAILS').click()
                        cy.contains('REMOVE DEVICE').click()
                        cy.get('.mat-dialog-container').should('exist')
                        cy.get('.mat-dialog-container').find('.mat-h1').should('have.text',' Remove issued device ')
                        cy.contains('SAVE').should('be.disabled')
                        cy.get('.mat-form-field').type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                        cy.get('.mat-input-element').should('have.value','World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu')
                        cy.get('.mat-form-field').type('{selectall}{backspace}').type('Not required')
                        cy.contains('SAVE').click()
                        cy.get('.mat-simple-snackbar').should('have.text', 'Recommend assistive device(s) data saved')
                     }else{
                        cy.get('.mat-dialog-container').should('exist')
                        cy.get('.mat-dialog-container').find('.mat-form-field').should('have.length','1')

                    }
                })
            }
        })
    })

})
