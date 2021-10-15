import React from 'react';

function Card({ srcImg, name, species, origin, status }) {

   return (
      <div className="card shadow">

         <img
            className="card__img"
            src={srcImg}
            alt="Character rick and morty image"
         />

         <div className="card__data">
            <p className="card__text">
               <span style={{ fontWeight: 'bold' }}>Name:</span> { name }
            </p>

            <p className="card__text">
               <span style={{ fontWeight: 'bold' }}>Specie:</span> { species }
            </p>

            <p className="card__text">
               <span style={{ fontWeight: 'bold' }}>Origin:</span> { origin }
            </p>

            <p className="card__text">
               <span style={{ fontWeight: 'bold' }}>Status:</span> { status }
            </p>
         </div>

      </div>
   );
}

export { Card };
