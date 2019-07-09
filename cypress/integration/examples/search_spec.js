describe('Search Page', function () {
  it('Visit', function () {
    cy.visit('/search')
    // expect(true).to.equal(true)
    cy.contains('reset').click()
  })
})