

describe('Locator test Suite',function()
    {

        it ('First test case',function()
            {

                cy.visit("https://demo.nopcommerce.com")
                cy.title().should("eq","nopCommerce demo store")
                cy.get('.ui-autocomplete-input').click()
                  .type('Apple Macbook Pro 13-inch')
                  .should('have.value','Apple Macbook Pro 13-inch')
                
                cy.get('.search-box-button').click()

                

                cy.get('.product-box-add-to-cart-button',{ timeout: 10000 }).should('be.visible');
                cy.get('.product-box-add-to-cart-button').click()

                cy.wait(2000)

                cy.get('#product_enteredQuantity_4').clear().type('3').should('have.value','3')
                cy.get('#add-to-cart-button-4').click()

                cy.wait(2000)

                cy.get('.content > a').click()
                cy.get('.product-unit-price').contains('$1,800.00')

                cy.get('.product-subtotal').contains('$5,400.00')
                cy.get('#checkout').click()



                




            }
        
        )
    }
)