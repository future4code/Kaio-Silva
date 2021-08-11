const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
// vai imprimir tudo que tiver no array usuarios.

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
//   vai imprimir os nomes que estão do array.

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
//   imprimi os indices que não tiver chijo como apelido.

  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeDosPets = pets.map((item, index, array) => {
      console.log(item.nome) 
 })

 const sóSalsicha = pets.filter((item, index, array) =>{
     return item.raca === "Salsicha"
 })
 console.log(sóSalsicha)

 const descontoClientePoodle = pets.filter((item, index, array)=>{
     return item.raca === "Poodle"
     
 })

  const imprimir = descontoClientePoodle.map((item, index, array) =>{
      console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
  })

  const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

  const nomeProdutos = produtos.map((item, index, array) => {
        //    console.log(item.nome) 
      }) 
  
      const arrayNomePreço = produtos.map((item, index, array) =>{
        
        return (item.nome, item.preco) 
          
      }) 
      console.log(arrayNomePreço)
    

      const soBebidas = produtos.filter((item, index, array) =>{
          return item.categoria === "Bebidas"
      })

    //   console.log(soBebidas)

      const queTemYpê = produtos.filter((item, index, array) =>{
          return item.nome.includes("Ypê")
      })
      console.log(queTemYpê)

      const fraseProdutos = queTemYpê.map((item, index, array) =>{
          console.log(`Compre ${item.nome} por ${item.preco} R$`)
      })