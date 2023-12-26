// Creating instances of Product and Observer
const laptop = new Product("Laptop", 15000);
const phone = new Product("Smartphone", 5000);

const user1 = new Observer("User 1");
const user2 = new Observer("User 2");

// Subscribing observers to product updates
laptop.addObserver(user1);
laptop.addObserver(user2);
phone.addObserver(user1);

// Changes in the product state
function toggleAvailability() {
    const newAvailability = !laptop.isAvailable;
    laptop.setAvailability(newAvailability);
}

function changePrice() {
    const newPrice = laptop.price - 1000;
    laptop.setPrice(newPrice);
}

// Initial product information setup
laptop.updateInfo();
