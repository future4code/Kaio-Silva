// Interpretação
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

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// 1° a)
// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// 2° a)
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}
// b) copia os dados que estão no objeto mencionado.

// 3°

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) false e undefined
// b) o primeiro console.log é para imprimir o que o bachender é dentro do objeto(pessoa), que imprimi false
// já o segundo console.log busca o altura no objeto(pessoa), que não existe, assim a resposta acaba sendo undefined.

// Escrito

// 1

const pessoa = {
	nome: "Samara", 
	apelidos: ["Sasa", "Samarinha", "Samarone"]
}


const dadosPessoa = {...pessoa,
	apelidos: ["mara", "sá", "lindinha"],
   }

 function imprimirAlgo(){
	
	console.log(`eu sou ${dadosPessoa.nome}, mas pode me chamar de: ${dadosPessoa.apelidos[0]}, ${dadosPessoa.apelidos[1]}
	ou ${dadosPessoa.apelidos[2]}.`)
}

 imprimirAlgo()

 // 2

 const pessoa1 = {
	nome: "kaio", 
  idade: 24, 
	profissao: "Desenvolvedor"
 }
	const pessoa2 = {
		nome:"Vera",
		idade: 45,
		profissao: "Professora"
	}

	function dadosPessoais(){
		const dados1 = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
		const dados2 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]

		console.log(dados1)
		console.log(dados2)

	}

	dadosPessoais()

// 3
	
const carrinho =[]

const fruta1 = {
	nome: "maça",
	disponibilidade: true,
} 

const fruta2 = {
	nome: "Pera",
	disponibilidade: true,
}

const fruta3 = {
	nome: "Uva",
	disponibilidade: true,
}

function carrinhoDeFrutas(){

	const carrinhoCheio = carrinho.push(fruta1,fruta2,fruta3)
	console.log(carrinhoCheio)

}

carrinhoDeFrutas()

console.log(carrinho)