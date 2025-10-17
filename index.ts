import { Registracia } from "./Classes/Registracia";
import { User } from "./Classes/User";

// Registrácia používateľa (napr. po registrácii v systéme)
const registrovany = new Registracia(
    "Ján Fialka",
    "tajneheslo",
    "jan@example.com",
    "+421999888777",
    22,
    "Programovanie",
    "buzik"
);

// Vytvorenie používateľa
const user = new User(registrovany);

// Simulácia prihlasenia (zadané údaje)
const zadaneMeno = "Ján Fialka";
const zadaneHeslo = "tajneheslo"; // ak zmeníš, prihlásenie zlyhá

// Pokus o prihlásenie
user.prihlasSa(zadaneMeno, zadaneHeslo);
