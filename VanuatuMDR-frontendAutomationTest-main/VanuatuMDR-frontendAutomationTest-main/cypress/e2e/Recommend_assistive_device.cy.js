import 'C:/MDR/cypress/support/Function.js'
describe('Recommend assistive device(s)', () => {

    let text = 'A while backed I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to so on my'
    beforeEach(() => {
        cy.visit('/')
        cy.clearLocalStorage()
    })
    it('Add /Update - Assistive devices', () => {
        cy.Login_web('function calling')
        cy.intercept('GET', 'https://fhir.api.thelattice.org/test/api/v1/address/map').as('text')
        cy.get('.mat-list-item-content').eq(1).click()
        cy.wait('@text')
        cy.get('.mat-input-element').type('Tes').wait(200).type('t').wait(200).type('i').wait(500)//Enter patient name
        cy.get('.mat-row > .cdk-column-patientsName').click().wait(1000)
        
        cy.get('.mat-card-content').then(($element) => {
            if ($element.text().includes('RECOMMEND')) {
                cy.log("Correctly working");
                cy.get('.mat-button-wrapper').eq(6).should('have.text','RECOMMEND')
                cy.contains('RECOMMEND').click()
                cy.get('.card-header').should('contain.text','Recommend assistive device(s)')
                cy.get('.example-section').find('.mat-checkbox').should('exist')
                cy.get('.mat-checkbox-label').eq(0).click()
                cy.get('.mat-form-field').type('Invalid')
                cy.get('.card-content').should('have.text',' No matches found ')
                cy.get('.mat-form-field-flex').find('.mat-icon').eq(1).click()                
                cy.get('.mat-form-field').type('Foot brace')
                cy.get('.example-section').find('.mat-checkbox').should('exist')
                cy.get('.mat-checkbox-label').eq(0).click()
                cy.get('.mat-form-field-flex').find('.mat-icon').eq(1).click()
                cy.get('.mat-checkbox-label').eq(1).click()
                cy.get('.example-section').find('.mat-radio-label').should('exist')
                cy.get('.mat-radio-label').eq(2).click()
                cy.get('.mat-form-field').eq(1).should('contain.text','Please specify')
                cy.contains('SAVE').should('be.disabled')
                cy.get('.mat-form-field').eq(1).type(text)
                cy.get('.mat-input-element').eq(1).should('have.value','A while backed I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to so on m')                
                cy.get('.mat-radio-label').eq(0).click()
                cy.get('.mat-subtitle-1').should('have.text','Floor to wrist, in mm ')
                cy.get('.mat-form-field').eq(1).should('have.text','Left arm')
                cy.get('.mat-form-field').eq(2).should('have.text','Right arm')
                cy.contains('SAVE').should('be.enabled')
                cy.get('.mat-form-field').eq(1).type('500')
                cy.get('.mat-input-element').eq(1).should('have.value','500')
                cy.get('.mat-form-field').eq(2).type('500')
                cy.get('.mat-input-element').eq(2).should('have.value','500')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('2W1')
                cy.get('.mat-input-element').eq(2).should('have.value','21')
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('1600')
                cy.get('.error-hint').eq(0).should('have.text',' Range 401 to 1399 (mm) ')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('1600')
                cy.get('.error-hint').eq(1).should('have.text',' Range 401 to 1399 (mm) ')
                cy.get('.mat-checkbox-label').eq(1).click()
                cy.get('.mat-checkbox-label').eq(2).click()
                cy.get('.example-section').find('.mat-radio-label').should('exist')
                cy.get('input[type="radio"]').each(($radio) => {
                    const radioValue = $radio.val();
                    cy.log(radioValue)
                    if(radioValue === 'forearm'){

                        expect(radioValue).to.equal('forearm');
                    }
                    else if(radioValue === 'underarm'){

                        expect(radioValue).to.equal('underarm');
                    }
                    else if(radioValue === 'adult'){

                        expect(radioValue).to.equal('adult');
                    }
                    else{
                        expect(radioValue).to.equal('child');
                    }
                  });
                cy.contains('SAVE').should('be.disabled')
                cy.get('.mat-radio-label').eq(3).click()
                cy.contains('SAVE').should('be.disabled')
                cy.get('.mat-radio-label').eq(0).click()
                cy.get('.mat-form-field').eq(1).should('have.text','Left arm')
                cy.get('.mat-form-field').eq(2).should('have.text','Right arm')
            //  cy.contains('SAVE').should('be.enabled') //Uncommented once issue is fixed
                cy.get('.mat-form-field').eq(1).type('500')
                cy.get('.mat-input-element').eq(1).should('have.value','500')
                cy.get('.mat-form-field').eq(2).type('500')
                cy.get('.mat-input-element').eq(2).should('have.value','500')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('2W1')
                cy.get('.mat-input-element').eq(2).should('have.value','21')
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('1600')
                cy.get('.error-hint').eq(0).should('have.text',' Range 401 to 1399 (mm) ')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('1600')
                cy.get('.error-hint').eq(1).should('have.text',' Range 401 to 1399 (mm) ')
                cy.get('.mat-radio-label').eq(1).click()
            //  cy.contains('SAVE').should('be.enabled')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('700')
                cy.get('.mat-input-element').eq(2).should('have.value','700')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('Z823')
                cy.get('.mat-input-element').eq(2).should('have.value','823')
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('2000')
                cy.get('.error-hint').eq(0).should('have.text',' Range 601 to 1799 (mm) ')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('2000')
                cy.get('.error-hint').eq(1).should('have.text',' Range 601 to 1799 (mm) ')
                cy.get('.mat-checkbox-label').eq(2).click()
                cy.get('.mat-form-field').type('Walking frame')
                cy.get('.mat-checkbox-label').click()
                cy.get('input[type="radio"]').each(($radio) => {
                    const radioValue = $radio.val();
                    cy.log(radioValue)
                    if(radioValue === 'folding'){

                        expect(radioValue).to.equal('folding');
                    }
                    else if(radioValue === 'reciprocal'){

                        expect(radioValue).to.equal('reciprocal');
                    }
                    else if(radioValue === 'adult'){

                        expect(radioValue).to.equal('adult');
                    }
                    else{
                        expect(radioValue).to.equal('junior');
                    }
                  });
                cy.contains('SAVE').should('be.disabled')
                cy.get('.card-header').find('.mat-icon').click()
                cy.get('.card-header').find('.mat-button-wrapper').should('contains.text', 'VIEW DETAILS')
                cy.contains('RECOMMEND').click()
                cy.contains('add').click()
                cy.get('.mat-form-field').eq(1).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-input-element').eq(1).should('have.value','World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu') 
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('Device_1')
                cy.contains('DONE').click()
                cy.contains('add').click()
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('Device_1')
                cy.contains('DONE').click()
                cy.get('.mat-simple-snackbar').should('have.text', 'Device already exists in the list')
                cy.contains('CANCEL').click()
                cy.contains('delete').click()
                cy.get('.mat-checkbox-label').contains('Wheelchair').click()
                cy.contains('SAVE').should('be.enabled')//.click()
                //cy.get('.mat-simple-snackbar').should('have.text', 'Recommended assistive device data saved')
            }
            else{
                cy.get('#assisstive-device-card > .assessment-header').should('contain.text','UPDATE').click()
                cy.get('#assisstive-device-card > .assessment-header').contains('UPDATE').click()
                cy.get('.card-header').should('contain.text','Recommend assistive device(s)')
                cy.get('.card-header').find('.mat-icon').click()
                cy.get('.card-header').find('.mat-button-wrapper').should('contains.text', 'VIEW DETAILS')
                cy.get('#assisstive-device-card > .assessment-header').contains('UPDATE').click()
                cy.get('input[type="checkbox"]:visible').each(($checkbox) => {
                    if ($checkbox.prop('aria-checked', 'true')) {
                        cy.log('Checkbox is checked')
                        cy.wrap($checkbox).uncheck({ force: true }).wait(1500);
                    }
                    else{
                        cy.log('Checkbox is unchecked')
                    }
                });
                cy.get('.example-section').find('.mat-checkbox').should('exist')
                cy.get('.mat-checkbox-label').eq(0).click()
                cy.get('.mat-form-field').type('Invalid')
                cy.get('.card-content').should('have.text',' No matches found ')
                cy.get('.mat-form-field-flex').find('.mat-icon').eq(1).click()                
                cy.get('.mat-form-field').type('Foot brace')
                cy.get('.example-section').find('.mat-checkbox').should('exist')
                cy.get('.mat-checkbox-label').eq(0).click()
                cy.get('.mat-form-field-flex').find('.mat-icon').eq(1).click()
                cy.get('.mat-checkbox-label').eq(1).click()
                cy.get('.example-section').find('.mat-radio-label').should('exist')
                cy.get('.mat-radio-label').eq(2).click()
                cy.get('.mat-form-field').eq(1).should('contain.text','Please specify')
                cy.contains('SAVE').should('be.disabled')
                cy.get('.mat-form-field').eq(1).type(text)
                cy.get('.mat-input-element').eq(1).should('have.value','A while backed I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, I could not think of a quick way to so on m')                
                cy.get('.mat-radio-label').eq(0).click()
                cy.get('.mat-subtitle-1').should('have.text','Floor to wrist, in mm ')
                cy.get('.mat-form-field').eq(1).should('have.text','Left arm')
                cy.get('.mat-form-field').eq(2).should('have.text','Right arm')
                cy.contains('SAVE').should('be.enabled')
                cy.get('.mat-form-field').eq(1).type('500')
                cy.get('.mat-input-element').eq(1).should('have.value','500')
                cy.get('.mat-form-field').eq(2).type('500')
                cy.get('.mat-input-element').eq(2).should('have.value','500')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('2W1')
                cy.get('.mat-input-element').eq(2).should('have.value','21')
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('1600')
                cy.get('.error-hint').eq(0).should('have.text',' Range 401 to 1399 (mm) ')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('1600')
                cy.get('.error-hint').eq(1).should('have.text',' Range 401 to 1399 (mm) ')
                cy.get('.mat-checkbox-label').eq(1).click()
                cy.get('.mat-checkbox-label').eq(2).click()
                cy.get('.example-section').find('.mat-radio-label').should('exist')
                cy.get('input[type="radio"]').each(($radio) => {
                    const radioValue = $radio.val();
                    cy.log(radioValue)
                    if(radioValue === 'forearm'){

                        expect(radioValue).to.equal('forearm');
                    }
                    else if(radioValue === 'underarm'){

                        expect(radioValue).to.equal('underarm');
                    }
                    else if(radioValue === 'adult'){

                        expect(radioValue).to.equal('adult');
                    }
                    else{
                        expect(radioValue).to.equal('child');
                    }
                  });
                cy.contains('SAVE').should('be.disabled')
                cy.get('.mat-radio-label').eq(3).click()
                cy.contains('SAVE').should('be.disabled')
                cy.get('.mat-radio-label').eq(0).click()
                cy.get('.mat-form-field').eq(1).should('have.text','Left arm')
                cy.get('.mat-form-field').eq(2).should('have.text','Right arm')
            //  cy.contains('SAVE').should('be.enabled') //Uncommented once issue is fixed
                cy.get('.mat-form-field').eq(1).type('500')
                cy.get('.mat-input-element').eq(1).should('have.value','500')
                cy.get('.mat-form-field').eq(2).type('500')
                cy.get('.mat-input-element').eq(2).should('have.value','500')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('2W1')
                cy.get('.mat-input-element').eq(2).should('have.value','21')
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('1600')
                cy.get('.error-hint').eq(0).should('have.text',' Range 401 to 1399 (mm) ')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('1600')
                cy.get('.error-hint').eq(1).should('have.text',' Range 401 to 1399 (mm) ')
                cy.get('.mat-radio-label').eq(1).click()
            //  cy.contains('SAVE').should('be.enabled')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('700')
                cy.get('.mat-input-element').eq(2).should('have.value','700')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('Z823')
                cy.get('.mat-input-element').eq(2).should('have.value','823')
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('2000')
                cy.get('.error-hint').eq(0).should('have.text',' Range 601 to 1799 (mm) ')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}').type('2000')
                cy.get('.error-hint').eq(1).should('have.text',' Range 601 to 1799 (mm) ')
                cy.get('.mat-checkbox-label').eq(2).click()
                cy.get('.mat-form-field').type('Walking frame')
                cy.get('.mat-checkbox-label').click()
                cy.get('input[type="radio"]').each(($radio) => {
                    const radioValue = $radio.val();
                    cy.log(radioValue)
                    if(radioValue === 'folding'){

                        expect(radioValue).to.equal('folding');
                    }
                    else if(radioValue === 'reciprocal'){

                        expect(radioValue).to.equal('reciprocal');
                    }
                    else if(radioValue === 'adult'){

                        expect(radioValue).to.equal('adult');
                    }
                    else{
                        expect(radioValue).to.equal('junior');
                    }
                  });
                cy.get('.mat-form-field-flex').find('.mat-icon').eq(1).click()  
                cy.contains('SAVE').should('be.disabled')
                cy.contains('add').click()
                cy.get('.mat-form-field').eq(1).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-input-element').eq(1).should('have.value','World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu') 
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('Device_1')
                cy.contains('DONE').click()
                cy.contains('add').click()
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}').type('Device_1')
                cy.contains('DONE').click()
                cy.get('.mat-simple-snackbar').should('have.text', 'Device already exists in the list')
                cy.contains('CANCEL').click()
                cy.contains('delete').click()
                cy.get('.mat-checkbox-label').contains('Wheelchair').click()
            //  cy.contains('SAVE').should('be.enabled') //Uncommented once issue is fixed
                cy.get('.mat-simple-snackbar').should('have.text', 'Recommended assistive device data updated')
            }
        })

    })
})