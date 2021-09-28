import React from 'react';
import {Header} from './Header/Header.jsx';
import {Search} from './Search/Search.jsx';
import {Footer} from './Footer/Footer.jsx';
import {CardsGroup} from './CardsGroup/CardsGroup.jsx';

function App() {
   return (
      <React.Fragment>
         <Header />
         <Search />
         <div className="cards-container">
            <CardsGroup />
            {screen.width > 768 && (
               <CardsGroup />
            )}
         </div>
         <Footer />
      </React.Fragment>
   );
}

export {App};
