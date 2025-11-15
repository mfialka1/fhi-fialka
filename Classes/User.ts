import { Registracia } from "./Registracia";

export class User {
    private registracia: Registracia;

    constructor(registracia: Registracia) {
        this.registracia = registracia;
    }

    prihlasSa(zadaneMeno: string, zadaneHeslo: string): void {
        if (zadaneMeno === this.registracia.celeMeno && zadaneHeslo === this.registracia.heslo)
        {
            console.log(`Prihlásenie úspešné. Vitaj, ${this.registracia.celeMeno}!`);
            this.registracia.vypisInfo();
        }
        else
        {
            console.log("Nesprávne meno alebo heslo. Prihlásenie zlyhalo.");
        }
    }
}