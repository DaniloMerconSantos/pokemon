import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Page from "../../components/Page";
import ListaPokemon from "../../components/ListagemPokemon";
import { obterPokemon } from "../../servico/pokemon";
import IPokemon from "../../models/pokemon";
import { obterFavoritos } from "../../servico/favoritos";

const Favoritos: React.FC<RouteComponentProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonsLista, setpokemonsLista] = useState<IPokemon[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const favoritos = obterFavoritos();
    Promise.all(
      favoritos.map((poke: number) => {
        return obterPokemon(poke);
      })
    ).then((data) => {
      setIsLoading(false);
      setpokemonsLista(data.map((dados) => dados.data));
    });
  }, []);

  return (
    <Page isLoading={isLoading}>
      <ListaPokemon pokemons={pokemonsLista} />
    </Page>
  );
};

export default Favoritos;
