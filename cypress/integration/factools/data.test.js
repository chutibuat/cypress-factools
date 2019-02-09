export default {
  productSku184: {
    href: "p/184",
    productName: "VALU VSCM22",
    price: "1,100.00"
  },
  productSku185: {
    href: "p/185",
    productName: "VALU VL20CX",
    price: "3,350.00"
  },
  ///////////     case 1 sku     ///////////
  // qty = 0
  case_have_1_sku_and_0_qty: {
    price: "1,100.00",
    totalPrice: "1,100.00",
    qty: "1",
    subtotal: "1,100.00",
    totalQty: "1"
  },
  // qty = 2
  case_have_1_sku_and_2_qty: {
    price: "1,100.00",
    totalPrice: "2,200.00",
    qty: "2",
    subtotal: "2,200.00",
    totalQty: "2"
  },
  // qty = 20
  case_have_1_sku_and_20_qty: {
    price: "1,100.00",
    totalPrice: "22,000.00",
    qty: "20",
    subtotal: "22,000.00",
    totalQty: "20"
  },
  ///////////     case 2 sku     ///////////
  // qty = 0
  case_have_2_sku: {
    totalQtyBrfore: "2",
    totalPricePrev: "4,450.00",
    totalQty: "3",
    totalPrice: "5,550.00",
    products: [
      {
        price: "1,100.00",
        totalPrice: "2,200.00",
        qty: "2",
        pricePrev: "1,100.00",
        totalPricePrev: "1,100.00",
        qtyPrev: "1"
      },
      {
        price: "3,350.00",
        totalPrice: "3,350.00",
        qty: "1",
        pricePrev: "3,350.00",
        totalPricePrev: "3,350.00",
        qtyPrev: "1"
      }
    ]
  }
};
