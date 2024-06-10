///<reference types="cypress"/>

describe("mój pierwszy test autoamtyczny", ()=> {
    it ("otworzenie strony google.com", () => {
        cy.visit("https://google.com"); 

    })
})