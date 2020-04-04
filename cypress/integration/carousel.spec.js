describe("Carousel", () => {
    beforeEach(() => cy.visit('/'));

    it("should show the first item", () => {
        cy.get('.carousel .carousel-item').should('be.visible');
    });

    it("should show next item", () => {
        cy.get('.carousel .carousel-item img')
            .invoke('attr', 'src')
            .then(src => {
                cy.get('.carousel-control.next').click();
                cy.get('.carousel .carousel-item img').should('not.have.attr', 'src', src);
            });
    });

    it("should show prev item", () => {
        cy.get('.carousel .carousel-item img')
            .invoke('attr', 'src')
            .then(src => {
                cy.get('.carousel-control.prev').click();
                cy.get('.carousel .carousel-item img').should('not.have.attr', 'src', src);
            });
    });

    it("should go to the indicator item", () => {
        cy.get('.carousel .carousel-item img')
            .invoke('attr', 'src')
            .then(src => {
                cy.get('.carousel .carousel-indicators div:nth-child(3)').click();
                cy.get('.carousel .carousel-item img').should('not.have.attr', 'src', src);
            });
    });
});
