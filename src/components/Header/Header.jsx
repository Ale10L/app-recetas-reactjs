import React from "react";
import Router from "../../Router";

/*class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a className="a" href="/">APP-RECETAS</a>
          <a className="a" href="/recetas">Recetas</a>
          <a className="a" href="/utensilios">Utensilios</a>
          <a className="a" href="/fotos">Fotos</a>
          <a className="a" href="/reseñas">Reseñas</a>
        </nav>
      </div>
    );
  }
}*/

const Header = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

export default Header;
