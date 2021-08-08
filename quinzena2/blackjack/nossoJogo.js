

  
  
     const carta = comprarCarta(); 
     const carta2 = comprarCarta();
     const carta3 = comprarCarta();
     const carta4 = comprarCarta();
  
  
  
  
 

    console.log("Bem-vindo(a) ao jogo de blackjack!")

    if(confirm("Quer iniciar uma nova rodada? ok(sim) ou cancelar(não)" )) {
      console.log(true)
      console.log("iniciar nova rodada:")

   
      
      function cartaDoUsuario() {
         const umaCarta = carta.texto
         const outraCarta = carta2.texto
         const umaCartaValor = carta.valor
         const outraCartaValor = carta2.valor
      
         const somaDasCartas = (umaCartaValor + outraCartaValor)
         console.log( `Usuário - cartas: ${umaCarta}, ${outraCarta} - pontuação ${somaDasCartas}.` )

      }
      

      function cartaDoComputador(){
         const umaCarta = carta3.texto
         const outraCarta = carta4.texto
         const umaCartaValor = carta3.valor
         const outraCartaValor = carta4.valor
      
         const somaDasCartas1 = (umaCartaValor + outraCartaValor)
         console.log( `Computador - cartas: ${umaCarta}, ${outraCarta} - pontuação ${somaDasCartas1}.` )
      }
      const somaUsuario = carta.valor + carta2.valor
      const somaComputador = carta3.valor + carta4.valor

      cartaDoUsuario()
      cartaDoComputador()

      if (somaUsuario > somaComputador){
         console.log("O usuário ganhou!")
      } else if (somaUsuario < somaComputador){
         console.log("O computador ganhou!")
      } else {
         console.log("Empate")
      } 

   


   } else {
      console.log(false)
      console.log("O jogo acabou!")
   }

   