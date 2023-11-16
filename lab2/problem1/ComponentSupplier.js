// Declaration of the `ComponentSupplier` class, which has a constructor to create an array of `components`.
class ComponentSupplier {
    constructor() {
        this.components = {};
    }

    // Method to add components to `components`.
    addComponent(component) {
        this.components[component.name] = component;
    }

    // Method to get the price of a component by its name.
    getComponentPrice(componentName) {
        return this.components[componentName].price;
    }
}
