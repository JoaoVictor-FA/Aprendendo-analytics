carrinho = []

function finalizar(valor) {
  gtag("event", "purchase", {
    currency: "USD",
    transaction_id: String((Math.random() * 1000).toFixed()),
    value: 21.09,
    items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
      },
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
      }
    ],
  });
}

function adicionar(valor, nome){
  gtag("event", "add_to_cart", {
    currency: "USD",
    value: valor,
    items: [
      {
        item_name: String(nome),
      }
    ]
  });
}

function tirar(valor, nome){
  gtag("event", "remove_from_cart", {
    currency: "USD",
    value: 7.77,
    value: valor,
    items: [
      {
        item_name: String(nome),
      }
    ]
  });
}