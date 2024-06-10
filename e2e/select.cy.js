///<reference types="cypress"/>

describe("testy związane z selectem", () => {
    it("Kliknięcie z zakładke Women", () => {
        cy.visit("/");
        cy.get('a[title="Women"]').click();

    })
    it("wybranie filtra in stock", ()=> {
        cy.get("#selectProductSort").select("name:asc")
        cy.get("#selectProductSort").should("have.value", "name:asc")

    })
})