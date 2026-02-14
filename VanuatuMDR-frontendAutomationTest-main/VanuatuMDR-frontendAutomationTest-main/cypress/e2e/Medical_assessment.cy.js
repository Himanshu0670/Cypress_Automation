import 'C:/MDR/cypress/support/Function.js'
describe('Medical assessment', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearLocalStorage()
    })
    it('Add/Edit - Medical assessment', () => {
        cy.Login_web('function calling')
        cy.intercept('GET', 'https://fhir.api.thelattice.org/test/api/v1/address/map').as('text')
        cy.get('.mat-list-item-content').eq(1).click()
        cy.wait('@text')
        cy.get('.mat-input-element').type('Testing').wait(1000)//Enter patient name
        cy.get('.mat-row > .cdk-column-patientsName').click().wait(1000)
        cy.get('.mat-card-content').then(($body) => {
            if ($body.text().includes('Medical assessment')) {
                cy.log('Disability assessment is recorded')
            } else {
                cy.log('Disability assessment is not recorded ')
                }
          })
          cy.get('.assessment-header-1').then(($body) => {
            if ($body.text().includes('ADD ')) {
                cy.contains('ADD').click()
                cy.get('.mat-display-3').should('have.text', ' Medical assessment ')
                //General Medical Conditions
                cy.get('.mat-display-4').eq(0).should('have.text', ' General Medical Conditions ')
                cy.get('.card-header').find('mat-icon').click().wait(1000)
                cy.get('.card-header').find('.mat-button-wrapper').should('contains.text','VIEW DETAILS') 
                cy.contains('ADD').click()
                cy.contains('NEXT').should('be.enabled')
                cy.get('.mat-checkbox').contains('Diabetes').click()
                cy.get('.mat-checkbox').contains('Other').click()
                cy.get('.card-content').find('.mat-form-field').should('exist')
                cy.contains('NEXT').should('be.disabled')
                cy.get('input[formcontrolname="genOther"]').type('A while backed I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to so on my')
                cy.get('input[formcontrolname="genOther"]').should('have.value','A while backed I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to so on m')
                for (let i = 0; i < 5; i++) {
                    let diasease = Math.floor(Math.random() * 37);
                    cy.get('.mat-checkbox').eq(diasease).click()
                }
                cy.contains('NEXT').should('be.enabled').click()
                //Onset of Disability
                let disability = Math.floor(Math.random() * 4);
                cy.get('.mat-display-4').eq(1).should('have.text', ' Onset of Disability ')
                cy.contains('NEXT').should('be.enabled')
                cy.contains('BACK').click()
                cy.get('.mat-display-4').eq(0).should('have.text', ' General Medical Conditions ')
                cy.contains('NEXT').click()
                cy.contains('NEXT').should('be.enabled')
                cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-button').eq(disability).click()
                cy.get('.mat-form-field').eq(1).type('Not description provided')
                cy.get('.stepper-second-footer > .mat-stepper-next').should('have.text', 'NEXT').and('be.enabled').click()
                //Allied Health Referral
                cy.get('.mat-display-4').eq(2).should('have.text', ' Allied Health Referral ')
                cy.get(' .stepper-second-footer > .mat-stepper-previous').eq(1).click()
                cy.get('.mat-display-4').eq(1).should('have.text', ' Onset of Disability ')
                cy.get('.stepper-second-footer > .mat-stepper-next').should('have.text', 'NEXT').click()
                cy.contains('SAVE').should('be.enabled')
                cy.get('.card-content').eq(2).find('.mat-checkbox').then(($allied) => {
                    cy.get($allied).contains('Mobility assessment ').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-checkbox').should('be.exist')
                    cy.get($allied).contains('Mobility assessment ').click()
                    cy.get('body').find('.example-section > .ng-star-inserted').should('not.exist')
                    cy.get($allied).contains('Visual iassessment ').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-checkbox').should('be.exist')
                    cy.get($allied).contains('Visual iassessment ').click()
                    cy.get('body').find('.example-section > .ng-star-inserted').should('not.exist')
                    cy.get($allied).contains('Auditory assessment ').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-checkbox').should('be.exist')
                    cy.get($allied).contains('Auditory assessment ').click()
                    cy.get('body').find('.example-section > .ng-star-inserted').should('not.exist')
                    cy.get($allied).contains('Communication assessment ').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-checkbox').should('be.exist')
                    cy.get($allied).contains('Communication assessment ').click()
                    cy.get('body').find('.example-section > .ng-star-inserted').should('not.exist')
                    cy.get($allied).contains('Self- care assessment ').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-checkbox').should('be.exist')
                    cy.get($allied).contains('Self- care assessment ').click()
                    cy.get('body').find('.example-section > .ng-star-inserted').should('not.exist')
                    cy.get($allied).contains('Other assessment').click()
                    cy.get('.example-section > .ng-star-inserted').find('input[formcontrolname="otherImpariment"]').should('be.exist')
                    cy.get($allied).contains('Other assessment').click()
                    cy.get('body').find('.example-section > .ng-star-inserted').should('not.exist').wait(1000)
                    cy.get($allied).contains('Mobility assessment ').click()
                    cy.get('.example-section > .ng-star-inserted').contains('Other').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-form-field').should('be.exist')
                    cy.get($allied).contains('Mobility assessment ').click()
                    cy.get($allied).contains('Visual iassessment ').click()
                    cy.get('.example-section > .ng-star-inserted').contains('Other').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-form-field').should('be.exist')
                    cy.get($allied).contains('Visual iassessment ').click()
                    cy.get($allied).contains('Auditory assessment ').click()
                    cy.get('.example-section > .ng-star-inserted').contains('Other').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-form-field').should('be.exist')
                    cy.get($allied).contains('Auditory assessment ').click()
                    cy.get($allied).contains('Communication assessment ').click()
                    cy.get('.example-section > .ng-star-inserted').contains('Other').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-form-field').should('be.exist')
                    cy.get($allied).contains('Communication assessment ').click()
                    cy.get($allied).contains('Self- care assessment ').click()
                    cy.get('.example-section > .ng-star-inserted').contains('Other').click()
                    cy.get('.example-section > .ng-star-inserted').find('.mat-form-field').should('be.exist')
                    cy.contains('SAVE').should('be.disabled')
                    cy.get('input[formcontrolname="otherSelf"]').type('A while backed I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to so on my')
                    cy.get('input[formcontrolname="otherSelf"]').should('have.value','A while backed I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to so on m')  
                    cy.get($allied).contains('Self- care assessment ').click()
                })
                cy.Health().then((randomNumber) => {
                    cy.get('.mat-checkbox').eq(randomNumber).click()
                    cy.contains('SAVE').should('be.disabled')
                })
                cy.get('.example-section > .ng-star-inserted').find('.mat-checkbox').should('be.exist')
                cy.get('.example-section > .ng-star-inserted').find('.mat-checkbox').eq(0).click()
                cy.get('.example-section > .ng-star-inserted').find('.mat-checkbox').eq(1).click()
                cy.get('.stepper-second-footer > .mat-raised-button').eq(1).should('have.text', ' SAVE').and('be.visible')//.click()
                //cy.get('.mat-simple-snackbar').should('have.text', 'Medical assessment data saved')
            }
            else {
                cy.get('.assessment-header-1').eq(1).contains('UPDATE').click()
                cy.get('.card-header').find('.mat-icon').click()
                cy.get('.card-header').find('.mat-button-wrapper').should('contains.text', 'VIEW DETAILS')
                cy.get('.assessment-header-1').eq(1).contains('UPDATE').click()
                cy.contains('EDIT').click()
                cy.get('.mat-display-3').should('have.text', ' Medical assessment ').wait(1000)
                cy.get('.card-header').find('.mat-icon').click()
                cy.get('.mat-card').find('.preview-header').should('exist')
                cy.contains('EDIT').click().wait(1000)
                //General Medical Conditions
                cy.get('input[type="checkbox"]:visible').each(($checkbox) => {
                    if ($checkbox.prop('checked')) {
                        cy.wrap($checkbox).uncheck({ force: true });
                    }
                }).wait(1000);
                cy.contains('NEXT').should('be.enabled')
                cy.get('.mat-checkbox').contains('Diabetes').click()
                cy.get('.mat-checkbox').contains('Other').click()
                cy.get('.card-content').find('.mat-form-field').should('exist')
                cy.contains('NEXT').should('be.disabled')
                cy.get('input[formcontrolname="genOther"]').type('A while backed I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to so on my')
                cy.get('input[formcontrolname="genOther"]').should('have.value','A while backed I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to so on m')
                cy.get('.mat-display-4').eq(0).should('have.text', ' General Medical Conditions ')
                for (let i = 0; i < 5; i++) {
                    let diasease = Math.floor(Math.random() * 37);
                    cy.get('.mat-checkbox').eq(diasease).click()
                }
                cy.contains('NEXT').should('be.enabled').click()    
                //Onset of Disability
                cy.get('.card-header').find('.mat-icon').click().wait(600)
                cy.get('.mat-card').find('.preview-header').should('exist')
                cy.get('.med-edit-button').eq(1).click()
                cy.get('.stepper-second-footer > .mat-stepper-next').should('have.text', 'NEXT').and('be.enabled')
                cy.get('.mat-display-4').eq(1).should('have.text', ' Onset of Disability ')
                cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(1).click()
                let disability = Math.floor(Math.random() * 4);
                cy.get('.mat-radio-button').eq(disability).click()
                cy.get('.card-content').eq(1).find('.mat-form-field').then(($input) => {
                    const number = $input.length
                    cy.log(number)
                    if (number > 1) {
                        cy.get('.stepper-second-footer > .mat-stepper-next').should('have.text', 'NEXT').and('be.enabled').click().wait(1000)
                    } else {
                        cy.get('.mat-form-field').type('{selectall}{backspace}').type('Not description provided')
                        cy.get('.stepper-second-footer > .mat-stepper-next').should('have.text', 'NEXT').and('be.enabled').click().wait(1000)
                    }
                })
        //Allied Health Referral
            cy.get('.card-header').find('.mat-icon').click().wait(600)
            cy.get('.mat-card').find('.preview-header').should('exist')
            cy.get('.med-edit-button').eq(2).click()
            cy.get('.mat-display-4').eq(1).should('have.text', ' Onset of Disability ')
            cy.contains('SAVE').should('be.enabled').click()
            cy.get('.mat-simple-snackbar').should('have.text', 'Medical assessment data updated')
            }
        })

    })
})