
export abstract class BasePage {
    protected url = "http://localhost:4200/";
    protected extension = "";

    visitPage() {
        cy.visit(this.url + this.extension);
    }
}
