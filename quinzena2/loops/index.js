// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// // o código ao executar vai aumentando mais 1 na variavel i, e depois é somado, valor = valor + i, isso até o i ser igual a 5.
// // vai ser impresso 10.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// // vai executando o código até encontrar o maior número que está dentro do array, que vai ser imprimido o 30.
// // para isso poderia usar também nesse caso o , for (let i = 0, i < lista.length, i++).

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// // sempre que tiver dentro da condição, a linha vai acrescentar um "*", então, digitando 4, no final vai imprimir até ter "****"




// const quantosPets = Number(prompt("quantos bichinho de estimação você tem?"))
// nomes = []
// if (quantosPets === 0){
//     console.log("Que pena,você pode adotar um pet")
// } else if (quantosPets > 0) {


//     for (let i = 0; i < quantosPets; i++){
//        const nomeDoPet = prompt("Digite o nome do pet:") 
//        //console.log(nomeDoPet)
//        nomes[i] = nomeDoPet
//     }
//     console.log(nomes)

// } else {
//     console.log("digite um número igual ou maior que zero!")
// }


const array = [20, 40, 50, 60, 85, 90 , 120, 15 , 250, 110, 155 ]

function imprimirCadaArray (){
for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

}

// imprimirCadaArray()

function imprimirArrayDivididosPor10 (){
    for (let i = 0; i < array.length; i++){
        
            console.log(array[i] / 10)
    }

}

// imprimirArrayDivididosPor10()

function imprimirNovoArray(){
    const novoArray = []
    for (let i = 0; i < array.length; i++){
        
        if (array[i] % 2 === 0){
            n = 0
            novoArray[n] = array[i]
            n++

            console.log(novoArray)
        } else{}
        


    }


}

//  imprimirNovoArray()

function imprimiOutroArray (){
    for (let i = 0; i < array.length; i++){
        outroArray = []

        outroArray[i] = `o elemento do index ${i} é ${array[i]}`
        console.log(outroArray)
    }
}

// imprimiOutroArray()

function maiorEMenor (){
    let maior = 0
    let menor = 1000 
    for (let i = 0; i < array.length; i++){
        

        if (array[i] > maior){
            maior = array[i]
        } 
        
        if(array[i] < menor){
            menor = array[i]
        }
        console.log(`o maior número é ${maior} e o menor é ${menor}`)

    }
    return maior
    return menor
}

maiorEMenor()