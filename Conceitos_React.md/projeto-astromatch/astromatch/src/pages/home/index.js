import {
    CandidadoDescrição,
    CanditadoName,
    HomeContainer, Imagem, PagContainer,
    ChooseButton,
    Buttons,
} from './styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../baseUrl.js/baseUrl';

export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const getProfile = () => {
        const URL = `${BASE_URL}/person`

        axios.get(URL)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response)
        })
    } 

  const escolherPerson = (boolean) =>{
      const URL = `${BASE_URL}/choose-person`
      const body = {
        "id": profile.id,
        "choice": boolean
    }
      axios.post(URL, body)
      .then((res)=>{
          getProfile()
      })
      .catch((err)=>{
        console.log(err.response)
      })
  }
  
    useEffect(()=> {
        getProfile()
    },[])



    return (
        <PagContainer>
        <HomeContainer>
        <Imagem src={profile.photo}/>
        <CanditadoName>{profile.name}, {profile.age}</CanditadoName>
        <CandidadoDescrição>{profile.bio}</CandidadoDescrição>
         <Buttons>
         <ChooseButton onClick={() => escolherPerson(false)}>❎</ChooseButton>
         <ChooseButton onClick={() => escolherPerson(true)}>💘</ChooseButton>
         </Buttons>
         </HomeContainer>
         </PagContainer>
    )}

