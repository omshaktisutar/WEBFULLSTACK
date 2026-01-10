let product = {
  name: "Laptop",
  price: 50000,
  brand: "HP"
};

for (let key in product) {
  console.log(key + " : " + product[key]);
}
