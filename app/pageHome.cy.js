import React from 'react'
import Home from './page'

describe('<Home />', () => {
  beforeEach(() => {
    // Antes de cada teste, monta o componente Home
    cy.mount(<Home />);
  });

  it('increments count when button is clicked', () => {
    // Captura o valor inicial do contador
    cy.get('.flex-col span').then(($span) => {
      const initialCount = parseInt($span.text());

      // Clica no botão
      cy.get('.bg-blue-300').click();

      // Captura o novo valor do contador
      cy.get('.flex-col span').should(($span) => {
        const newCount = parseInt($span.text());

        // Verifica se o contador foi incrementado corretamente
        expect(newCount).to.eq(initialCount + 1);
      });
    });
  });
});

describe('First Teste Cypress', () => {
  it('Hello World dos Testes', () => {
    expect(2).to.equal(2)
  })
})


describe('My First Test', () => {
  // beforeEach(() => {
  //   cy.mount(<Home />);
  // });
  it('Achar o botao', () => {
    cy.mount(<Home/>)
    cy.contains('Add')
    cy.contains('Add').click
  });

})

describe('Teste do hook', () =>{

  it('Teste Hook',() => {

  })


})


