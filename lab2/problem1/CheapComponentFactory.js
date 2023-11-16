// Declaration of the `Cheap ComponentFactory` class, which inherits the `Component Supplier` class.
class CheapComponentFactory extends ComponentSupplier {
    constructor() {
        super(); // Call the constructor of the parent class.
        this.addComponent(new Transistor(5)); // Add transistor to components with price 5.
        this.addComponent(new Resistor(2)); // Add resistor to components with price 2.
        this.addComponent(new Capacitor(1)); // Add capacitor to components with cost 1.
    }
}
