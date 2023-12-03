class Shawarma {
    constructor() {
        this.cost = 0;
        this.description = "Basic Shawarma";
    }

    calculateCost() {
        return this.cost;
    }

    getDescription() {
        return this.description;
    }
}

class ShawarmaDecorator {
    constructor(shawarma) {
        this.shawarma = shawarma;
    }

    calculateCost() {
        return this.shawarma.calculateCost();
    }

    getDescription() {
        return this.shawarma.getDescription();
    }
}

class TurkishShawarma extends Shawarma {
    constructor() {
        super();
        this.cost = 50;
        this.description = "Turkish Shawarma";
    }
}

class DubaiShawarma extends Shawarma {
    constructor() {
        super();
        this.cost = 60;
        this.description = "Dubai Shawarma";
    }
}

class HummusDecorator extends ShawarmaDecorator {
    constructor(shawarma) {
        super(shawarma);
        this.cost = 5;
        this.description = " + Hummus";
    }
}

class GarlicSauceDecorator extends ShawarmaDecorator {
    constructor(shawarma) {
        super(shawarma);
        this.cost = 3;
        this.description = " + Garlic Sauce";
    }
}
