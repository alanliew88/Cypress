describe('Alan 1st Test Suite', function()  {

    it('First Test Case-positive', function() {

      cy.visit('https://shopee.com.my')  
      cy.title().should('eq','Shopee Malaysia | Free Shipping Across Malaysia') 
      cy.contains ('English')

    })
    
    it('Second Test Case-positive', function() {

        cy.visit('https://demo.nopcommerce.com/')  
        cy.title().should('eq','Login now to start shopping!| Shopee Malaysia') 
        
  
      })

    it('First Test Case-negative', function() {

        cy.visit('https://aogda.com')  
        cy.title().should('eq','Agoda Official Site | Free Cancellation & Booking Deals | Over 2 Million Hotels') 
        cy.get()
  
      })
  })