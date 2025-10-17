import { Registracia } from "./Registracia";

export class User {
    private meno: string;
    private heslo: string;
    private registracia: Registracia;

    constructor(registracia: Registracia) {
        this.meno = registracia.celeMeno;
        this.heslo = registracia.heslo;
        this.registracia = registracia;
    }

    prihlasSa(zadaneMeno: string, zadaneHeslo: string): void {
        if (zadaneMeno === this.meno && zadaneHeslo === this.heslo) {
            console.log(`✅ Prihlásenie úspešné. Vitaj, ${this.meno}!`);
            this.registracia.vypisInfo();
        } else {
            console.log("❌ Nesprávne meno alebo heslo. Prihlásenie zlyhalo.");
        }
    }
}
