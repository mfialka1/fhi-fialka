import { Registracia } from "./Classes/Registracia";
import { User } from "./Classes/User";
import { kurzyList } from './Classes/Kurzy';
import express from 'express';
import { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000;

// Globálna premenná pre uloženie používateľa
let user: User | null = null;

// -----------------------------------------
// Middleware pre parsing JSON a URL-encoded dát
// -----------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------
// ROUTES – definované pred static middleware
// -----------------------------------------



// HLAVNÁ STRÁNKA – tu si môžeš dať niečo iné
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, './front/index.html'));
});

// REGISTRÁCIA – presunuté z hlavnej
app.get('/registracia', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../front/registracia.html')); // tu je tvoj formulár
});

app.post('/registracia', (req: Request, res: Response) => {
    const { celeMeno, heslo, kontrolaheslo, mail, telefon } = req.body;

    if (heslo !== kontrolaheslo) {
        return res.status(400).send('Heslá sa nezhodujú');
    }

    const registrovany = new Registracia(celeMeno, heslo, kontrolaheslo, mail, telefon);
    user = registrovany.toUser();

    res.redirect('/profil');
});

// PROFIL
app.get('/profil', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, './front/profil.html'));
});

app.get('/profil-data', (req: Request, res: Response) => {
    if (!user) {
        return res.status(404).json({ error: 'Používateľ neexistuje' });
    }

    res.json({
        celeMeno: user.celeMeno,
        mail: user.mail,
        telefon: user.telefon,
        vek: user.vek ?? '',
        zameranie: user.zameranie ?? '',
        oSebe: user.oSebe ?? ''
    });
});

// KURZY
app.get('/kurzy', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, './front/kurzy.html'));
});

app.get("/api/kurzy", (req: Request, res: Response) => {
    res.json(kurzyList);
});

// TEST ROUTE (voliteľné)
app.get('/kurzy-test', (req, res) => {
    res.send('<h1>Test Kurzy</h1>');
});

// -----------------------------------------
// Static middleware – až nakoniec!
// -----------------------------------------

app.use(express.static(path.join(__dirname, './front'), { index: false }));  //islo to s ..
// -----------------------------------------
// Spustenie servera
// -----------------------------------------
app.listen(port, () => {
    console.log(`Server beží na http://localhost:${port}`);
});

// -----------------------------------------
// DEBUG cesty
// -----------------------------------------
console.log("RUNNING FROM:", __dirname);
console.log("STATIC PATH:", path.join(__dirname, '../front'));
console.log(path.join(__dirname, './front/kurzy.html'));
console.log(path.join(__dirname, './front/registracia.html'));
