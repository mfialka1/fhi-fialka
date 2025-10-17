
class Zamestnanie {
    protected meno: string;

    constructor(meno: string) {
        this.meno = meno;
    }

    vykonajPracu(): void {
        console.log(` ${this.meno} vykonáva všeobecnú prácu.`);
    }
}

class Programator extends Zamestnanie {
    vykonajPracu(): void {
        console.log(` ${this.meno} programuje.`);
    }
}

const osoby: Zamestnanie[] = [
    new Programator("Matúš"),
    new Zamestnanie("Zuzana")
];

osoby.forEach(o => o.vykonajPracu());

const osoba1 = new Zamestnanie("Adam");
const osoba2 = new Programator("Jakub");


osoba1.vykonajPracu();
osoba2.vykonajPracu();