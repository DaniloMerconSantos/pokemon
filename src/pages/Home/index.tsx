import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import queryString from "query-string";
import { Row } from "reactstrap";
import Page from "../../components/Page";
import ListaPokemon from "../../components/ListagemPokemon";
import { listarPokemon, obterPokemon } from "../../servico/pokemon";
import IPokemon from "../../models/pokemon";
import Paginador from "../../components/Paginador";

const Home: React.FC<RouteComponentProps> = ({ location, history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonsLista, setpokemonsLista] = useState<IPokemon[]>([]);
  const { search, pathname } = location;

  const query = queryString.parse(search);
  const [totalRegistros, definirTotalRegistros] = useState(0);

  const trocaPagina = (pagina: number) => {
    query.page = pagina.toString();
    history.push(`${pathname}?${queryString.stringify(query)}`);
  };

  useEffect(() => {
    let page;
    setIsLoading(true);

    if (
      typeof query.page === "string" &&
      !Number.isNaN(parseInt(query.page, 10))
    ) {
      page = parseInt(query.page, 10);
    }

    listarPokemon(page)
      .then((res) => {
        definirTotalRegistros(res.data.count);
        return Promise.all(
          res.data.results.map((poke) => {
            return obterPokemon(poke.name);
          })
        );
      })
      .then((data) => {
        setIsLoading(false);
        setpokemonsLista(data.map((dados) => dados.data));
      });
  }, [query.page]);

  return (
    <Page isLoading={isLoading}>
      <ListaPokemon pokemons={pokemonsLista} />
      <Row className="justify-content-center">
        <Paginador
          itensPorPagina={20}
          paginaAtual={
            query.page && typeof query.page === "string"
              ? parseInt(query.page, 10)
              : 1
          }
          totalRegistro={totalRegistros}
          onChange={trocaPagina}
        />
      </Row>
    </Page>
  );
};

export default Home;
