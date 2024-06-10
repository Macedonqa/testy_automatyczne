///<reference types="cypress"/>

describe("wpisywanie tekstu w wyszykiwarke", () => {
    it("wpisywanie tekstu", () => {
        cy.visit ("/")
        cy.get("#search_query_top").type("przykładowa treść")
        cy.get("#search_query_top").should("have.value",  "przykładowa treść");
        cy.wait(3000);
        cy.get("#search_query_top").clear();
        cy.wait(3000);
        cy.get("#search_query_top").type("przykładowa treść {enter}");
        cy.get("p.alert").should("be.visible").and("include.text", "No results")
        cy.get("p.alert").should("have.css", "margin-bottom", "18px")
    })
})