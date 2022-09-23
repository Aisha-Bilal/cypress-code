const { not } = require("check-more-types")

describe('log in page', () => {
 
  it('log in with -neg', () => {
    cy.visit('https://learn.stagingaia.com/login')
    cy.get(':nth-child(2) > .style_inputDesign__2ZMHE').type("acadifysuperadmin11@gmail.com")
    cy.get(':nth-child(4) > .style_inputDesign__2ZMHE').type("Password@123")
    cy.get('.btn').click()
    cy.url().should.not.be('eq', 'https://learn.stagingaia.com/dashboard')
  })
  it('log in with -neg', () => {
    cy.visit('https://learn.stagingaia.com/login')
    cy.get(':nth-child(2) > .style_inputDesign__2ZMHE').type("acadifysuperadmin@gmail.com")
    cy.get(':nth-child(4) > .style_inputDesign__2ZMHE').type("Password@12345")
    cy.get('.btn').click()
    cy.url().should.not('eq', 'https://learn.stagingaia.com/dashboard')
  })
  it('log in with correct cradentionals', () => {
    cy.visit('https://learn.stagingaia.com/login')
    cy.get(':nth-child(2) > .style_inputDesign__2ZMHE').type("acadifysuperadmin@gmail.com")
    cy.get(':nth-child(4) > .style_inputDesign__2ZMHE').type("Password@123")
    cy.get('.btn').click()
    cy.url().should('eq', 'https://learn.stagingaia.com/dashboard')
  })
})