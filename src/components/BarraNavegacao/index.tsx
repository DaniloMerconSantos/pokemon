import React from "react";
import { Link } from "react-router-dom";
import "./BarraNavegacao.css";

const BarraNavegacao: React.FC = () => {
  return (
    <div data-testid="barraNavegacao" className="Navegacao">
      <ul className="Menu">
        <li>
          <Link to="/">Pokemons</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
      </ul>
    </div>
  );
};

export default BarraNavegacao;
