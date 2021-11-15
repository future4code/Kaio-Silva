import {
    ListContainer,
    TituloContainer,
    PageContainer
} from './styles';

import axios from 'axios';
 import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/baseurl';

 export const Personas = () => {
     const [CharacterList,setCharacterList] = useState([]);
     return "list"
 }

 




export const ListPage = () =>{
   
   const getCharacterList =() =>{
       const URL = `${BASE_URL}/people`

       axios.get(URL)
       .then((res)=>{
           console.log(res.data.people)

       })
       .catch((err)=>{
           console.log(err.response)

       })
   }
   
   useEffect(()=>{
    getCharacterList()
   },[])
   

    return ( 
       <PageContainer>
   <TituloContainer> Lista de Personagens </TituloContainer>
   <ListContainer>Personagens</ListContainer>
   </PageContainer> )

}