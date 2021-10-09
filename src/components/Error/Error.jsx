import React from 'react';

function Error({error}) {

   return (
      <p className="error-alert">Ocurrio un error debido a {error}</p>
   )
}

export {Error};
