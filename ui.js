const basketUl = document.querySelector("section.basket ul");
const buyButtons = document.querySelectorAll("button.buy-product");
const buyAllButton = document.querySelector("button.buy-all-products");

const basket = new Basket();

const removeItem = (event) => {
  let id = Number(event.target.dataset.id);
  if (Number.isNaN(id)) id = Number(event.target.parentNode.dataset.id);
  basket.remove(id);
  setBasketInLS();
  createBasketUi();
};

const createBasketUi = () => {
  basketUl.innerHTML = "";

  for (const product of basket.getBasketSummary()) {
    const newLi = document.createElement("li");
    const newStrong = document.createElement("strong");
    const newSpan = document.createElement("span");

    newStrong.innerText = product.name;
    newSpan.innerText = `${product.price.toFixed(2)}zł`;

    newLi.dataset.id = product.id;
    newLi.appendChild(newStrong);
    newLi.appendChild(newSpan);

    newLi.addEventListener("click", removeItem);
    basketUl.appendChild(newLi);
  }

  const basketTotalValue = basket.getTotalValue();
  buyAllButton.innerText = `Złóż zamówienie na kwotę ${basketTotalValue.toFixed(
    2,
  )}zł`;

  buyAllButton.disabled = basketTotalValue === 0.0;
};

const addProductToBasket = (newProduct) => {
  basket.add(newProduct);
  setBasketInLS();
  createBasketUi();
};

const buyProduct = (event) => {
  const { name } = event.target.dataset;
  const price = Number(event.target.dataset.price);

  const newProduct = new Product(name, price);
  addProductToBasket(newProduct);
};

const buyAllProducts = () => {
  alert(`Kupiłeś produkty o wartości ${basket.getTotalValue()}`);
  basket.clear();
  createBasketUi();
};

buyButtons.forEach((button) => {
  button.addEventListener("click", buyProduct);
});
buyAllButton.addEventListener("click", buyAllProducts);

const setBasketInLS = () => {
  localStorage.setItem("basket", JSON.stringify(basket.items));
};

const getBasketFromLS = () => {
  const LSBasket = JSON.parse(localStorage.getItem("basket"));
  if (LSBasket === null) return;
  console.log(LSBasket);

  for (const product of LSBasket) {
    addProductToBasket(product);
  }
};

getBasketFromLS();
createBasketUi();
