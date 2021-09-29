import React from 'react';
import { CardsGroup } from '../components/CardsGroup/CardsGroup';
import { getData } from '../services/API';

const AppContext = React.createContext();

function AppProvider(props) {

   const { data } = getData();

   const [cards, setCards] = React.useState()
   React.useLayoutEffect(() => {
      window.addEventListener('resize', () => {
         if (screen.width > 1200 && cards == undefined) {
            setCards(<CardsGroup />)
         } else {
            setCards(undefined)
         }
      })
   }, [])

   const [searched, setSearched] = React.useState('');
   const onSearch = event => {
      let value = event.target.value;
      value = value.toLowerCase();
      setSearched(value);
   }

   return (
      <AppContext.Provider value={{
         cards,
         setCards,
         searched,
         setSearched,
         onSearch,
      }} >
         {props.children}
      </AppContext.Provider>
   );
}

export {AppContext, AppProvider};
