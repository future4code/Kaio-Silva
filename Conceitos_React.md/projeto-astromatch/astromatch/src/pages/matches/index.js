import{
    PagContainer,
    HomeContainer,
    ListMathes,
    Avatar,
}  from './styles';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../baseUrl.js/baseUrl';
import axios from 'axios';

export const MatchesPage = () =>{
    
    const [matches, setMatches] = useState([]);

    const getMatches = () =>{
        const URL = `${BASE_URL}/matches`
       
        axios.get(URL)
        .then((res)=>{
            setMatches(res.data.matches)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

   

   const MapMatches = () =>{  
    const list = matches.map((match) => {
            return(
              <ListMathes>
                  <Avatar src={match.photo}/>
                  <h4> {match.name}</h4>
            </ListMathes>  
            )
            })
            return list
   }

   useEffect(() => {
       getMatches()
   },[])
   
   return(
        <PagContainer>
            <HomeContainer>
                {matches.length ? <MapMatches/> : <p> nada para ver aqui </p>}
            </HomeContainer>
        </PagContainer>
    )

}