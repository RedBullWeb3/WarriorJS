const loginForm = document.querySelector("form.login");
const passwordInput = document.querySelector("[name = \"admin-password\"]");

const addProductForm = document.querySelector("form.add-product");
const nameInput = document.querySelector("[name = \"product-name\"]");
const priceInput = document.querySelector("[name = \"product-price\"]");
const productsUl = document.querySelector(".products-list");

const PASSWORD = "password";

const login = (e) => {
  e.preventDefault();

  if (passwordInput.value === PASSWORD) openAdminPanel();
  else alert("Podałeś błędne hasło!");
};

const openAdminPanel = () => {
  addProductForm.classList.remove("invisible");
  loginForm.classList.add("invisible");
};

const addProductToShop = (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const price = Number(priceInput.value);

  const newLi = document.createElement("li");

  const newStrong = document.createElement("strong");
  newStrong.innerText = name;

  const newPrice = document.createElement("span");
  newPrice.innerText = `${price}zł`;

  const newBtn = document.createElement("button");
  newBtn.classList.add("buy-product");
  newBtn.dataset.name = name;
  newBtn.dataset.price = String(price);
  newBtn.innerText = "Kup";
  newBtn.addEventListener("click", buyProduct);

  newLi.appendChild(newStrong);
  newLi.appendChild(newPrice);
  newLi.appendChild(newBtn);

  console.log(newLi);

  productsUl.appendChild(newLi);

  nameInput.value = "";
  priceInput.value = "";
};

loginForm.addEventListener("submit", login);
addProductForm.addEventListener("submit", addProductToShop);
