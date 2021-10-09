import React from 'react';
import {Card} from '../Card/Card';

function CardsGroup({characterModifier}) {
   return (
      <div className="cards-container__group">
         <Card
            character={characterModifier}
         />
         <Card
            character={1 + characterModifier}
         />
         <Card
            character={2 + characterModifier}
         />
      </div>
   );
}

export {CardsGroup};
