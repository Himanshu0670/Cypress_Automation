import 'C:/MDR/cypress/support/Function.js'
describe('Allied health assessment', () => {
                const image1 = 'C:/MDR/cypress/fixtures/op1.jpg';
                const image2 = 'C:/MDR/cypress/fixtures/pexel.jpg';
                const file = 'C:/MDR/cypress/fixtures/example.json';
                
    beforeEach(() => {
        cy.visit('/')
        cy.clearLocalStorage()
    })
    it('Add/Edit - Allied health assessment', () => {
        cy.Login_web('function calling')
        cy.intercept('GET', 'https://fhir.api.thelattice.org/test/api/v1/address/map').as('text')
        cy.get('.mat-list-item-content').eq(1).click()
        cy.wait('@text')
        cy.get('.mat-input-element').type('Testing').wait(1000)//Enter patient name
        cy.get('.mat-row > .cdk-column-patientsName').click().wait(1000)
        cy.contains('FILL').then(($button) => {
            if ($button.is(':disabled')) {
                cy.get('#functional-card').find('.date-card').first().click()
                cy.get('.mat-card-content').find('.edit-button').should('exist')
                cy.get('.edit-button').eq(0).click()
                cy.get('.mat-display-4').eq(0).should('have.text',' Physical Condition ')
                cy.get('.card-header').find('mat-icon').click()
                cy.get('.edit-button').eq(1).click()
                cy.get('.mat-display-4').eq(1).should('have.text',' Lifestyle and Environment ')
                cy.get('.card-header').find('mat-icon').click()
                cy.get('.edit-button').eq(2).then(($check) => {
                    if ($check.is(':enabled')) {
                        cy.get('.edit-button').eq(2).click()
                        cy.get('.mat-display-4').eq(2).should('have.text',' Existing walking aid ')
                        cy.get('.card-header').find('mat-icon').click()        
                    }
                })
                cy.get('.edit-button').eq(3).click()
                cy.get('.mat-display-4').eq(3).should('have.text',' Mobility assessment ')
                cy.get('.card-header').find('mat-icon').click()
                cy.get('.edit-button').eq(4).click()
                cy.get('.mat-display-4').eq(4).should('have.text',' Clinical notes ')
                cy.get('.card-header').find('mat-icon').click()
                cy.get('.edit-button').eq(0).click()
            //Step 1 :- Physical condition
                cy.get('.mat-display-4').eq(0).should('have.text', ' Physical Condition ')
                cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(1).should('have.text', 'Sores on *')
                cy.get('.example-section').find('.mat-checkbox').eq(0).click()
                cy.get('.example-section').find('.mat-checkbox').eq(1).click()
                cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(1).should('have.text', 'Is this person at risk of developing a sore (foot ulcer)?* ')
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(3).should('have.text', 'Are they using it? *')
                cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(0).click()
                cy.contains('NEXT').should('be.enabled')
                cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(0).click()
                cy.contains('NEXT').should('be.enabled')
                cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-form-field').eq(0).type('{selectall}{backspace}').type('A while backed needed to count the amount letter. There were a couple of tools out there, but none of them met my standards and since I am a web designer I thought: why not do it myself and help others')
                cy.get('.mat-form-field').eq(0).type('{selectall}{backspace}')
                cy.contains('NEXT').should('be.enabled')
                cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-form-field').eq(1).type('A while backed needed to count the amount letter. There were a couple of tools out there, but none of them met my standards and since I am a web designer I thought: why not do it myself and help others')
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}')
                cy.contains('NEXT').should('be.enabled').click()
            
    //Step 2 :- Lifestyle and Environment
                cy.get('.mat-display-4').eq(1).should('have.text', ' Lifestyle and Environment ')
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).should('be.enabled')
                cy.contains('BACK').click()
                cy.get('.mat-display-4').eq(0).should('have.text', ' Physical Condition ')
                cy.contains('NEXT').click()
                cy.get('.questions').eq(8).should('have.text', 'Where will the person use their walking aid?')
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(3).click()
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(4).click()
                cy.get('.questions').eq(9).should('have.text', 'Does the person wear appropriate shoes? ')
                cy.get('.mat-radio-group').eq(7).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(7).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(10).should('have.text', 'Does the person presently use a walking aid? ')
                cy.get('.mat-radio-group').eq(8).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(8).find('.mat-radio-label').eq(1).click()
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).should('be.enabled').click()
                cy.get('.mat-display-4').eq(3).should('have.text', ' Mobility assessment ')
                cy.get('.stepper-second-footer > .mat-stepper-previous > .mat-button-wrapper').eq(2).click()
                cy.get('.mat-radio-group').eq(8).find('.mat-radio-label').eq(0).click()
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).click()
                cy.get('.mat-display-4').eq(2).should('have.text', ' Existing walking aid ')
            //Step 3 :- Existing walking aid
                cy.get('.questions').eq(11).should('have.text', "Does the walking aid meet the user's needs? ")
                cy.get('.mat-radio-group').eq(9).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(9).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(12).should('have.text', "Does the walking aid meet the user's environmental conditions? ")
                cy.get('.mat-radio-group').eq(10).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(10).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(13).should('have.text', "Does the walking aid provide postural support and stability? ")
                cy.get('.mat-radio-group').eq(11).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(11).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(14).should('have.text', "Is the walking aid safe and functioning properly? ")
                cy.get('.mat-radio-group').eq(12).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(12).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-form-field').eq(2).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}')
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(1).should('be.enabled')
                cy.get('.mat-radio-group').eq(9).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(10).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(11).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(12).find('.mat-radio-label').eq(0).click()
                cy.get('.existing-add-div').should('have.text', ' The patient may not need a new walking aid ')
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(1).should('be.enabled').click()
            //Step 4 :- Mobility assessment
                cy.get('.mat-display-4').eq(3).should('have.text', ' Mobility assessment ')
                cy.get('.questions').eq(15).should('have.text', "Stand ")
                cy.get('.mat-radio-group').eq(13).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(16).should('have.text', "Walk Inside ")
                cy.get('.mat-radio-group').eq(14).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(17).should('have.text', "Walk Outside ")
                cy.get('.mat-radio-group').eq(15).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(18).should('have.text', "Go up and down more than one step ")
                cy.get('.mat-radio-group').eq(16).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(19).should('have.text', "Stand up from a chair ")
                cy.get('.mat-radio-group').eq(17).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(13).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(14).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(15).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(16).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(17).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(13).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(14).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(15).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(16).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(17).find('.mat-radio-label').eq(2).click()
                cy.get('.questions').eq(20).should('have.text', "How far the person can walk ")
                cy.get('.mat-radio-group').eq(18).find('.mat-radio-label').eq(0).click()
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(2).should('be.enabled').click()
            //Step 5 :- Clinical notes
                cy.get('.mat-display-4').eq(4).should('have.text', ' Clinical notes ')
                cy.get('.mat-form-field').eq(2).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}')
                cy.contains('SAVE').should('be.enabled')
                cy.get('.mat-form-field').eq(3).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-form-field').eq(3).type('{selectall}{backspace}')
                cy.contains('SAVE').should('be.enabled')
                cy.get('.mat-form-field').eq(4).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-form-field').eq(4).type('{selectall}{backspace}')
                cy.contains('SAVE').should('be.enabled')
                cy.get('input[type=file]').selectFile(image1, { force: true })
                cy.get('.mat-simple-snackbar').should('have.text', 'File uploaded')
                cy.contains('delete').should('exist').click()
                cy.get('.mat-dialog-container').should('exist')
                cy.get('.mat-dialog-container').find('.mat-button-wrapper').eq(1).click().wait(1000)
                cy.get('input[type=file]').selectFile(image2, { force: true })
                cy.get('.mat-simple-snackbar').should('contain.text', 'File size exceeds 2MB').wait(1000)
                cy.get('input[type=file]').selectFile(file, { force: true })
                cy.get('.mat-simple-snackbar').should('contain.text', 'File format must be .png, .jpg, .pdf, .doc,.docx').wait(1000)
                cy.get('input[type=file]').selectFile(image1, { force: true })
                cy.get('.mat-simple-snackbar').should('have.text', 'File uploaded')
                cy.contains('SAVE').click()
                cy.get('.mat-simple-snackbar').should('have.text', 'Allied health assessment data updated')
                
            }    
            
            else {
                cy.get('#functional-card').within(() => {
                    cy.get('div').then(($date_card) => {
                        if ($date_card.hasClass('date-card')) {
                            cy.log('The child class was found!');
                            cy.get('.date-card').first().click()
                        }
                        else {
                            cy.log('Not exist')
                            cy.get('.assessment-content > div').should('have.text', ' Record patient’s allied health assessment ')
                        }
                    });
                });
                cy.get('.card-header').then(($body) => {
                    if ($body.text().includes(' Allied health assessment ')) {

                        cy.get('.mat-card-content').find('.content-preview').should('have.length', 5)
                        cy.get('.mat-card-content').find('.mat-button').each(($button) => {
                            expect($button).to.be.disabled;
                        })
                        cy.get('.card-header').find('mat-icon').click()
                    }
                })

                cy.contains('FILL').click()
                cy.get('.mat-display-3').should('have.text', ' Allied health assessment ')
            //Step 1 :- Physical condition
                cy.get('.mat-display-4').eq(0).should('have.text', ' Physical Condition ')
                cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(1).should('have.text', 'Sores on *')
                cy.get('.example-section').find('.mat-checkbox').eq(0).click()
                cy.get('.example-section').find('.mat-checkbox').eq(1).click()
                cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(1).should('have.text', 'Is this person at risk of developing a sore (foot ulcer)?* ')
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(3).should('have.text', 'Are they using it? *')
                cy.contains('NEXT').should('be.disabled')
                cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(0).click()
                cy.contains('NEXT').should('be.enabled')
                cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-form-field').eq(0).type('A while backed needed to count the amount letter. There were a couple of tools out there, but none of them met my standards and since I am a web designer I thought: why not do it myself and help others')
                cy.get('.mat-form-field').eq(0).type('{selectall}{backspace}')
                cy.contains('NEXT').should('be.enabled')
                cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-form-field').eq(1).type('A while backed needed to count the amount letter. There were a couple of tools out there, but none of them met my standards and since I am a web designer I thought: why not do it myself and help others')
                cy.get('.mat-form-field').eq(1).type('{selectall}{backspace}')
                cy.contains('NEXT').should('be.enabled').click()
            //Step 2 :- Lifestyle and Environment
                cy.get('.mat-display-4').eq(1).should('have.text', ' Lifestyle and Environment ')
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).should('be.enabled')
                cy.contains('BACK').click()
                cy.get('.mat-display-4').eq(0).should('have.text', ' Physical Condition ')
                cy.contains('NEXT').click()
                cy.get('.questions').eq(8).should('have.text', 'Where will the person use their walking aid?')
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(3).click()
                cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(4).click()
                cy.get('.questions').eq(9).should('have.text', 'Does the person wear appropriate shoes?')
                cy.get('.mat-radio-group').eq(7).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(7).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(10).should('have.text', 'Does the person presently use a walking aid? ')
                cy.get('.mat-radio-group').eq(8).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(8).find('.mat-radio-label').eq(1).click()
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).should('be.enabled').click()
                cy.get('.mat-display-4').eq(2).should('have.text', ' Mobility assessment ')
                cy.get('.stepper-second-footer > .mat-stepper-previous > .mat-button-wrapper').eq(1).click()
                cy.get('.mat-radio-group').eq(8).find('.mat-radio-label').eq(0).click()
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).click()
                cy.get('.mat-display-4').eq(2).should('have.text', ' Existing walking aid ')
            //Step 3 :- Existing walking aid
                cy.get('.questions').eq(11).should('have.text', "Does the walking aid meet the user's needs?")
                cy.get('.mat-radio-group').eq(9).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(9).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(12).should('have.text', "Does the walking aid meet the user's environmental conditions?")
                cy.get('.mat-radio-group').eq(10).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(10).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(13).should('have.text', "Does the walking aid provide postural support and stability?")
                cy.get('.mat-radio-group').eq(11).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(11).find('.mat-radio-label').eq(1).click()
                cy.get('.questions').eq(14).should('have.text', "Is the walking aid safe and functioning properly? ")
                cy.get('.mat-radio-group').eq(12).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(12).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-form-field').eq(2).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuatu.World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}')
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(1).should('be.enabled')
                cy.get('.mat-radio-group').eq(9).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(10).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(11).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(12).find('.mat-radio-label').eq(0).click()
                cy.get('.existing-add-div').should('have.text', ' The patient may not need a new walking aid ')
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(1).should('be.enabled').click()
            //Step 4 :- Mobility assessment
                cy.get('.mat-display-4').eq(3).should('have.text', ' Mobility assessment ')
                cy.get('.questions').eq(15).should('have.text', "Stand ")
                cy.get('.mat-radio-group').eq(13).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(16).should('have.text', "Walk Inside ")
                cy.get('.mat-radio-group').eq(14).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(17).should('have.text', "Walk Outside ")
                cy.get('.mat-radio-group').eq(15).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(18).should('have.text', "Go up and down more than one step ")
                cy.get('.mat-radio-group').eq(16).find('.mat-radio-label').eq(0).click()
                cy.get('.questions').eq(19).should('have.text', "Stand up from a chair ")
                cy.get('.mat-radio-group').eq(17).find('.mat-radio-label').eq(0).click()
                cy.get('.mat-radio-group').eq(13).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(14).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(15).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(16).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(17).find('.mat-radio-label').eq(1).click()
                cy.get('.mat-radio-group').eq(13).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(14).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(15).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(16).find('.mat-radio-label').eq(2).click()
                cy.get('.mat-radio-group').eq(17).find('.mat-radio-label').eq(2).click()
                cy.get('.questions').eq(20).should('have.text', "How far the person can walk ")
                cy.get('.mat-radio-group').eq(18).find('.mat-radio-label').eq(0).click()
                cy.get('.stepper-second-footer > .mat-stepper-next').eq(2).should('be.enabled').click()
            //Step 5 :- Clinical notes
                cy.get('.mat-display-4').eq(4).should('have.text', ' Clinical notes ')
                cy.get('.mat-form-field').eq(2).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-form-field').eq(2).type('{selectall}{backspace}')
                cy.contains('SAVE').should('be.enabled')
                cy.get('.mat-form-field').eq(3).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-form-field').eq(3).type('{selectall}{backspace}')
                cy.contains('SAVE').should('be.enabled')
                cy.get('.mat-form-field').eq(4).type('World Health Organization P.O. Box 1771, South Pacific Complex Private Bag 90-09 Port Vila, Vanuaatu.')
                cy.get('.mat-form-field').eq(4).type('{selectall}{backspace}')
                cy.contains('SAVE').should('be.enabled')
                cy.get('input[type=file]').selectFile(image1, { force: true })
                cy.get('.mat-simple-snackbar').should('have.text', 'File uploaded')
                cy.contains('delete').should('exist').click()
                cy.get('.mat-dialog-container').should('exist')
                cy.get('.mat-dialog-container').find('.mat-button-wrapper').eq(1).click().wait(1000)
                cy.get('input[type=file]').selectFile(image2, { force: true })
                cy.get('.mat-simple-snackbar').should('contain.text', 'File size exceeds 5MB').wait(1000)
                cy.get('input[type=file]').selectFile(file, { force: true })
                cy.get('.mat-simple-snackbar').should('contain.text', 'File format must be .png, .jpg, .pdf, .doc,.docx').wait(1000)
                cy.get('input[type=file]').selectFile(image1, { force: true })
                cy.get('.mat-simple-snackbar').should('have.text', 'File uploaded')
                cy.contains('SAVE').should('be.enabled')
                cy.get('.card-header').find('mat-icon').click().wait(1000)
                cy.contains('FILL').click()
            //Step 1 :- Physical condition
                //Question 1
                cy.Random1().then((randomNumber) => {
                    cy.log(randomNumber)
                    if (randomNumber == 0) { 
                        cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(randomNumber).click()
                        cy.get('.mat-checkbox').eq(0).click()
                    }
                    else {
                        cy.get('.mat-radio-group').eq(0).find('.mat-radio-label').eq(randomNumber).click()
                        cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(randomNumber).click()
                    }
                })
                //Question 2
                cy.get('.mat-radio-group').then(($input) => {
                    const number = $input.length
                    cy.log(number)
                    if (number == 13) {
                        cy.get('.mat-radio-group').eq(1).find('.mat-radio-label').eq(0).click()
                        cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(0).click()

                    } else {
                        cy.get('.mat-radio-group').eq(2).find('.mat-radio-label').eq(0).click()
                        cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(0).click()
                    }
                })
                //Question 3
                cy.Random2().then((randomNumber) => {
                    cy.get('.mat-radio-group').then(($input) => {
                        const number = $input.length
                        cy.log(number)
                        if (number == 14) {
                            cy.get('.mat-radio-group').eq(3).find('.mat-radio-label').eq(randomNumber).click()
                        } else {
                            cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(randomNumber).click()
                        }
                    })
                })
                //Question 4
                cy.Random1().then((randomNumber) => {
                    cy.get('.mat-radio-group').then(($input) => {
                        const number = $input.length
                        cy.log(number)
                        if (number == 14) {
                            cy.get('.mat-radio-group').eq(4).find('.mat-radio-label').eq(randomNumber).click()
                        } else {
                            cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(randomNumber).click()
                        }
                    })
                })
                cy.contains('NEXT').click()
            //Step 2 :- Lifestyle and Environment
                //Question 1
                cy.get('.mat-display-4').eq(1).should('have.text', ' Lifestyle and Environment ')
                cy.Random3().then((randomNumber) => {
                    cy.get('.mat-radio-group').then(($input) => {
                        const number = $input.length
                        cy.log(number)
                        if (number == 14) {
                            cy.get('.mat-radio-group').eq(5).find('.mat-radio-label').eq(randomNumber).click()
                        } else {
                            cy.get('.mat-radio-group').eq(6).find('.mat-radio-label').eq(randomNumber).click()
                        }
                    })
                })
                //Question 3
                cy.Random2().then((randomNumber) => {
                    cy.get('.mat-radio-group').then(($input) => {
                        const number = $input.length
                        cy.log(number)
                        if (number == 14) {
                            if (randomNumber == 0) {
                                cy.get('.mat-radio-group').eq(7).find('.mat-radio-label').eq(randomNumber).click()
                                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).should('be.enabled').click()
                //Existing Wallking Aid
                                cy.get('.mat-display-4').eq(2).should('have.text', ' Existing walking aid ')
                                cy.get('.mat-radio-label').eq(21).click()
                                cy.get('.mat-radio-label').eq(23).click()
                                cy.get('.mat-radio-label').eq(25).click()
                                cy.get('.mat-radio-label').eq(27).click()
                                cy.get('.existing-add-div').should('have.text', ' The patient may not need a new walking aid ')
                                cy.get('.stepper-second-footer > .mat-stepper-next').eq(1).should('be.enabled').click()


                            } else {
                                cy.get('.mat-radio-group').eq(7).find('.mat-radio-label').eq(randomNumber).click()
                                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).should('be.enabled').click()
                                cy.get('.mat-display-4').eq(2).should('have.text', ' Mobility assessment ')
                            }
                        } else {
                            if (randomNumber == 0) {
                                cy.get('.mat-radio-group').eq(8).find('.mat-radio-label').eq(randomNumber).click()
                                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).should('be.enabled').click()
                     //Existing Wallking Aid
                                cy.get('.mat-display-4').eq(2).should('have.text', ' Existing walking aid ')
                                cy.get('.mat-radio-label').eq(24).click()
                                cy.get('.mat-radio-label').eq(26).click()
                                cy.get('.mat-radio-label').eq(28).click()
                                cy.get('.mat-radio-label').eq(30).click()
                                cy.get('.existing-add-div').should('have.text', ' The patient may not need a new walking aid ')
                                cy.get('.stepper-second-footer > .mat-stepper-next').eq(1).should('be.enabled').click()


                            }
                            else {
                                cy.get('.mat-radio-group').eq(8).find('.mat-radio-label').eq(randomNumber).click()
                                cy.get('.stepper-second-footer > .mat-stepper-next').eq(0).should('be.enabled').click()
                                cy.get('.mat-display-4').eq(2).should('have.text', ' Mobility assessment ')
                            }
                        }
                    })
                })

            //Step 3 :- Mobility assessment
                cy.Random2().then((randomNumber) => {
                    cy.get('.mat-radio-group').then(($input) => {
                        const number = $input.length
                        cy.log(number)
                        if (number == 14) {
                            cy.get('.mat-radio-group').eq(8).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(9).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(10).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(11).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(12).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.stepper-second-footer > .mat-stepper-next').eq(1).should('be.enabled').click()
                        }
                        else if (number == 15) {
                            cy.get('.mat-radio-group').eq(9).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(10).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(11).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(12).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(13).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.stepper-second-footer > .mat-stepper-next').eq(1).should('be.enabled').click()
                        }
                        else {
                            cy.get('.mat-radio-group').eq(13).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(14).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(15).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(16).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.mat-radio-group').eq(17).find('.mat-radio-label').eq(randomNumber).click()
                            cy.get('.stepper-second-footer > .mat-stepper-next').eq(2).should('be.enabled').click()
                        }
                    })
                
                cy.get('input[type=file]').selectFile(image1, { force: true })
                cy.get('.mat-simple-snackbar').should('have.text', 'File uploaded')
                cy.contains('delete').should('exist').click()
                cy.get('.mat-dialog-container').should('exist')
                cy.get('.mat-dialog-container').find('.mat-button-wrapper').eq(1).click().wait(1000)
                cy.get('input[type=file]').selectFile(image2, { force: true })
                cy.get('.mat-simple-snackbar').should('contain.text', 'File size exceeds 5MB').wait(1000)
                cy.get('input[type=file]').selectFile(file, { force: true })
                cy.get('.mat-simple-snackbar').should('contain.text', 'File format must be .png, .jpg, .pdf, .doc,.docx').wait(1000)
                cy.get('input[type=file]').selectFile(image1, { force: true })
                cy.get('.mat-simple-snackbar').should('have.text', 'File uploaded')
                cy.contains('SAVE').should('be.enabled').click()
                cy.get('.mat-simple-snackbar').should('contain.text','Allied health assessment data saved')
                })
            }
        })
    })
})
