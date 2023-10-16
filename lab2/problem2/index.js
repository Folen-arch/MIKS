const computerBuilder = new ComputerBuilder();
computerBuilder.setMotherboard("ASUS ROG");
computerBuilder.setProcessor("Intel Core i9");
computerBuilder.setMemory("32GB");
computerBuilder.setGraphicsCard("NVIDIA GeForce RTX 3080");
computerBuilder.setSoundCard("Creative Sound Blaster");
computerBuilder.setDvdDrive("LG DVD Writer");

const computer = computerBuilder.build();

// We find the element where we will display the information
const outputElement = document.getElementById("output");

// We create elements for each piece of information and add them to outputElement
const motherboardElement = document.createElement("p");
motherboardElement.textContent = `Motherboard: ${computer.motherboard.model}`;
outputElement.appendChild(motherboardElement);

const processorElement = document.createElement("p");
processorElement.textContent = `Processor: ${computer.processor.model}`;
outputElement.appendChild(processorElement);

const memoryElement = document.createElement("p");
memoryElement.textContent = `Memory: ${computer.memory.size}`;
outputElement.appendChild(memoryElement);

const graphicsCardElement = document.createElement("p");
graphicsCardElement.textContent = `Video card: ${computer.graphicsCard ? computer.graphicsCard.model : "Missing"}`;
outputElement.appendChild(graphicsCardElement);

const soundCardElement = document.createElement("p");
soundCardElement.textContent = `Sound card: ${computer.soundCard ? computer.soundCard.model : "Missing"}`;
outputElement.appendChild(soundCardElement);

const dvdDriveElement = document.createElement("p");
dvdDriveElement.textContent = `DVD drive: ${computer.dvdDrive ? computer.dvdDrive.model : "Missing"}`;
outputElement.appendChild(dvdDriveElement);
