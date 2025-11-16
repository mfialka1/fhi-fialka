import { User } from './User';

export class Registracia {
    celeMeno: string;
    heslo: string;
    kontrolahesla: string;
    mail: string;
    telefon: string;

    constructor(
        celeMeno: string,
        heslo: string,
        kontrolahesla: string,
        mail: string,
        telefon: string,
    ) {
        this.celeMeno = celeMeno;
        this.heslo = heslo;
        this.kontrolahesla = kontrolahesla;
        this.mail = mail;
        this.telefon = telefon;

    }

    toUser(): User {
        return new User(this.celeMeno, this.heslo, this.mail, this.telefon);
    }
}