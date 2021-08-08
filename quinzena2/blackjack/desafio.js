

     const cartaPlayer = comprarCarta();
     const cartaPlayer2 = comprarCarta();

     const pontuacaoPlayer = (cartaPlayer.valor + cartaPlayer2.valor )

     const outraNovaCartaPLayer = comprarCarta();

     const novaCartaPlayer = comprarCarta();
     const novaCartaPlayer2 = comprarCarta();
     
     const novaPontuacaoPlayer = ( novaCartaPlayer.valor + novaCartaPlayer2.valor)


   

    console.log("Bem-vindo(a) ao jogo de blackjack!")

    if(confirm("Quer iniciar uma nova rodada? ok(sim) ou cancelar(não)" )) {
      console.log(true)
      console.log("iniciar nova rodada:")

      

   if( cartaPlayer.valor + cartaPlayer2.valor < 22){

      
         const PrimeiraCarta = cartaPlayer.texto
         const SegundaCarta = cartaPlayer2.texto
      
            
         console.log( `Usuário - cartas: ${PrimeiraCarta}, ${SegundaCarta} - pontuação ${pontuacaoPlayer}.` )

        
      
   } else {

      
        
         const PrimeiraCarta = novaCartaPlayer.texto
         const SegundaCarta = novaCartaPlayer2.texto
         
         console.log("o Usuário teve suas cartas sorteadas novamente!")
         console.log( `Usuário - cartas: ${PrimeiraCarta}, ${SegundaCarta} - pontuação ${novaPontuacaoPlayer}.` )



   }


   const cartaPc = comprarCarta();
   const cartaPc2 = comprarCarta();
   const pontuacaoPc = (cartaPc.valor + cartaPc2.valor)



   const novaCartaPc = comprarCarta();
   const novaCartaPc2 = comprarCarta();
   const novaPontuacaoPc = (novaCartaPc.valor + novaCartaPc2.valor)





if(cartaPc.valor + cartaPc2.valor < 22) {

         const cartaPrimeira = cartaPc.texto
         const cartaSegunda = cartaPc2.texto
      
         
          console.log( `Computador - cartas: ${cartaPrimeira}, ${cartaSegunda} - pontuação ${pontuacaoPc}.` )

    } else {
      
         const cartaPrimeira = novaCartaPc.texto
         const cartaSegunda = novaCartaPc2.texto

         console.log("o PC teve suas cartas sorteadas novamente!")
          console.log( `Computador - cartas: ${cartaPrimeira}, ${cartaSegunda} - pontuação ${novaPontuacaoPc}.` )

      
    }
   

//       if(pontuacaoPlayer > 21){

//       if (novaPontuacaoPlayer > pontuacaoPc){
//          console.log("O usuário ganhou!")
//       } else if ( novaPontuacaoPlayer < pontuacaoPc){
//          console.log("O computador ganhou!")
//       } else {
//          console.log("Empate")
//       }
//     } else if (pontuacaoPc > 21){

//          if (pontuacaoPlayer > novaPontuacaoPc){
//             console.log("O usuário ganhou!")
//          } else if ( pontuacaoPlayer < novaPontuacaoPc){
//             console.log("O computador ganhou!")
//          } else {
//             console.log("Empate")


//       }
//    } else { 

//       if (pontuacaoPlayer > pontuacaoPc){
//          console.log("O usuário ganhou!")
//       } else if ( pontuacaoPlayer < pontuacaoPc){
//          console.log("O computador ganhou!")
//       } else {
//          console.log("Empate")

//    }

// }

      if(pontuacaoPlayer > 21){


         confirm(
            `Suas cartas são ${novaCartaPlayer.texto}, ${novaCartaPlayer2.texto}. A carta revelada do computador é ${cartaPc.texto}.` +
            "\n"+  // \n faz pular a linha
            "Deseja comprar mais uma carta?"
         )


      if (novaPontuacaoPlayer > pontuacaoPc){
         
         console.log("O usuário ganhou!")
      } else if ( novaPontuacaoPlayer < pontuacaoPc){
         console.log("O computador ganhou!")
      } else {
         console.log("Empate")
      }
    } else if (pontuacaoPc > 21){

      confirm(
         `Suas cartas são ${cartaPlayer.texto}, ${cartaPlayer2.texto}. A carta revelada do computador é ${novaCartaPc.texto}.` +
         "\n"+  // \n faz pular a linha
         "Deseja comprar mais uma carta?"
      )

         if (pontuacaoPlayer > novaPontuacaoPc){
            console.log("O usuário ganhou!")
         } else if ( pontuacaoPlayer < novaPontuacaoPc){
            console.log("O computador ganhou!")
         } else {
            console.log("Empate")


      }
   } else { 

      confirm(
         `Suas cartas são ${cartaPlayer.texto}, ${cartaPlayer2.texto}. A carta revelada do computador é ${cartaPc.texto}.` +
         "\n"+  // \n faz pular a linha
         "Deseja comprar mais uma carta?"
      )



      if (pontuacaoPlayer > pontuacaoPc){
         console.log("O usuário ganhou!")
      } else if ( pontuacaoPlayer < pontuacaoPc){
         console.log("O computador ganhou!")
      } else {
         console.log("Empate")

   }

}


   } else {
      console.log(false)
      console.log("O jogo acabou!")
   }

   