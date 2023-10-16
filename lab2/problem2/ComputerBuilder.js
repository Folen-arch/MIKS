class ComputerBuilder {
    constructor() {
        // Initialize all components to null.
        this.motherboard = null;
        this.processor = null;
        this.memory = null;
        this.graphicsCard = null;
        this.soundCard = null;
        this.dvdDrive = null;
    }

    // These methods set the respective components with a given model.
    setMotherboard(model) {
        this.motherboard = new Motherboard(model);
    }

    setProcessor(model) {
        this.processor = new Processor(model);
    }

    setMemory(size) {
        this.memory = new Memory(size);
    }

    setGraphicsCard(model) {
        this.graphicsCard = new GraphicsCard(model);
    }

    setSoundCard(model) {
        this.soundCard = new SoundCard(model);
    }

    setDvdDrive(model) {
        this.dvdDrive = new DvdDrive(model);
    }

    // This method builds and returns the constructed computer.
    build() {
        return {
            motherboard: this.motherboard,
            processor: this.processor,
            memory: this.memory,
            graphicsCard: this.graphicsCard,
            soundCard: this.soundCard,
            dvdDrive: this.dvdDrive,
        };
    }
}
