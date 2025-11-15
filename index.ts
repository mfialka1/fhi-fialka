import { Registracia } from "./Classes/Registracia";
import { User } from "./Classes/User";
import express = require('express')
import {Request, Response} from "express";

const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//-------------------------------------------
// Registrácia používateľa (napr. po registrácii v systéme)
const registrovany = new Registracia(
    "Ján Fialka",
    "tajneheslo",
    "jan@example.com",
    "+421999888777",
    22,
    "Programovanie",
    "gay"
);

// Vytvorenie používateľa
const user = new User(registrovany);

// Simulácia prihlasenia (zadané údaje)
const zadaneMeno = "Ján Fialka";
const zadaneHeslo = "tajneheslo"; // ak zmeníš, prihlásenie zlyhá

// Pokus o prihlásenie
user.prihlasSa(zadaneMeno, zadaneHeslo);