// EXERCÍCIO 01
function inverteArray(array) {
  console.log(array)
  let tamanhoDoArray = array.length
  for (let i = tamanhoDoArray - 1; i >= 0; i--) {
    array.push(array[i])
  }
  array.splice(0, array.length / 2)
  console.log(array)
  return array
}
inverteArray()


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  novo = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      novo.push(array[i] * array[i])
    }

  }
  return novo

}
retornaNumerosParesElevadosADois()

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  pares = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i])
    }
  }
  return pares
}

retornaNumerosPares()

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }

  }
  return maiorNumero
}
retornaMaiorNumero()

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}
retornaQuantidadeElementos()

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const respostas = [booleano1 && booleano2 && !booleano4, (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1), !(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

  return respostas
}
retornaExpressoesBooleanas()

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const novoArray = []
  for (let number = 0; novoArray.length < n; number++) {
    if (number % 2 === 0) {
      novoArray.push(number)
    }
  }
  return novoArray

}
retornaNNumerosPares()

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if (a === b && b === c) {
    return 'Equilátero'
  } else if ((a !== b) && (a !== c) && (b !== c)) {
    return 'Escaleno'
  } else {
    return 'Isósceles'
  }
}
checaTriangulo()

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  if (num1 > num2) {
    const objeto = {
      maiorNumero: num1,
      maiorDivisivelPorMenor: num1 % num2 === 0,
      diferenca: num1 - num2
    }
    return objeto
  } else if (num1 < num2) {
    const objeto = {
      maiorNumero: num2,
      maiorDivisivelPorMenor: num2 % num1 === 0,
      diferenca: num2 - num1
    }
    return objeto
  } else {
    const objeto = {
      maiorNumero: num1,
      maiorDivisivelPorMenor: num2 % num1 === 0,
      diferenca: num2 - num1
    }
    return objeto
  }

}
comparaDoisNumeros()


// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  const len = array.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: Number(2006),
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filme
}
filmeFavorito()

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: Number(2006),
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}
imprimeChamada()

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return retangulo
}
criaRetangulo()

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const anonimo = { ...pessoa, nome: "ANÔNIMO" }
  return anonimo
}
anonimizaPessoa()
// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
