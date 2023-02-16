const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
// a)
const pokemonCopia = {
    ...pokemon1,
    nome : "Squirtle",
    tipo : 'Água',
}

console.log(pokemonCopia)

// b)

pokemon1.ataques = []

// c)

const ataque = {
    nome : 'Investida',
    dano : 40,
    tipo: 'Normal',
    precisao: 100
}

pokemon1.ataques.push(ataque)
console.log(pokemon1)

// d) 

pokemonCopia.ataques = [...pokemon1.ataques]
console.log(pokemonCopia)

// e)

const ataqueOriginal = {
    nome : 'Folha Navalha',
    dano : 45,
    tipo: 'Grama',
    precisao: 100,
}

pokemon1.ataques.push(ataqueOriginal)
console.log(pokemon1)

// f

const ataqueCopia = {
    nome : 'Jato de Água',
    dano : 40,
    tipo: 'Água',
    precisao: 100,
}

pokemonCopia.ataques.push(ataqueCopia)

// g)

console.log(pokemon1)
console.log(pokemonCopia)
