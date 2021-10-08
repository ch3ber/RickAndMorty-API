import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import { getData } from '../../services/API';

function Card({ character }) {
   const { data } = getData();
   const { userSearchData } = React.useContext(AppContext);

   const setAttribute = type => {
      if (userSearchData == undefined) {

         if (data == undefined) {
            return
         }
         if (data != undefined) {
            switch (type) {
               case 'src':
                  return data.results[character].image
               case 'name':
                  return data.results[character].name
               case 'specie':
                  return data.results[character].species
               case 'origin':
                  return data.results[character].origin.name
               case 'status':
                  return data.results[character].status
               default:
                  break;
            }
         }

      }

      if (userSearchData != undefined) {
         switch (type) {
            case 'src':
               return userSearchData.results[character].image
            case 'name':
               return userSearchData.results[character].name
            case 'specie':
               return userSearchData.results[character].species
            case 'origin':
               return userSearchData.results[character].origin.name
            case 'status':
               return userSearchData.results[character].status
            default:
               break;
         }
      }
   }

   return (
      <div className="card shadow">
         <img className="card__img" src={setAttribute('src')} alt="Character rick and morty image" />
         <div className="card__data">
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Name:</span> {setAttribute('name')}</p>
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Specie:</span> {setAttribute('specie')}</p>
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Origin:</span> {setAttribute('origin')}</p>
            <p className="card__text"><span style={{ fontWeight: 'bold' }}>Status:</span> {setAttribute('status')}</p>
         </div>
      </div>
   );
}

export { Card };
