document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to load before executing the code.

    // Get the element where the result will be displayed.
    const outputElement = document.body;

    // Create instances of expensive and cheap component suppliers.
    const expensiveFactory = new ExpensiveComponentFactory();
    const cheapFactory = new CheapComponentFactory();

    const transistorPriceExpensive = expensiveFactory.getComponentPrice("Transistor");
    const transistorPriceCheap = cheapFactory.getComponentPrice("Transistor");
    const resistorPriceExpensive = expensiveFactory.getComponentPrice("Resistor");
    const resistorPriceCheap = cheapFactory.getComponentPrice("Resistor");
    const capacitorPriceExpensive = expensiveFactory.getComponentPrice("Capacitor");
    const capacitorPriceCheap = cheapFactory.getComponentPrice("Capacitor");

    // Paste the result on the page.
    outputElement.innerHTML = `
        <p>Transistor price ( supplier): $${transistorPriceExpensive}</p>
        <p>Transistor price (cheap supplier): $${transistorPriceCheap}</p>
        <p>Resistor price  (expensive supplier): $${resistorPriceExpensive}</p>
        <p>Resistor price (cheap supplier): $${resistorPriceCheap}</p>
        <p>Capacitor price (expensive supplier): $${capacitorPriceExpensive}</p>
        <p>Capacitor price (cheap supplier): $${capacitorPriceCheap}</p>
        <br>
        <p>Total sum (expensive supplier): $${transistorPriceExpensive + resistorPriceExpensive + capacitorPriceExpensive}</p>
        <p>Total sum (cheap supplier): $${transistorPriceCheap + resistorPriceCheap + capacitorPriceCheap}</p>

    `;
});
