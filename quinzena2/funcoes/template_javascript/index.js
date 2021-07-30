// interpretação
// 1°
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
// a) vai ser impresso o 10 e 50.
// b) não vai aparecer nada porque o console.log é necessário para algo ser imprimido no console.

// 2°
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// a) a função vai fazer com que o texto digitado fique em minusculo e verificar se ta incluso no texto a palava cenoura
// b) vai retorna true para as 3 saídas, porque a palavra "cenoura" está em todas, principalmente porque todo texto digitado vai retorna em minusculo.

// Escrita
// 1°
// a)
function imprimirTexto () {

console.log("Eu sou Kaio, tenho 24 anos, moro em Santa Maria Madalena e sou estudante.")

}

imprimirTexto()

// b)

function imprimirOutroTexto (nome,idade,cidade,profissão){

console.log("Eu sou "+nome+", tenho "+idade+" anos, moro em "+cidade+" e sou "+profissão+".")
}

imprimirOutroTexto("kaio",24,"Santa Maria Madalena","Desenvolvedor")

// 2°
// a)

function somarNumeros(num1,num2){
const resultado = num1 + num2
console.log("a soma da ",resultado )

}
somarNumeros(10,10)

// b)

function maiorOuIgual(num1,num2){
const numeros = num1 >= num2
console.log("é ",numeros)
}
maiorOuIgual(5,5)

// c)
function parOuNao(num1){
const numero = (num1 % 2) === 0 
console.log("esse número é par:",numero)
}
parOuNao(7)

// d)
function escreverTexto(texto){
const string = texto.toUpperCase()
console.log("esta mensagem tem "+texto.length+" de tamanho,",string)
}

escreverTexto("a Labenu é demais")

// 3

const numero1 = Number(prompt("digite um número:"))
const numero2 = Number(prompt("digite outro número:"))

function somaDosNumeros(){
const resultado = numero1 + numero2
console.log( "Soma:",resultado) 
}

function diferençaDosNumeros(){
const resultado = numero1 - numero2
console.log("Diferença:",resultado)    
}

function multiplicaçaoDosNumeros(){
const resultado = numero1 * numero2
console.log("Multiplicação:",resultado)    
}

function divisãoDosNumeros(){
const resultado = numero1 / numero2
console.log("Divisão:",resultado)    
}
console.log("numeros inseridos:",numero1, "e", numero2)
somaDosNumeros()
diferençaDosNumeros()
multiplicaçaoDosNumeros()
divisãoDosNumeros()


