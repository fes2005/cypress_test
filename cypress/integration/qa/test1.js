describe("Log in", function() {
    it("Sign in", function() {
        cy.visit("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php")
        cy.contains("Login").click()
        cy.get('input[type="text"]').type('test')
        cy.get('input[type="password"]').type('123456')
        cy.get('input[type="submit"]').click()
    });
    

});
