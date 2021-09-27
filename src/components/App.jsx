import React from 'react';
import {Header} from './Header/Header.jsx';
import {Search} from './Search/Search.jsx';
import {Card} from './Card/Card.jsx';

function App() {
   return (
      <React.Fragment>
         <Header />
         <Search />
         <div className="cards-container">
            <div className="card">
               <Card />
            </div>
         </div>
      </React.Fragment>
   );
}

export {App};
