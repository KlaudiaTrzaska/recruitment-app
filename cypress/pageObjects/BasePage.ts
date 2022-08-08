export abstract class BasePage {

protected url = "http://localhost:4200/";
protected formUrl = "http://localhost:4200/form";
protected stepperUrl = "http://localhost:4200/stepper";

visitPage() {
    cy.visit(this.url);
}

visitFormPage() {
    cy.visit(this.formUrl);
}

visitStepperPage() {
    cy.visit(this.stepperUrl);
}
}