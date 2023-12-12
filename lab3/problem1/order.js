function placeOrder() {
    const shawarmaType = document.getElementById("shawarma-type").value;
    const selectedAddOns = Array.from(document.getElementById("add-ons").selectedOptions).map((option) => option.value);
    const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;

    let shawarma;
    const turkish = "turkish";
    const dubai = "dubai";
    const hummus = "hummus";
    const garlic_sauce = "garlic-sauce";

    switch (shawarmaType) {
        case turkish:
            shawarma = new TurkishShawarma();
            break;
        case dubai:
            shawarma = new DubaiShawarma();
            break;
    }

    selectedAddOns.forEach((addOn) => {
        switch (addOn) {
            case hummus:
                shawarma = new HummusDecorator(shawarma);
                break;
            case garlic_sauce:
                shawarma = new GarlicSauceDecorator(shawarma);
                break;
        }
    });

    const shawarmaCost = shawarma.calculateCost();
    let totalCost = shawarmaCost * quantity;

    if (totalCost > 200) {
        totalCost += 2 * 0.99;
    }

    let orderSummary = `Ordered: ${quantity} ${shawarma.getDescription()} | Total Cost: ${totalCost.toFixed(2)} грн`;

    if (totalCost > 200) {
        orderSummary += " | 2 Americano Coffees";
    }

    document.getElementById("order-summary").innerText = orderSummary;
}
