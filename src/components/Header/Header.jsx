import React from 'react';
import Logo from '../../assets/img/logo.svg';

function Header() {
   return (
      <header className="header">

         <img
            className="header__logo"
            src={ Logo }
            alt="Rick And Morty logo"
         />
         <h1 className="header__text">
            Find your favorite character from Rick And Morty serie
         </h1>

      </header>
   );
}

export { Header };
