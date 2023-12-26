class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.isAvailable = false;
        this.observers = [];
    }

    setAvailability(isAvailable) {
        this.isAvailable = isAvailable;
        this.updateInfo();
        this.notifyObservers({
            type: "availabilityChange",
            message: `Product ${this.name} is ${isAvailable ? "available" : "out of stock"}.`,
        });
    }

    setPrice(newPrice) {
        this.price = newPrice;
        this.updateInfo();
        this.notifyObservers({
            type: "priceChange",
            message: `The price of product ${this.name} has changed to ${newPrice} USD.`,
        });
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notifyObservers(event) {
        this.observers.forEach((observer) => observer.update(event));
    }

    updateInfo() {
        document.getElementById("productName").textContent = this.name;
        document.getElementById("productPrice").textContent = this.price;
        document.getElementById("productAvailability").textContent = this.isAvailable ? "Available" : "Out of stock";
    }
}
