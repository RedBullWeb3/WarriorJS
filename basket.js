class Basket {
  constructor() {
    this.items = this.loadFromLocalStorage() ?? [];
  }

  add(item) {
    this.items.push(item);
    this.saveToLocalStorage();
  }

  clear() {
    this.items.length = 0;
    this.saveToLocalStorage();
  }

  getTotalValue() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getBasketSummary() {
    return this.items.map((product, i) => ({
      id: i + 1,
      name: product.name,
      price: product.price,
    }));
  }

  remove(id) {
    this.items.splice(id - 1, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("basket-items", JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem("basket-items"));
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  setNewPrice(newPrice) {
    this.price = newPrice;
  }
}

const itemToCheck = "cucumber";
