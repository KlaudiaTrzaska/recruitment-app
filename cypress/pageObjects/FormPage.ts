import { EWOULDBLOCK } from "constants";
import { BasePage } from "./BasePage";

class FormPage extends BasePage {

    protected override extension = "form";

    override visitPage(): void {
        super.visitPage();
    }

    get nameInput() {
        return cy.get("input#name");
    }

    get alterEgoInput() {
        return cy.get("input#alterEgo");
    }

    get heroPowerDropdown() {
        return cy.get("select#power");
    }

    get submitButton() {
        return cy.get("button[type='submit']");
    }

    get editButton() {
        return cy.get("button.btn-primary");
    }

    get newHeroButton() {
        return cy.get("button[type='button']").first();
    }

    get submittedHeroHeader() {
        return cy.get('div').contains('div', 'You submitted the following:')
    }

    shouldHaveAlertByLabel(query: string, expected: string) {
        cy.get('label').contains(query).parent().within(() => {
            cy.get('div.alert-danger').should('have.text', expected);
        });
    }

    quickFill() {
        this.nameInput.clear().type('Name');
        this.alterEgoInput.clear().type('Alter Ego');
        this.heroPowerDropdown.select("Super Flexible");
    }
}

export default new FormPage();