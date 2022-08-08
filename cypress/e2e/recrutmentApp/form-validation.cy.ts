import resultForm from 'cypress/pageObjects/resultForm';
import FormPage from '../../pageObjects/FormPage';

describe('Form - validation', () => {
    before(() => {
      FormPage.visitFormPage();
    })

    describe('[negative], Negative scenarios', () => {
        beforeEach( ()=> {
            FormPage.newHeroButton.click();
        })

        it('[negative], verify name cannot be empty', () => {
            FormPage.nameInput.type('Name');
            FormPage.alterEgoInput.type('Alter Ego');
            FormPage.heroPowerDropdown.select("Super Flexible");

            FormPage.nameInput.clear();

            FormPage.shouldHaveAlertByLabel('Name', ' Name is required ');
        });

        it('[negative], all fields are empty after clicking New Hero button', () => {
            FormPage.nameInput.should('have.class', 'ng-invalid');
            FormPage.alterEgoInput.should('be.empty');
            FormPage.heroPowerDropdown.should('have.class', 'ng-invalid');
        });

        it('[negative], Submit button is disabled until all inputs are filled', () => {
            FormPage.submitButton.should('be.disabled');

            FormPage.nameInput.type('Name');
            FormPage.submitButton.should('be.disabled');

            FormPage.alterEgoInput.type('Alter Ego');
            FormPage.submitButton.should('be.disabled');

            FormPage.heroPowerDropdown.select("Super Flexible");
            FormPage.submitButton.should('be.enabled');
        });
    });

    describe('Name input', () => {
        before ( () => {
            FormPage.quickFill();
        });

        it('verify can have special characters', () => {
            FormPage.nameInput.clear().type('!?.@');
            FormPage.submitButton.click();
        });

        it('verify can have foreign characters', () => {
            FormPage.nameInput.clear().type('ąęśćź');
            FormPage.submitButton.click();
        });

        it('verify can have emoji', () => {
            FormPage.nameInput.clear().type('🦸');
            FormPage.submitButton.click();
        });

        afterEach( () => {
            FormPage.editButton.click();
        });
    });

    describe('Alter Ego input', () => {
        before ( () => {
            FormPage.quickFill();
        });

        it('verify can have special characters', () => {
            FormPage.alterEgoInput.clear().type('!?.@');
            FormPage.submitButton.click();
        });

        it('verify can have foreign characters', () => {
            FormPage.alterEgoInput.clear().type('ąęśćź');
            FormPage.submitButton.click();
        });

        it('verify can have emoji', () => {
            FormPage.alterEgoInput.clear().type('🦸');
            FormPage.submitButton.click();
        });

        afterEach( () => {
            FormPage.editButton.click();
        });
    });
})