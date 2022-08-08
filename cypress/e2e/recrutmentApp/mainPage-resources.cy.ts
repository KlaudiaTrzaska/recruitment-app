import MainPage from '../../pageObjects/MainPage';
describe('Main Page - Resources', () => {
    beforeEach(() => {
      MainPage.visitPage();
    })

    it('verify resources are displayed', () => {
        MainPage.resourcesHeader.should('have.text', 'Resources');
        MainPage.learnAngularLink.should('be.visible');
        MainPage.cliDocLink.should('be.visible');
        MainPage.angularBlogLink.should('be.visible');
        MainPage.angularDevToolsLink.should('be.visible');
      })

      it('verify Learn Angular directs to angular page', () => {
        MainPage.learnAngularLink.should('have.attr', 'href', 'https://angular.io/tutorial');
      })

      it('verify CLI documentation directs to angular page', () => {
        MainPage.cliDocLink.should('have.attr', 'href', 'https://angular.io/cli');
      })

      it('verify Angular blog directs to angular page', () => {
        MainPage.angularBlogLink.should('have.attr', 'href', 'https://blog.angular.io/');
      })

      it('verify Angular DevTools directs to angular page', () => {
        MainPage.angularDevToolsLink.should('have.attr', 'href', 'https://angular.io/devtools/');
      })
})