let array
console.log('a. ', array)   // undefined

array = null
console.log('b. ', array) //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  //11

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array)  //19

const valor = array[i+6]
console.log('f. ', valor) //9

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÕNIBUS EM MIRROCOS,27


//ESCRITA 1°

const nomeDoUsuario = prompt("qual o seu nome?")
const emailDoUsuario = prompt("qul o seu e-mail?")

console.log("o email",emailDoUsuario,"foi cadastrado com sucesso. seja bem-vindo,"+nomeDoUsuario+"!")

//ESCRITA 2°

const comida = ["pizza","hamburguer","salgado","purê de batata","bolo de chocolate"]
console.log("a) ", comida)
console.log("b) ","Essas são as minhas comidas preferidas:",comida)

const novaComida = prompt("cite mais alguma comida preferida:")

comida.splice(1,1,novaComida)
console.log(comida)


//ESCRITA 3°

const listaDeTarefas = []
console.log("a)",listaDeTarefas)
const primeira = prompt("primeira tarefa:")
const segunda = prompt("segunda tarefa:")
const terceira = prompt("terceira tarefa:")

listaDeTarefas.push(primeira,segunda,terceira)
console.log("c) ", listaDeTarefas)

const tarefaFeita = prompt("digite o indice(0 ,1 ,2) da tarefa que voce ja fez?")
listaDeTarefas.splice(0,tarefaFeita)
console.log(listaDeTarefas)





