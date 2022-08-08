import resultForm from 'cypress/pageObjects/resultForm';
import FormPage from '../../pageObjects/FormPage';
describe('Form - happy path', () => {
    before(() => {
      FormPage.visitFormPage();

      FormPage.nameInput.clear().type("Klaudia");
      FormPage.alterEgoInput.clear().type("Hungry Cat");
      FormPage.heroPowerDropdown.select("Super Flexible");
      FormPage.submitButton.click();
      FormPage.submittedHeroHeader.should('be.visible');
    })

    it('Fill the form and verify hero is created', () => {
        resultForm.assertValue('Name', 'Klaudia');
        resultForm.assertValue('Power', 'Super Flexible');
        resultForm.assertValue('Alter Ego', 'Hungry Cat');
      })

})