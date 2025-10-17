
class Registracia {
    celeMeno: string;
    heslo: string;
    mail: string;
    telefon: string;
    vek: number;
    zameranie: string;
    oSebe: string;

    constructor(
        celeMeno: string,
        heslo: string,
        mail: string,
        telefon: string,
        vek: number,
        zameranie: string,
        oSebe: string
    ) {
        this.celeMeno = celeMeno;
        this.heslo = heslo;
        this.mail = mail;
        this.telefon = telefon;
        this.vek = vek;
        this.zameranie = zameranie;
        this.oSebe = oSebe;
    }

    vypisInfo(): void {
        console.log(`Používateľ: ${this.celeMeno}, Vek: ${this.vek}, Zameranie: ${this.zameranie}`);
    }
}