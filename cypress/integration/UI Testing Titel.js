///<reference types="cypress"/>




beforeEach(()=>{
    cy.visit('http://192.168.134.238:8080');
    
});
it('UI Title Testing ',function(){
    cy.title().should('eq','UI Testing Site')
})
it('Home Button ',function(){
    cy.get('#home').click();
    
expect(cy.get('h1').contains('Welcome to Pixelmatic QA department'));
})
it('UI Testing Button ',function(){
    cy.get('#site').click()
   
})

it('Form Page',function(){
    cy.get('#form').click();


expect(cy.get('h1').contains('Simple Form Submission'));

})
it('Search Bar',function(){
    cy.get('#form').click();

    cy.get('#hello-input').type('Sadar Munir')
    cy.get('#hello-submit').contains('Go!').click()
})

    
    
    

it(' Error Button ',function(){
    cy.get('#error').click();

    expect(cy.get('h1').contains('404 Error: File not found :-('));
})