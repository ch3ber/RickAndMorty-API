import React from 'react';
import {AppContext} from '../../contexts/AppContext';

function Search() {

   const {
      onSearch,
   } = React.useContext(AppContext);

   return (
      <React.Fragment>
         <input className="search" type="search" placeholder="Search..." onChange={onSearch}/>
         <button>See More</button>
      </React.Fragment>
   );
}

export {Search};
