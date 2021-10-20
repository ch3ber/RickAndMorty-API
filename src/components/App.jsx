import React from 'react';
import { AppProvider } from '../contexts/AppContext.js';
import { Header } from './Header/Header.jsx';
import { Search } from './Search/Search.jsx';
import { Footer } from './Footer/Footer.jsx';
import { CardsContainer} from './CardsContainer/CardsContainer.jsx';

function App() {
   return (
      <React.Fragment>

         <Header />

         <AppProvider>
            <Search />
            <CardsContainer />
         </AppProvider>

         <Footer />

      </React.Fragment>
   );
}

export { App };
