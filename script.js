function compra(valor) {
  dataLayer.push({ ecommerce: null });
  dataLayer.push({
    event: "purchase",
    ecommerce: {
      transaction_id: String((Math.random() * 1000).toFixed()),
      value: "59.89",
      currency: "EUR",
      items: [
        {
          item_name: "Triblend Android T-Shirt",
          item_id: "12345",
          price: String(valor),
          item_brand: "Google",
          item_category: "Apparel",
          item_variant: "Gray",
          quantity: 1,
        },
        {
          item_name: "Donut Friday Scented T-Shirt",
          item_id: "67890",
          price: 33.75,
          item_brand: "Google",
          item_category: "Apparel",
          item_variant: "Black",
          quantity: 1,
        },
      ],
    },
  });
}
