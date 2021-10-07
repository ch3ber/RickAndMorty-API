import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import {CardsGroup} from '../CardsGroup/CardsGroup';

function CardsContainer() {

   const {
      cards,
   } = React.useContext(AppContext);

   return (
      <div className="cards-container">
         <CardsGroup group={1} />

         {/* si estamos en un desktop rederizar otro grupo de cards, actualizar los grupos de cards cuando se rezise la pantalla */}
         {(window.innerWidth > 1200 && <CardsGroup group={2} />) || cards}

      </div>
   );
}

export {CardsContainer};
