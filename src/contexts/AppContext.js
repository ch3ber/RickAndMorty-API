import React from 'react';
const API = process.env.API;

const AppContext = React.createContext();

function AppProvider(props) {

   const [searchBarValue, setSearchBarValue] = React.useState(); // valor de la barra de busqueda

   // pasar la busqueda del usuario
   const handleData = () => {
      const queryElement = document.querySelector('.search-bar__bar');
      const query = queryElement.value;
      setSearchBarValue(query);
      if (searchBarValue == query) return; // retornar si se busca el mismo personaje
      searchInApi(`name=${query}`);
      setNextPage(2);
   }

   // mostrar una alerta de error
   const showError = errorInfo => {
      const paragraph = document.createElement('P');
      paragraph.innerText = `Ocurrio un error: ${errorInfo}`;
      paragraph.classList.add('error-alert');
      document.querySelector('body').appendChild(paragraph);
      setTimeout(() => {
         document.querySelector('body').removeChild(paragraph);
      }, 3500)
   }

   const [totalPages, setTotalPages] = React.useState(3);
   const [userSearchData, setUserSearchData] = React.useState(); // datos de la api segun la busqueda del usuario

   // realizar la busqueda en la api
   const searchInApi = query => {
      (async () => {
         try {
            //consulta a la api
            const json = await fetch(`${API}/api/character/?${query}`);
            const data = await json.json();
            //mostrar mensaje en caso de error
            if (data.error) {
               showError('No se encontro lo que buscas');
               return
            }
            if (data.error == undefined) {
               setUserSearchData(data);
            }
            setTotalPages(data.info.pages);
         } catch (error) {
            showError('Ocurrio un error, intenta de nuevo');
         }
      })();
   }

   const [nextPage, setNextPage] = React.useState(2); // pagina siguiente

   const onChangePage = isNext => {
      if (searchBarValue != undefined && searchBarValue != '') {
         if (isNext) {
            searchInApi(`page=${nextPage}&name=${searchBarValue}`);
            setNextPage(prevState => prevState + 1);
         }
         if (!isNext) {
            searchInApi(`page=${nextPage - 2}&name=${searchBarValue}`);
            setNextPage(prevState => prevState - 1);
         }
      }
      if (searchBarValue == undefined || searchBarValue == '') {
         if (isNext) {
            searchInApi(`page=${nextPage}`);
            setNextPage(prevState => prevState + 1);
         }
         if (!isNext) {
            searchInApi(`page=${nextPage - 2}`);
            setNextPage(prevState => prevState - 1);
         }
      }
   }

   return (
      <AppContext.Provider value={{
         userSearchData,
         handleData,
         nextPage,
         onChangePage,
         totalPages,
      }} >
         {props.children}
      </AppContext.Provider>
   );
}

export { AppContext, AppProvider };
