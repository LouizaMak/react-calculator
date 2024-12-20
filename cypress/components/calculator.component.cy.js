import React from 'react'
import { mount } from '@cypress/react';
import Calculator from '../../calculator'

describe('<Calculator />', () => {
  it('Handles simple addition', () => {
    mount(<Calculator />)

    cy.get("input.equation-input")
      .type('2+2{enter}');

    cy.get("h1.answer")
      .should("contain", "4")  
  })

  it('Handles simple subtraction', () => {
    mount(<Calculator />)

    cy.get("input.equation-input")
      .type('10-2{enter}');

    cy.get("h1.answer")
      .should("contain", "8")  
  })

  it('Handles simple multiplication', () => {
    mount(<Calculator />)

    cy.get("input.equation-input")
      .type('4*2{enter}');

    cy.get("h1.answer")
      .should("contain", "8")  
  })

  it('Handles simple division', () => {
    mount(<Calculator />)

    cy.get("input.equation-input")
      .type('15/5{enter}');

    cy.get("h1.answer")
      .should("contain", "3")  
  })
})