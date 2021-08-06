// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// a) o teste que realiza é saber se o resto das divisões vai ser zero ou não.
// b) os números que divididos por 2 dá resto zero.
// c) os números que divididos por 2 dá resto diferente de zero.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//  // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) serve para escolher uma fruta, e assim como resultado vai imprimir a fruta escolhida e o seu preço.
// b) "O preço da fruta ", maçã, " é ", "R$ ", 2.25
// c) como tiraria o breack, o código iria continuar rodando, fazendo assim imprimir a fruta Pêra e o valor de 5 reais que está no default.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) pedindo que o usuário digite um número, e esse número vai estar sendo transformado em Number.
// b) para 10, a mensagem imprimida seria que esse número passo no teste, e também retornaria um erro,
// porque o console.log que está fora do if não seria executado porque está buscando uma variável que está dentro do if.
// e para o -10, só retornaria esse mesmo erro já que -10 é menor que zero.
// c) sim terá um erro, porque uma variável dentro de um bloco não pode ser chamada por algo de fora do bloco, só o contrário que pode.





// const idade = Number(prompt("qual é sua idade?"))

// if(idade >= 18){
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// }

// const turnoDaAula = prompt("qual é o seu Turno escolar? digitar M (matutino) ou V (Vespertino) ou N (Noturno).")
// if (turnoDaAula.toUpperCase() === "M"){
//     console.log("Bom Dia!")
// } else if (turnoDaAula.toUpperCase() === "V"){
//     console.log("Boa Tarde")
// } else if(turnoDaAula.toUpperCase() === "N"){
//     console.log("Boa Noite")
// } else {
//     console.log("Digite uma das opções dadas")
// }

// const turnoDaAula = prompt("qual é o seu Turno escolar? digitar M (matutino) ou V (Vespertino) ou N (Noturno).")
//  switch (turnoDaAula){
//    case 'M' :
//     console.log("Bom Dia!")
//     break;
//    case 'V' :
//     console.log("Boa Tarde!")
//     break
//    case 'N' :
//     console.log("Boa Noite!")
//     break
//    default :
//     console.log("Digite uma das opções dadas")
//     break
// }



const generoFilme = prompt("qual o gênero de filme que deseja assistir?")

if (generoFilme === "fantasia") {
    const ingresso = prompt("e qual é o valor do ingresso?")
    if (ingresso < 15){
        console.log("Bom Filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
} else {
    console.log("meu amigo(a) só gosta do gênero fantasia.")
} 