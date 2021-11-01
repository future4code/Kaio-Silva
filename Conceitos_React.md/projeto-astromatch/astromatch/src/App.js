import{
  HomePage, MatchesPage,
} from './pages';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './baseUrl.js/baseUrl';


function App() {
  const [pageName, setPageName] = useState("home");

  const getPagina = () => {
    switch(pageName) {
      case "home":
        return <HomePage/>
        case "matches":
          return <MatchesPage />
          default:
            return <HomePage/>
    }
  }

  const mudarPagina =() =>{
    if(pageName === "home") {
      setPageName("matches");
    } else {
      setPageName ("home");
    }

  }

  const clearMatches = ()=> {
    const URL = `${BASE_URL}/clear`

    axios.put(URL)
    .then(()=>{
      alert("Limpeza feita")
      setPageName("home")
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }


  return (
  <div>
    {getPagina()}
    <button onClick= {mudarPagina} >{pageName === "home" ? "Ir para Matches" : "Ir para Home" }</button>
    <button onClick= {clearMatches}>Limpar Matches</button>
  </div>
  );
}

export default App;
