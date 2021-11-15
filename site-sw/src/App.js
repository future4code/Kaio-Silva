import { useState } from 'react/cjs/react.development';
import {
 ListPage, DetailPage
} from './pages';

function App() {

  const [PageName, setPageName] = useState("CharacterListPage");

  const selectPage = () => {
    switch(PageName){
      case "CharacterListPage":
        return <ListPage/>
        case "CharacterDetailPage":
        return <DetailPage />
        default:
          return <ListPage/>
    }
  };

  const changePage = () => {
    if(PageName === "CharacterListPage"){
      setPageName("CharacterDetailPage")
    } else {
      setPageName("CharacterListPage")
    }
  }
  return (
    <div>
      {selectPage()}
      <button onClick={changePage}> {PageName === "CharacterListPage" ? "Ir para detalhes" : "Ir para Personagens"}</button>
    </div>
  )
} 



export default App;
