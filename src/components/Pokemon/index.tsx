import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

import TipoPokemon from "../TipoPokemon";
import IResource from "../../models/resource";
import "./Pokemon.css";

interface IPokemonProps {
  name: string;
  image: string;
  type: IResource[];
  id: number;
  favorito: boolean;
  alterarFav: (id: number) => void;
}

const Pokemon: React.FC<IPokemonProps> = ({
  name,
  image,
  type,
  id,
  favorito,
  alterarFav,
}) => {
  return (
    <Card className="m-2 h-100">
      <CardBody className="d-flex justify-content-between">
        <CardTitle className="nomePokemon" tag="h5">
          {name} <small className="text-muted">#{id}</small>{" "}
        </CardTitle>
        {favorito ? (
          <button
            className="Botao"
            onClick={() => alterarFav(id)}
            type="button"
          >
            <i className="fas fa-star text-warning" />
          </button>
        ) : (
          <button
            className="Botao"
            onClick={() => alterarFav(id)}
            type="button"
          >
            <i className="far fa-star text-warning" />
          </button>
        )}
      </CardBody>
      <img src={image} alt={name} />
      <CardBody>
        <TipoPokemon tipos={type.map((ele) => ele.name)} />
      </CardBody>
    </Card>
  );
};

export default Pokemon;
