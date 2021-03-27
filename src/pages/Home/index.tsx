import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import queryString from "query-string";
import { Col, Row } from "reactstrap";
import Page from "../../components/Page";
import ListaPokemon from "../../components/ListagemPokemon";
import { listarPokemon, obterPokemon } from "../../servico/pokemon";
import IPokemon from "../../models/pokemon";
import Paginador from "../../components/Paginador";
import BarraPesquisa from "../../components/BarraPesquisa";

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
    let q;
    setIsLoading(true);

    if (
      typeof query.page === "string" &&
      !Number.isNaN(parseInt(query.page, 10))
    ) {
      page = parseInt(query.page, 10);
    }

    if (typeof query.q === "string" && query.q !== null) {
      q = query.q;
    }

    listarPokemon(page, q)
      .then((res) => {
        definirTotalRegistros(res.count);
        return Promise.all(
          res.results.map((poke) => {
            return obterPokemon(poke.name);
          })
        );
      })
      .then((data) => {
        setIsLoading(false);
        setpokemonsLista(data.map((dados) => dados.data));
      });
  }, [query.page, query.q]);

  return (
    <Page isLoading={isLoading}>
      <Row>
        <Col className="mb-4 mt-4">
          <BarraPesquisa />
        </Col>
      </Row>
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
