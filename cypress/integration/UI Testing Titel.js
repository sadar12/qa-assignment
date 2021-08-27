///<reference types="cypress"/>
let pageObject



beforeEach(()=>{
    cy.visit('http://192.168.134.238:8080');
    pageObject=new Page();
});
it('UI Title Testing ',function(){
    cy.title().should('eq','UI Testing Site')
})
it('UI Testing Button ',function(){
    cy.get('#home').click();
    let activeButton=cy.get('li.active');
    expect(activeButton.contains('Home'));
    expect(cy.get('h1').contains('Welcome to Pixelmatic QA department'));
})
it('Home Button ',function(){
    cy.get('#home').click()
})

it('Form Page',function(){
    cy.get('#form').click();
let activeButton=cy.get('li.active');
expect(activeButton.contains('Form'));
expect(cy.get('h1').contains('Simple Form Submission'));
//comment
})
it('Search Bar',function(){
    cy.get('#hello-input').type('Sadar Munir')
})
it('Go Button',function(){
    cy.get('#hello-submit').click()
    
})
it('404 Error  ',function(){
    cy.get('#error').click();
    expect(cy)
})