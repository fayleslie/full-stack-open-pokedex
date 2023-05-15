describe('Pokedex', function() {
it('front page can be opened', function() {
    cy.visit('/');
    cy.contains('ivysaur');
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.');
  });

  it('Pokémon page can be navigated to', function() {
    cy.visit('/');
    cy.get('#app > .list-container > a').contains('charmander').click();
    cy.contains('charmander');
  });
});