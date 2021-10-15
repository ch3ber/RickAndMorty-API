import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import {getData} from '../../services/API';
import {Card} from '../Card/Card';

function CardsContainer() {

   const {
      data,
      dataLoading
   } = getData();
   const { userSearchData } = React.useContext(AppContext);

   return (
      <div className="cards-container">

         {dataLoading && <p>cargando tu wea uwu</p>}
         {(!dataLoading && !userSearchData) && data.results.map( character => (
            <Card
               key={character.id}
               srcImg={character.image}
               name={character.name}
               species={character.species}
               origin={character.origin.name}
               status={character.status}
            />
         ))}
         {userSearchData != undefined && userSearchData.results.map( character => (
            <Card
               key={character.id}
               srcImg={character.image}
               name={character.name}
               species={character.species}
               origin={character.origin.name}
               status={character.status}
            />
         ))}

      </div>
   );
}

export {CardsContainer};
