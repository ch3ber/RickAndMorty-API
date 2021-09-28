import React from 'react';
import Logo from '../../assets/img/logo.png';

function Header() {
   return (
      <header className="header">
         <img className="header__logo" src={Logo} alt="Rick And Morty logo" />
         <h1 className="header__text">Encuentra a tu personaje favorito de la serie Rick And Morty</h1>
      </header>
   );
}

export {Header};
