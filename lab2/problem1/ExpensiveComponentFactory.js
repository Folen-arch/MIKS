// Declaration of the class `Expensive ComponentFactory`, which inherits the class `ComponentS supplier`.
class ExpensiveComponentFactory extends ComponentSupplier {
    constructor() {
        super(); // Call the constructor of the parent class.
        this.addComponent(new Transistor(10)); // Add transistor to components with price 10.
        this.addComponent(new Resistor(5)); // Add transistor to components with price 5.
        this.addComponent(new Capacitor(3)); // Add transistor to components with price 3.
    }
}
