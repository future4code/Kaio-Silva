const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)  //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)  // true

console.log("d. ", typeof resultado) // boolean

let primeiroNumero = prompt("Digite um numero!")   
let segundoNumero = prompt("Digite outro numero!")
//const primeiroNumero = Number( prompt("Digite um numero!"))   
//const segundoNumero = Number( prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero

console.log(soma)
// para resolver tem que converter os números para Number, e mudar let para const.

// escrito Exercício 1°

const idadeUsuario = Number( prompt("qual sua idade?") )
const idadeAmigo = Number( prompt("qual a idade do seu melhor amigo?"))
console.log("sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo)

const diferença = idadeUsuario - idadeAmigo
console.log("a diferença de idade é", diferença,"anos")

// Escrito Exercício 2°

const numPar = Number( prompt("escolha um número Par:"))
const resto = numPar % 2
console.log("o resto é", resto)  // para números pares o resto sempre vai dar 0(zero).
// caso escolha um número ímpar, o resto vai ser sempre 1(um).

// Escrito Exercício 3°

const idadeAnos = Number( prompt("qual sua idade?"))

const idadeMeses = idadeAnos * 12
const idadeDias = idadeAnos * 365
const idadeHoras = idadeAnos * 8760

console.log("voce tem",idadeAnos,"anos.")
console.log("voce tem",idadeMeses,"meses de vida!")
console.log("voce tem",idadeDias,"dias de vida!")
console.log("voce tem",idadeHoras,"horas de vida!")

//  Escrito Exercício 4°

const numPrimeiro = Number(prompt("Digite o primeiro número:"))
const numSegundo = Number(prompt("Digite o segundo número:"))
console.log("O primeiro numero é maior que segundo?", numPrimeiro > numSegundo)
console.log("O primeiro numero é igual ao segundo?", numPrimeiro === numSegundo)
console.log("O primeiro numero é divisível pelo segundo?",(numPrimeiro % numSegundo) === 0)
console.log("O segundo numero é divisível pelo primeiro?", (numSegundo % numPrimeiro) === 0)
