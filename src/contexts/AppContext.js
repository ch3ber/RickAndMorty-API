import React from 'react';
const API = process.env.API;

const AppContext = React.createContext();

function AppProvider(props) {

   // almacenar la busqueda del usuario
   const [userSearchData, setUserSearchData] = React.useState();

   // pasar la busqueda del usuario
   function handleData() {
      const query = document.querySelector('.search-bar__bar');
      setSearchBarValue(query.value);
      searchData(query.value);
   }

   // mostrar una alerta de error
   const showError = (errorInfo) => {
      const paragraph = document.createElement('P');
      paragraph.innerText = `Ocurrio un error: ${errorInfo}`;
      paragraph.classList.add('error-alert');
      document.querySelector('body').appendChild(paragraph);
      setTimeout(() => {
         document.querySelector('body').removeChild(paragraph);
      }, 3500)
   }

   //almacenar el valor de la barra de busqueda para compararlo
   const [searchBarValue, setSearchBarValue] = React.useState();
   const [searchError, setSearchError] = React.useState();

   // realizar la busqueda en la api
   const searchData = (query) => {
      (async () => {
         // retornar si no se esta buscando nada
         if (query.length < 1) {return }
         // no realizar multiples peticiones si no se escribe otro personaje a buscar
         if (searchBarValue == document.querySelector('.search-bar__bar').value && searchError != undefined) {
            return
         }
         try {
            //consulta a la api
            const json = await fetch(`${API}/api/character/?name=${query}`);
            const data = await json.json();
            //mostrar mensaje en caso de error
            if (data.error) {
               setSearchError(data.error);
               showError('No se encontro lo que buscas, busca otro personaje');
            }
            if (data.error == undefined) {
               setUserSearchData(data);
            }
         } catch (error) {
            setSearchError(data.error);
            showError('No se encontro lo que buscas, busca otro personaje');
         }
      })();
   }

   return (
      <AppContext.Provider value={{
         userSearchData,
         handleData,
         searchData,
      }} >
         {props.children}
      </AppContext.Provider>
   );
}

export { AppContext, AppProvider };
