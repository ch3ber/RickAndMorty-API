import React from 'react';
import { CardsGroup } from '../components/CardsGroup/CardsGroup';
import { getData } from '../services/API';
import { Error } from '../components/Error/Error';
const API = process.env.API;

const AppContext = React.createContext();

function AppProvider(props) {

   // traer datos de la api
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
   const [userSearchData, setUserSearchData] = React.useState();

   // pasar la busqueda del usuario
   function handleData() {
      const query = document.querySelector('.search-bar__bar');
      searchData(query.value);
   }

   // realizar la busqueda en la api
   const searchData = (query) => {
      (async () => {
         try {
            const json = await fetch(`${API}/?name=${query}`);
            const data = await json.json();
            setUserSearchData(data);
         } catch (error) {
            setUserSearchData('error');
         }
      })();
   }

   return (
      <AppContext.Provider value={{
         cards,
         userSearchData,
         handleData,
         searchData,
      }} >
         {props.children}
      </AppContext.Provider>
   );
}

export { AppContext, AppProvider };
