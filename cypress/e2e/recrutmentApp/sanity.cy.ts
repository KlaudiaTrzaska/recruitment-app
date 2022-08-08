import MainPage from '../../pageObjects/MainPage';
describe('Application sanity test', () => {
    beforeEach(() => {
      MainPage.visitPage();
    })

    it('verify recrutment app is opened', () => {
        MainPage.pageTitle.should('have.text', 'Recruitment app is running!');
      })
    })