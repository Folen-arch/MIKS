class Squad {
    constructor(units) {
        this.units = units;
    }

    *airAttackIterator() {
        for (const unit of this.units) {
            if (unit.command === "Air Attack") {
                yield unit;
            }
        }
    }

    *fastMoveIterator() {
        for (const unit of this.units) {
            if (unit.command === "Fast Move") {
                yield unit;
            }
        }
    }

    *meleeAttackIterator() {
        for (const unit of this.units) {
            if (unit.command === "Melee Attack") {
                yield unit;
            }
        }
    }
}
