import React from 'react';
import {getData} from '../../services/API';

function Card({character}) {
   const { data } = getData();
   console.log(data);

   return (
      <div className="card">
         <img className="card__img" src={data != null ? data.results[character].image : ''} alt=""/>
         <div className="card__data">
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Name:</span> {data != null ? data.results[character].name : 'loading...'}</p>
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Specie:</span> {data != null ? data.results[character].species : 'loading...'}</p>
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Origin:</span> {data != null ? data.results[character].origin.name : 'loading...'}</p>
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Status:</span> {data != null ? data.results[character].status : 'loading...'}</p>
         </div>
      </div>
   );
}

export {Card};
