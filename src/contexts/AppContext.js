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

   // realizar la busqueda en la api
   const searchData = (query) => {
      (async () => {
         try {
            // no realizar multiples peticiones si no se escribe otro personaje a buscar
            if (searchBarValue == document.querySelector('.search-bar__bar').value && userSearchData.error != undefined) {
               return
            }
            //consulta a la api
            const json = await fetch(`${API}/api/character/?name=${query}`);
            const data = await json.json();
            setUserSearchData(data);
            //mostrar mensaje en caso de error
            if (data.error) {
               showError('No se encontro lo que buscas, busca otro personaje');
            }
         } catch (error) {
            showError('Algo salio mal, intenta de nuevo en otro momento');
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
