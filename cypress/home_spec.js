describe('Home Component', () => {
  it('increments count when button is clicked', () => {
    cy.visit('http://localhost:3000/'); // Substitua 'http://seu-app-url' pela URL do seu aplicativo
    cy.get('.flex-col span').should('have.text', '0'); // Certifique-se de que o contador começa com 0

    cy.get('.bg-blue-300').click(); // Clique no botão
    cy.get('.flex-col span').should('have.text', '1'); // Verifique se o contador foi incrementado para 1
  });
});
