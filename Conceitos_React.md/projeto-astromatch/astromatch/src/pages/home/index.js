import {
    CandidadoDescrição,
    CanditadoName,
    HomeContainer, Imagem, PagContainer,
    
} from './styles';
import Foto from '../home/img/eu.jpeg';

export const HomePage = () => {
    return (
        <PagContainer>
    <HomeContainer>
        <Imagem src={Foto}/>
        <CanditadoName>Kaio</CanditadoName>
        <CandidadoDescrição>Eu sou casado!</CandidadoDescrição>
         </HomeContainer>
         </PagContainer>
    )}