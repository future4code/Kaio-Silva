// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
const altura = prompt("Altura?")
const largura = prompt("Largura?")

console.log(Number(altura) * Number(largura))

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt("Qual é o ano Atual?")
  const anoNasc = prompt("qual o seu ano de nascimento?")
  
  console.log(Number(anoAtual) - Number(anoNasc))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt("Digite o seu peso/kg:")
  const altura = prompt("Digite a sua altura/m:")
  console.log(Number(peso) / Number(altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite o seu e-mail:")
  console.log("Meu nome é "+nome+ ", tenho "+idade+" anos, e o meu email é "+email+".")

}
// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt("Digite uma cor favorita:")
  const cor2 = prompt("Digite mais uma favorita:")
  const cor3 = prompt("Digite a ultima favorita:")

  const coresFavoritas =[]
  coresFavoritas.push(cor1, cor2, cor3)
  console.log(coresFavoritas)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt("Digite alguma palavra")
  console.log(palavra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoTeatro = prompt("quanto custa este espetáculo de Teatro?")
  const ingresso = prompt("quanto é o ingresso desse espetáculo?")
  console.log(Number(custoTeatro) / Number(ingresso))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const primeira = prompt("primeira string:")
  const segunda = prompt("segunda string:")
  console.log(primeira.length === segunda.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const primeira = prompt("primeira string:")
  const segunda = prompt("segunda string:")
 console.log((primeira.length === segunda.length) &&
(primeira.toLowerCase().toUpperCase() === segunda.toLowerCase().toUpperCase())) 
}
// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = prompt("qual o ano atual?")
  const anoNasc = prompt("qual o seu ano de nascimento?")
  const carteiraIde = prompt("qual o ano que sua carteira de identidade foi emitida?")

  idade = Number(anoAtual) - Number(anoNasc)
primeiraCond = (((Number(anoAtual) - Number(carteiraIde)) >= 5) && (idade <= 20) )
segundaCond = (((Number(anoAtual) - Number(carteiraIde)) >= 10) && ((20 < idade) === (idade <= 50)) )
terceiraCond = ( ((Number(anoAtual) - Number(carteiraIde)) >= 15) && (idade > 50 ) )
console.log(primeiraCond || segundaCond || terceiraCond)  
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = prompt("digite um Ano:")

  primeiraCond = ((Number(ano) % 4) === 0 )
  segundaCond = ((Number(ano) % 100) !== 0 ) || ((Number(ano) % 400) === 0 )
  terceiraCond = (Number(ano) % 4 !== 0)

  console.log( primeiraCond && ((primeiraCond && segundaCond) || terceiraCond))

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idade = prompt("voce tem mais de 18 anos?")
  const ensinoMedio = prompt("voce tem ensino medio completo?")
  const exclusiva = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
console.log(idade.includes("sim") && ensinoMedio.includes("sim") && exclusiva.includes("sim") )
}