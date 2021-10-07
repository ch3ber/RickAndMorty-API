import React from 'react';
import {AppContext} from '../../contexts/AppContext';

function Search() {

   const {
      handleData,
   } = React.useContext(AppContext);

   return (
      <div className="search-bar">
         <input className="search-bar__bar shadow" type="search" placeholder="Search by name" />
         <button className="button search-bar__submit" onClick={handleData}>SS</button>
         <button className="button search-bar__gallery">::</button>
      </div>
   );
}

export {Search};
