import React from 'react';
import { AppProvider } from '../contexts/AppContext.js';
import {Header} from './Header/Header.jsx';
import {Search} from './Search/Search.jsx';
import {Footer} from './Footer/Footer.jsx';
import {CardsContainer} from './CardsContainer/CardsContainer.jsx';

function App() {

   return (
      <React.Fragment>
         <AppProvider>

            <Header />
            <Search />
            <CardsContainer />
            <Footer />

         </AppProvider>
      </React.Fragment>
   );
}

export {App};
