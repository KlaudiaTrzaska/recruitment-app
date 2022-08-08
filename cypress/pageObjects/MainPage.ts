import { BasePage } from "./BasePage";

class MainPage extends BasePage {

    get pageTitle() {
        return cy.get("div.card > span");
    }

    get resourcesHeader() {
        return cy.get("div.content>h2").first();
    }

    get learnAngularLink() {
        return cy.get("[href='https://angular.io/tutorial']");
    }
    get cliDocLink() {
        return cy.get("[href='https://angular.io/cli']");
    }
    get angularBlogLink() {
        return cy.get("[href='https://blog.angular.io/']");
    }
    get angularDevToolsLink() {
        return cy.get("[href='https://angular.io/devtools/']");
    }

    get nextStepsHeader() {
        return cy.get("div.content>h2").last();
    }

    get newComponentsCommand() {
        return cy.get('button').contains('button', 'New Component');
    }

    get angularMaterialCommand() {
        return cy.get('button').contains('button', 'Angular Material');
    }

    get addPwaSupportCommand() {
        return cy.get('button').contains('button', 'Add PWA Support');
    }

    get addDependencyCommand() {
        return cy.get('button').contains('button', 'Add Dependency');
    }

    get runAndWatchTestsCommand() {
        return cy.get('button').contains('button', 'Run and Watch Tests');
    }

    get buildForProdCommand() {
        return cy.get('button').contains('button', 'Build for Production');
    }

    get terminal() {
        return cy.get("div.terminal");
    }

    get terminalAttr() {
        return this.terminal.invoke('attr', 'ng-reflect-ng-switch');
    }

}

export default new MainPage();