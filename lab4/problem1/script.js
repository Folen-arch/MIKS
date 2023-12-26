let squad1 = new Squad([]);
let squad2 = new Squad([]);

const squads = [squad1, squad2];

const allUnits = [new Unit("Infantry", "Melee Attack", 0), new Unit("Archer", "Air Attack", 0), new Unit("Cavalry", "Fast Move", 0), new Unit("Artillery", "Air Attack", 0)];

function displayUnits(iterator, containerId) {
    const container = document.getElementById(containerId);
    const ul = container.querySelector("ul");
    ul.innerHTML = "";

    for (const unit of iterator) {
        const li = document.createElement("li");
        li.textContent = `${unit.type} - ${unit.command} (Count: ${unit.count})`;
        ul.appendChild(li);
    }
}

function displaySquad(iterator, containerId) {
    const container = document.getElementById(containerId);
    const ul = container.querySelector("ul");
    ul.innerHTML = "";

    for (const unit of iterator) {
        const li = document.createElement("li");
        li.textContent = `${unit.type} (Count: ${unit.count})`;
        ul.appendChild(li);
    }
}

function executeCommands() {
    const airAttackCheckbox = document.getElementById("airAttackCheckbox");
    const fastMoveCheckbox = document.getElementById("fastMoveCheckbox");
    const meleeAttackCheckbox = document.getElementById("meleeAttackCheckbox");

    if (airAttackCheckbox.checked) {
        displayUnits(squad1.airAttackIterator(), "airAttackUnits");
        applyEffect("airAttackUnits");
    }

    if (fastMoveCheckbox.checked) {
        displayUnits(squad2.fastMoveIterator(), "fastMoveUnits");
        applyEffect("fastMoveUnits");
    }

    if (meleeAttackCheckbox.checked) {
        displayUnits(squad1.meleeAttackIterator(), "meleeAttackUnits");
        applyEffect("meleeAttackUnits");
    }
}

function randomizeUnits() {
    squads.forEach((squad) => {
        squad.units = [];
    });

    allUnits.forEach((unit) => {
        unit.count = Math.floor(Math.random() * 100) + 1;
        const randomSquadIndex = Math.floor(Math.random() * squads.length);
        squads[randomSquadIndex].units.push(unit);
    });

    displaySquad(squad1.airAttackIterator(), "squad1");
    displaySquad(squad2.fastMoveIterator(), "squad2");
    displayUnits(squad1.airAttackIterator(), "airAttackUnits");
    displayUnits(squad2.fastMoveIterator(), "fastMoveUnits");
    displayUnits(squad1.meleeAttackIterator(), "meleeAttackUnits");
}

function applyEffect(containerId) {
    const container = document.getElementById(containerId);
    container.style.backgroundColor = "lightgreen";
    setTimeout(() => {
        container.style.backgroundColor = "";
    }, 1000);
}
