describe ('thistestsuite', function()

{

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


}


)