describe('log in page', () => {
  it('passes', () => {
    cy.visit('https://learn.stagingaia.com/login')
    cy.get(':nth-child(2) > .style_inputDesign__2ZMHE').type("acadifysuperadmin@gmail.com")
    cy.get(':nth-child(4) > .style_inputDesign__2ZMHE').type("Password@123")
    cy.get('.btn').click()
    cy.url().should('eq', 'https://learn.stagingaia.com/dashboard')
  })
})