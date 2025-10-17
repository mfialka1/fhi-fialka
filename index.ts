// src/index.ts
import * as readline from 'readline';
import { Registracia } from './Classes/Registracia';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const otazky = [
    "Zadaj celé meno: ",
    "Zadaj heslo: ",
    "Zadaj email: ",
    "Zadaj telefón: ",
    "Zadaj vek: ",
    "Zadaj zameranie: ",
    "Napíš niečo o sebe: "
];

const odpovede: string[] = [];

function pytaj(index: number) {
    if (index < otazky.length) {
        rl.question(otazky[index], (odpoved: string) => {
            odpovede.push(odpoved);
            pytaj(index + 1);
        });
    } else {
        const registracia = new Registracia(
            odpovede[0]!,
            odpovede[1]!,
            odpovede[2]!,
            odpovede[3]!,
            parseInt(odpovede[4]!),
            odpovede[5]!,
            odpovede[6]!
        );
        registracia.vypis();
        rl.close();
    }
}

pytaj(0);