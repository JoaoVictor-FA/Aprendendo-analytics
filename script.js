function finalizar(valor) {
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
        },
        {
          item_name: "Donut Friday Scented T-Shirt",
          item_id: "67890",
        },
      ],
    },
  });
}

function adicionar(){
  gtag("event", "add_to_cart", {
    currency: "BR",
    value: 7.77,
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
      }
    ]
  });
}

function tirar(){
  gtag("event", "remove_from_cart", {
    currency: "USD",
    value: 7.77,
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
      }
    ]
  });
}