import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import {getData} from '../../services/API';
import {Card} from '../Card/Card';
import leftArrow from '../../assets/img/left-arrow.svg';
import rightArrow from '../../assets/img/right-arrow.svg';

function CardsContainer() {

   const {
      data,
      dataLoading
   } = getData();
   const {
      userSearchData,
      nextPage,
      onChangePage,
      totalPages
   } = React.useContext(AppContext);

   return (
      <main className="main">

         <img
            className={ nextPage > 2 ? "main__arrow main__arrow--show main__arrow--left" : "main__arrow main__arrow--left" }
            src={ leftArrow }
            alt="left arrow color aqua"
            onClick={ () => onChangePage(false) }
         />

         <div className="cards-container">

            { dataLoading && <p>cargando tu wea uwu</p> }
            { (!dataLoading && !userSearchData) && data.results.map(character => (
               <Card
                  key={character.id}
                  srcImg={character.image}
                  name={character.name}
                  species={character.species}
                  origin={character.origin.name}
                  status={character.status}
               />
            )) }
            { userSearchData != undefined && userSearchData.results.map(character => (
               <Card
                  key={character.id}
                  srcImg={character.image}
                  name={character.name}
                  species={character.species}
                  origin={character.origin.name}
                  status={character.status}
               />
            )) }

         </div>

         <img
            className={nextPage <= totalPages ? "main__arrow main__arrow--right main__arrow--show" : "main__arrow main__arrow--right"}
            src={ rightArrow }
            alt="right arrow color aqua"
            onClick={ () => onChangePage(true) }
         />

      </main>
   );
}

export {CardsContainer};
