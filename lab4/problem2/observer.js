class Observer {
    constructor(name) {
        this.name = name;
    }

    update(event) {
        const outputElement = document.getElementById("output");
        outputElement.innerHTML += `[${this.name}] Received notification: ${event.message}<br>`;
    }
}
