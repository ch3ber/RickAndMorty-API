import React from 'react';
import {Card} from '../Card/Card';

function CardsGroup({group}) {
   let numberGroup = 0;
   return (
      <div className="cards-container__group">
         <Card
            character={numberGroup += group}
         />
         <Card
            character={numberGroup += 1 + group}
         />
         <Card
            character={numberGroup += group}
         />
      </div>
   );
}

export {CardsGroup};
