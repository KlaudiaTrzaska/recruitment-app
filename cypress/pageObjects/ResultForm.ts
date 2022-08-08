
class ResultForm {
    public assertValue(query: string, expected: string) {
        cy.get('div.row').contains(query).parent().within(() => {
            return cy.get('div').eq(1).should('have.text', expected);
        });
    }
}

export default new ResultForm();