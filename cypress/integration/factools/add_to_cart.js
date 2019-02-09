import data from "./data.test";

export const addToCart = param => {
  const value = param ? param : data.productSku184;
  cy.get(".header-desktop")
    .find("input[name='keyword']")
    .type(value.productName)
    .should("have.value", value.productName);
  cy.get(".header-desktop")
    .find("form")
    .submit();
  cy.get(".product-list")
    .find("a[href='" + value.href + "']")
    .click();
  cy.get(".addtocart-btn").click();
  cy.get(".header-desktop")
    .find(".header-cart")
    .click();
};
