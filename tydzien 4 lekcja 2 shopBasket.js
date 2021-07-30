class Basket {
    constructor() {
        this.items = [];
        this.totalValue = 0;
    }

    add(item) {
        this.items.push(item);
        this.addToTotalValue(item.price);
    }


    getTotalValue() {
        return this.items.reduce((prev, curr) => prev + curr.price, 0);
    }

    showBasket() {
        this.items
            .map((product, i) => `${i+1}-${product.name} - ${product.price.toFixed(2)} zl.`)
            .forEach(line => console.log(line));
    }

    remove(no) {
        this.items.splice(no- 1, 1);
    }
}


class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;

    }
    setNewPrice(newPrice) {
        this.price = newPrice;
    }
}
