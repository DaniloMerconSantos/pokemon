import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import TipoPokemon from "../TipoPokemon";
import IResource from "../../models/resource";

interface IPokemonProps {
  name: string;
  image: string;
  type: IResource[];
  id: number;
}

const Pokemon: React.FC<IPokemonProps> = ({ name, image, type, id }) => {
  return (
    <Card className="m-2 h-100">
      <CardBody className="d-flex justify-content-between">
        <CardTitle tag="h5">{name}</CardTitle>
        <i className="far fa-star text-warning" />
      </CardBody>
      <CardBody>
        <CardText>{id}</CardText>
      </CardBody>
      <img src={image} alt={name} />
      <CardBody>
        <TipoPokemon tipos={type.map((ele) => ele.name)} />
      </CardBody>
    </Card>
  );
};

export default Pokemon;
