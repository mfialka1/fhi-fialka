
export class Registracia {
    constructor(
        public celeMeno: string,
        public heslo: string,
        public mail: string,
        public telefon: string,
        public vek: number,
        public zameranie: string,
        public oSebe: string
    ) {}

    vypis(): void {
        console.log("\n✅ Registrácia úspešná:");
        console.log(`Meno: ${this.celeMeno}`);
        console.log(`Mail: ${this.mail}`);
        console.log(`Telefón: ${this.telefon}`);
        console.log(`Vek: ${this.vek}`);
        console.log(`Zameranie: ${this.zameranie}`);
        console.log(`O sebe: ${this.oSebe}`);
    }
}