import React from 'react';
import { CardsGroup } from '../components/CardsGroup/CardsGroup';
import { getData } from '../services/API';
const API = process.env.API;

const AppContext = React.createContext();

function AppProvider(props) {

   const { data } = getData();

   // si estamos en desktop cambiar setear cards con html si no undefined
   const [cards, setCards] = React.useState()
   React.useLayoutEffect(() => {
      window.addEventListener('resize', () => {
         (window.innerWidth > 1200 && cards === undefined)
            ? setCards(<CardsGroup group={2} dataSearch={data} />)
            : setCards(undefined)
      })
   }, [])

   // almacenar la busqueda del usuario
   let userSearch;
   const [userSearchData, setUserSearchData] = React.useState();
   // comentario uwu
   const handleData = () => {
      const query = document.querySelector('.search-bar__bar');
      userSearch = query.value
      searchData()
   }
   
   const searchData = () => {
      if (userSearch.lengt >= 2) {return}
         (async () => {
            const json = await fetch(`${API}/?name=${userSearch}`);
            const data = await json.json();
            setUserSearchData(data);
            console.log(data);
         })();
   }

   return (
      <AppContext.Provider value={{
         cards,
         setCards,
         handleData,
         searchData,
         userSearchData,
      }} >
         {props.children}
      </AppContext.Provider>
   );
}

export {AppContext, AppProvider};
