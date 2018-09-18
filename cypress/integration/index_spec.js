describe('Styleguide', function() {
  it('loads without warnings or errors', function() {
    cy.window().then(win => {
      const errorSpy = cy.spy(win.console, 'error')
      const warningSpy = cy.spy(win.console, 'warn')

      // TODO: Likely we want to capture errors here instead
      cy.visit('/', {
        onLoad() {
          expect(errorSpy).to.not.be.called
          expect(warningSpy).to.not.be.called
        },
      })
    })
  })
})
