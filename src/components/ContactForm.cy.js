import React from 'react'
import ContactForm from './ContactForm'

describe('<ContactForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ContactForm />)
  })

  it('successfully submits', () => {
    cy.mount(<ContactForm />)
    cy.get("#name").type("TestName")
    cy.get("#email").type("test@test.com")
    cy.get("#company").type("TestCo")
    cy.get("#message").type("This is a test message!")
    cy.get("#submit").click()
  })
})