"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        fullName() {
            console.log(`${this.name} (${this.realName})`);
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo a salvo";
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magento", "Magnus");
    const printName = (personaje) => {
        console.log(personaje.realName);
    };
    printName(wolverine);
    printName(magneto);
    wolverine.fullName();
    magneto.fullName();
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        static getClassName() {
            return this.name;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Capitán America", "Scott Lang");
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.getClassName());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado!!");
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado");
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("El nombre debe tener mínimo 3 caracteres");
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            return console.log(super.getFullname());
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine);
    console.log(wolverine.fullName);
    wolverine.fullName = "Jonathan";
    console.log(wolverine.fullName);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy la apocalipsis única");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName("Prueba");
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=app.js.map