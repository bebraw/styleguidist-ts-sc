beforeEach(() => {
  cy.visit('/', {
    onBeforeLoad(win) {
      cy.stub(win.console, 'error').callsFake((message) => {
        console.log(`console.error called with ${message}`)
        throw new Error(message)
      })
    },
  })
})
describe('Styleguide', function() {
  it('loads', function() {
    cy.contains('A simple button.')
  })
})
