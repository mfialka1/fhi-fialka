const person1 = {
    name: 'Alice',
    age: 30
}

console.log(person1.name);

//------------------------------------------


function vypisFibonacci(pocet: number): void {
    if (pocet <= 0) {
        console.log("");
        return;
    }

    const fibonacci: number[] = [0, 1]; // tu už je 0 a 1 isté

    for (let i = 2; i < pocet; i++) {
        const pred1 = fibonacci[i - 1]; // vždy existuje
        const pred2 = fibonacci[i - 2]; // vždy existuje
        fibonacci.push(pred1 + pred2);
    }

    // ak pocet == 1, osekáme pole na [0]
    console.log(fibonacci.slice(0, pocet).join(", "));
}

vypisFibonacci(10);





