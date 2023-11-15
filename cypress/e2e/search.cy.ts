describe('add product to cart', () => {
  it('should be able to search for products', () => {
    // ? comando criado em cypress/support/commands.ts
    cy.searchByQuery('moletom')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit search page without a search query', () => {
    // ? O redirect do next gera um throw de erro, por isso precisamos
    // ? desabilitar o tratamento de erros do cypress
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
