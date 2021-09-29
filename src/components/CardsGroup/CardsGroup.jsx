import React from 'react';
import {Card} from '../Card/Card';

function CardsGroup({group, cardsSearched}) {
   let numberGroup = 0;
   return (
      <div className="cards-container__group">
         <Card
            character={numberGroup += group}
            cardsSearched={cardsSearched}
         />
         <Card
            character={numberGroup += 1 + group}
            cardsSearched={cardsSearched}
         />
         <Card
            character={numberGroup += group}
            cardsSearched={cardsSearched}
         />
      </div>
   );
}

export {CardsGroup};
