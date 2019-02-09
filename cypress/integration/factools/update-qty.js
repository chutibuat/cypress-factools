import { addToCart } from "./add_to_cart";
import data from "./data.test";

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://factools.qa.maqe.com/catalog");
    cy.viewport("macbook-13");
  });
  const firstProduct = data.productSku184;
  const secondProduct = data.productSku185;
  describe("Update qty 1 sku", function() {
    it("update qty onclick", () => {
      const expectResult = data.case_have_1_sku_and_2_qty;
      addToCart(firstProduct);
      cy.wait(1000);
      ////// check before add to cart //////
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price']")
        .should($span => {
          expect($span).to.have.contain(expectResult.price);
        });
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price-total']")
        .should($span => {
          expect($span).to.have.contain(expectResult.price);
        });
      cy.get(".cart-item")
        .find("input[data-test='cart-product-sku-amount']")
        .should("have.value", "1");
      cy.get("span[data-test='cart-price-subtotal']").should($input => {
        expect($input).to.have.contain(expectResult.price);
      });
      ////// check before add to cart //////
      cy.get(".cart-item")
        .find(".input-spinner-increase")
        .first()
        .click();
      cy.wait(1000);
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price']")
        .should($span => {
          expect($span).to.have.contain(expectResult.price);
        });
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price-total']")
        .should($span => {
          expect($span).to.have.contain(expectResult.totalPrice);
        });
      cy.get(".cart-item")
        .find("input[data-test='cart-product-sku-amount']")
        .should("have.value", expectResult.qty);
      cy.get("span[data-test='cart-price-subtotal']").should($input => {
        expect($input).to.have.contain(expectResult.subtotal);
      });
      cy.get(".cart-has-items").should($p => {
        expect($p).to.contain(
          "คุณมีสินค้า " + expectResult.totalQty + " ชิ้นอยู่ในตะกร้า"
        );
      });
    });

    it("update qty input", () => {
      const expectResult = data.case_have_1_sku_and_20_qty;
      addToCart(firstProduct);
      cy.wait(1000);
      ////// check before add to cart //////
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price']")
        .should($span => {
          expect($span).to.have.contain(expectResult.price);
        });
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price-total']")
        .should($span => {
          expect($span).to.have.contain(expectResult.price);
        });
      cy.get(".cart-item")
        .find("input[data-test='cart-product-sku-amount']")
        .should("have.value", "1");
      cy.get("span[data-test='cart-price-subtotal']").should($input => {
        expect($input).to.have.contain(expectResult.price);
      });
      ////// check before add to cart //////
      cy.get(".cart-item")
        .find("input[data-test='cart-product-sku-amount']")
        .clear()
        .type(expectResult.qty)
        .blur();
      cy.wait(1000);
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price']")
        .should($span => {
          expect($span).to.have.contain(expectResult.price);
        });
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price-total']")
        .should($span => {
          expect($span).to.have.contain(expectResult.totalPrice);
        });
      cy.get(".cart-item")
        .find("input[data-test='cart-product-sku-amount']")
        .should("have.value", expectResult.qty);
      cy.get("span[data-test='cart-price-subtotal']").should($input => {
        expect($input).to.have.contain(expectResult.subtotal);
      });
      cy.get(".cart-has-items").should($p => {
        expect($p).to.contain(
          "คุณมีสินค้า " + expectResult.totalQty + " ชิ้นอยู่ในตะกร้า"
        );
      });
    });
  });
  describe("Update qty 2 skus", function() {
    it("update qty onclick", () => {
      const expectResult = data.case_have_2_sku;
      addToCart(firstProduct);
      cy.wait(1000);
      addToCart(secondProduct);
      cy.wait(1000);
      ///////////////////////////////////
      //                               //
      //     check cart previous       //
      //                               //
      ///////////////////////////////////
      ////// first item //////
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price']")
        .should($span => {
          expect($span.eq(0)).to.contain(expectResult.products[0].pricePrev);
        });
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price-total']")
        .should($span => {
          expect($span.eq(0)).to.contain(
            expectResult.products[0].totalPricePrev
          );
        });
      cy.get(".cart-item")
        .find("input[data-test='cart-product-sku-amount']")
        .should($span => {
          expect($span.eq(0)).to.have.value(expectResult.products[0].qtyPrev);
        });

      ////// second item //////
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price']")
        .should($span => {
          expect($span.eq(1)).to.contain(expectResult.products[1].pricePrev);
        });
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price-total']")
        .should($span => {
          expect($span.eq(1)).to.contain(
            expectResult.products[1].totalPricePrev
          );
        });
      cy.get(".cart-item")
        .find("input[data-test='cart-product-sku-amount']")
        .should($span => {
          expect($span.eq(1)).to.have.value(expectResult.products[1].qtyPrev);
        });

      ////// total count qty, subtotal price //////
      cy.get("span[data-test='cart-price-subtotal']").should($input => {
        expect($input).to.have.contain(expectResult.totalPricePrev);
      });
      cy.get(".cart-has-items").should($p => {
        expect($p).to.contain(
          "คุณมีสินค้า " + expectResult.totalQtyBrfore + " ชิ้นอยู่ในตะกร้า"
        );
      });
      ///////////////////////////////////
      //                               //
      //     check cart previous       //
      //                               //
      ///////////////////////////////////
      cy.get(".cart-item")
        .find(".input-spinner-increase")
        .first()
        .click();
      cy.wait(1000);
      ///////////////////////////////////
      //                               //
      //        check previous         //
      //                               //
      ///////////////////////////////////
      ////// first item //////
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price']")
        .should($span => {
          expect($span.eq(0)).to.contain(expectResult.products[0].price);
        });
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price-total']")
        .should($span => {
          expect($span.eq(0)).to.contain(expectResult.products[0].totalPrice);
        });
      cy.get(".cart-item")
        .find("input[data-test='cart-product-sku-amount']")
        .should($span => {
          expect($span.eq(0)).to.have.value(expectResult.products[0].qty);
        });
      ////// second item //////
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price']")
        .should($span => {
          expect($span.eq(1)).to.contain(expectResult.products[1].price);
        });
      cy.get(".cart-item")
        .find("span[data-test='cart-product-sku-price-total']")
        .should($span => {
          expect($span.eq(1)).to.contain(expectResult.products[1].totalPrice);
        });
      cy.get(".cart-item")
        .find("input[data-test='cart-product-sku-amount']")
        .should($span => {
          expect($span.eq(1)).to.have.value(expectResult.products[1].qty);
        });
      ////// total count qty, subtotal price //////
      cy.get("span[data-test='cart-price-subtotal']").should($input => {
        expect($input).to.have.contain(expectResult.totalPrice);
      });
      cy.get(".cart-has-items").should($p => {
        expect($p).to.contain(
          "คุณมีสินค้า " + expectResult.totalQty + " ชิ้นอยู่ในตะกร้า"
        );
      });
      ///////////////////////////////////
      //                               //
      //        check previous         //
      //                               //
      ///////////////////////////////////
    });
  });
});
