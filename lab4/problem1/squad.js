class Squad {
    constructor(units) {
        this.units = units;
    }

    *airAttackIterator() {
        const airAttack = "Air Attack";
        for (const unit of this.units) {
            if (unit.command === airAttack) {
                yield unit;
            }
        }
    }

    *fastMoveIterator() {
        const fastMove = "Fast Move";
        for (const unit of this.units) {
            if (unit.command === fastMove) {
                yield unit;
            }
        }
    }

    *meleeAttackIterator() {
        const meleeAttack = "Melee Attack";
        for (const unit of this.units) {
            if (unit.command === meleeAttack) {
                yield unit;
            }
        }
    }
}
