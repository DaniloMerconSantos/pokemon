import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import IPokemon from "../../models/pokemon";
import Pokemon from "../Pokemon";
import {
  obterFavoritos,
  deletarFavorito,
  salvarFavorito,
} from "../../servico/favoritos";

interface IListagemPokemonProps {
  pokemons: IPokemon[];
}
const ListagemPokemon: React.FC<IListagemPokemonProps> = ({ pokemons }) => {
  const [pokeFav, setPokeFav] = useState<number[]>([]);

  useEffect(() => {
    setPokeFav(obterFavoritos());
  }, []);

  function alternarFavorito(id: number) {
    if (pokeFav.includes(id)) {
      deletarFavorito(id);
    } else {
      salvarFavorito(id);
    }
    setPokeFav(obterFavoritos());
  }

  return (
    <>
      <Row noGutters>
        {pokemons.length > 0
          ? pokemons.map((dados) => {
              return (
                <Col
                  data-testid="lista-pokemon"
                  sm="3"
                  xs="6"
                  className="mb-4"
                  key={dados.id}
                >
                  <Pokemon
                    name={dados.name}
                    image={dados.sprites.front_default}
                    id={dados.id}
                    type={dados.types.map((ele) => ele.type)}
                    favorito={pokeFav.includes(dados.id)}
                    alterarFav={alternarFavorito}
                  />
                </Col>
              );
            })
          : ""}
      </Row>
    </>
  );
};

export default ListagemPokemon;
