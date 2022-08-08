import MainPage from '../../pageObjects/MainPage';
describe('Main Page - Next steps', () => {
    beforeEach(() => {
      MainPage.visitPage();
    })

    it('Next steps are displayed', () => {
       MainPage.nextStepsHeader.should('be.visible');
       MainPage.newComponentsCommand.should('be.visible');
       MainPage.angularMaterialCommand.should('be.visible');
       MainPage.addPwaSupportCommand.should('be.visible');
       MainPage.addDependencyCommand.should('be.visible');
       MainPage.runAndWatchTestsCommand.should('be.visible');
       MainPage.buildForProdCommand.should('be.visible');
      })

      it('verify terminal command includes new components', () => {
        MainPage.newComponentsCommand.click();
        MainPage.terminalAttr.should('eq','component');
      })

      it('verify terminal command includes angular material', () => {
        MainPage.angularMaterialCommand.click();
        MainPage.terminalAttr.should('eq', 'material');
      })

      it('verify terminal command includes pwa support', () => {
        MainPage.addPwaSupportCommand.click();
        MainPage.terminalAttr.should('eq', 'pwa');
      })

      it('verify terminal command includes dependency', () => {
        MainPage.addDependencyCommand.click();
        MainPage.terminalAttr.should('eq', 'dependency');
      })

      it('verify terminal command includes run and watch tests', () => {
        MainPage.runAndWatchTestsCommand.click();
        MainPage.terminalAttr.should('eq', 'test');
    })

    it('verify terminal command includes build for production', () => {
        MainPage.buildForProdCommand.click();
        MainPage.terminalAttr.should('eq', 'build');
    })
})