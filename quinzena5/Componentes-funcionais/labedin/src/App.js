import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fmea2-1.fna.fbcdn.net/v/t1.6435-9/125313624_3715158838517330_8471737655352872314_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YE829_MLzOwAX_mOJa3&_nc_ht=scontent.fmea2-1.fna&oh=45c6f3fed640a41c87112143a070bc78&oe=615F5B8F" 
          nome="Kaio Vicente" 
          descricao="Olá, eu sou Kaio Vicente, aluno da Labenu, tenho 24 anos, sou de Santa Maria Madalena do estado Rio de Janeiro."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno
        imagem="https://www.tijucas.sc.leg.br/imagens/email2icon.png/image"
        nome="Email:kaiovicente@gmail.com"
        />
        <CardPequeno
        imagem="https://hzcoworkingspace.com.br/wp-content/uploads/2017/03/endereco-fiscal-dtq.jpg"
        nome="Endereço: Rua Banu de Labenu"
        
        />
    
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2014/04/honda-motos-logo-01.png" 
          nome="Honda" 
          descricao="Consultor de Vendas Moto Honda" 
        />
        
        <CardGrande 
          imagem="https://divulgaempregos.com.br/wp-content/uploads/2019/01/perbras-original.png" 
          nome="Perbras" 
          descricao="Jovem aprendiz Assistente Administrativo" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
