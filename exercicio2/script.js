const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️

const primeiroNome = filme.elenco[0]
console.log(primeiroNome)

const ultimoIndice = (filme.elenco[3])
console.log(ultimoIndice)

const transmissoes = filme.transmissoesHoje
console.log(transmissoes)

const canalBrasil = filme.transmissoesHoje[1].horario
console.log(canalBrasil)