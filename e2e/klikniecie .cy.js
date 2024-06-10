///<reference types="cypress"/>

describe("Klikniecie w elment na stronie", () => {
    it("klikniecie z zakładke Contact us", () => {
        cy.visit("/");
        cy.get('a[title="Contact us"]'). click();
    })
})