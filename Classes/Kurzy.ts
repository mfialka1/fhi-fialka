export class Kurzy {
    nazovKurzu: string;
    popisKurzu: string;
    obrazok: string;

    constructor(
        nazovKurzu: string,
        popisKurzu: string,
        obrazok: string,
    ) {
        this.nazovKurzu = nazovKurzu;
        this.popisKurzu = popisKurzu;
        this.obrazok = obrazok;
    }
}

export  const kurzyList: Kurzy[] = [
    new Kurzy(
        "Kurz programovania",
        "Nauč sa základy programovania v moderných jazykoch.",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
    ),
    new Kurzy(
        "Kurz grafického dizajnu",
        "Získaj znalosti digitálneho dizajnu a práce v Figma a Adobe.",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159"
    ),
    new Kurzy(
        "Kurz marketingu",
        "Objav techniky tvorby obsahu a online propagácie.",
        "https://images.unsplash.com/photo-1580136607420-8d1a3fd223df"
    )
];