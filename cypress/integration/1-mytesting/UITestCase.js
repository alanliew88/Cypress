///<reference types="cypress" />

describe ('UITestCase',function()

{
    it('FirstTestCase',function()
    {
    cy.visit("https://demo.nopcommerce.com")
    cy.title().should("eq","nopCommerce demo store")

    })

    it ('SecondTestCase',function()
    {
    
    cy.visit("https://demo.nopcommerce.com")
    cy.title().should("eq","nopCommerce demo store")
    cy.get('#small-searchterms').click()


    })
    it('ThirdTestCase', function()
    {
    cy.visit("https://demo.nopcommerce.com")
    cy.title().should("eq","nopCommerce demo store")
    cy.get('#small-searchterms').click()
      .type ("Apple Macbook Pro 13-inch")
    cy.get('.search-box-button').click()

    })

    it("ForthTestCase",function()
    {
        cy.visit("https://demo.nopcommerce.com")
        cy.title().should("eq","nopCommerce demo store")
        cy.get('#small-searchterms').click()
          .type('Apple Macbook Pro 13-inch')
        cy.get('.search-box-button').click()
        cy.get('.product-box-add-to-cart-button').click()
    })
    it('FifthTestCase',function()
    {
        cy.visit("https://demo.nopcommerce.com")
        cy.title().should("eq","nopCommerce demo store")
        cy.get('#small-searchterms').click()
          .type('Apple Macbook Pro 13-inch')
        cy.get('.search-box-button').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#product_enteredQuantity_4').click().clear()
          .type('3')
        cy.get('.add-to-cart-button').click()
        
    })
    it('SixthTestCase',function()
    {
        cy.visit("https://demo.nopcommerce.com")
        cy.title().should("eq","nopCommerce demo store")
        cy.get('#small-searchterms').click()
          .type('Apple Macbook Pro 13-inch')
        cy.get('.search-box-button').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#product_enteredQuantity_4').click().clear()
          .type('3')
        cy.get('.add-to-cart-button').click()
        cy.wait(3000)
        cy.get('.content > a').click()

        
    })
    it('SeventhTestCase',function()
    {
        cy.visit("https://demo.nopcommerce.com")
        cy.title().should("eq","nopCommerce demo store")
        cy.get('#small-searchterms').click()
          .type('Apple Macbook Pro 13-inch')
        cy.get('.search-box-button').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#product_enteredQuantity_4').click().clear()
          .type('3')
        cy.get('.add-to-cart-button').click()
        cy.wait(3000)
        cy.get('#topcartlink > a > span.cart-label').click()
        cy.wait(2000)
        cy.get('.product-unit-price').contains('$1,800.00')

        cy.get('#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.subtotal > span ').contains('$5,400.00')
        



        
    })
}

)