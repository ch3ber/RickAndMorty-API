import React from 'react';
import {getData} from '../../services/API';

function Card() {
   const {
      data,
      isLoading,
      results,
   } = getData();
   console.log(data);
   console.log(results);
   return (
      <div className="card">
         <img className="card__img" src={!isLoading ? results.image : ''} alt=""/>
         <div className="card__data">
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Name:</span> {!isLoading ? results.name : 'loading...'}</p>
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Specie:</span> {!isLoading ? results.species : 'loading...'}</p>
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Origin:</span> {!isLoading ? results.origin.name : 'loading...'}</p>
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Status:</span> {!isLoading ? results.status : 'loading...'}</p>
         </div>
      </div>
   );
}

export {Card};
