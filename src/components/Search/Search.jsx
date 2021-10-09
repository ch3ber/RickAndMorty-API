import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import menuIcon from '../../assets/img/menu.svg';
import searchIcon from '../../assets/img/search-icon.svg';

function Search() {

   const { handleData } = React.useContext(AppContext);

   return (
      <div className="search-bar">
         <input className="search-bar__bar shadow" type="text" placeholder="Search by name" />
         <button className="button search-bar__submit" onClick={handleData}><img src={searchIcon} alt="Search icon color white"/></button>
         <button className="button search-bar__gallery shadow"><img src={menuIcon} alt="Menu icon color white"/></button>
      </div>
   );
}

export { Search };
