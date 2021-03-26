import React from "react";
import { Col, Row } from "reactstrap";
import IPokemon from "../../models/pokemon";
import Pokemon from "../Pokemon";

interface IListagemPokemonProps {
  pokemons: IPokemon[];
}
const ListagemPokemon: React.FC<IListagemPokemonProps> = ({ pokemons }) => {
  return (
    <>
      <Row noGutters>
        {pokemons.map((dados) => {
          return (
            <Col sm="3" xs="6" className="mb-4" key={dados.id}>
              <Pokemon
                name={dados.name}
                image={dados.sprites.front_default}
                id={dados.id}
                type={dados.types.map((ele) => ele.type)}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ListagemPokemon;
