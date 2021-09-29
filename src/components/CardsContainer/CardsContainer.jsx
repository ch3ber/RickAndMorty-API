import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import {CardsGroup} from '../CardsGroup/CardsGroup';

function CardsContainer() {

   const {
      cards,
      searched,
   } = React.useContext(AppContext);

   return (
      <div className="cards-container">
         <CardsGroup group={1} cardsSearched={searched} />
         {(screen.width > 1200 && <CardsGroup group={2} cardsSearched={searched} />) || cards}
      </div>
   );
}

export {CardsContainer};
