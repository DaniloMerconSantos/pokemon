import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { listarPokemonPorNome } from "../../servico/pokemon";
import IResource from "../../models/resource";

const BarraPesquisa: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [valor, setValor] = useState("");
  const [listaPokemos, setListaPokemons] = useState<IResource[]>([]);

  useEffect(() => {
    if (valor === "") {
      setDropdownOpen(false);
      return;
    }
    setDropdownOpen(true);
    setListaPokemons([]);
    const debounce = setTimeout(() => {
      listarPokemonPorNome(valor).then((res) => {
        setListaPokemons(res.results);
      });
    }, 500);
    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(debounce);
    };
  }, [valor]);

  const alterarValor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value);
  };

  return (
    <Form
      autoComplete="off"
      data-testid="form-navegacao"
      className="d-flex justify-content-between"
    >
      <Dropdown className="w-100" isOpen={dropdownOpen} toggle={() => {}}>
        <DropdownToggle tag="div">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fas fa-search" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              autoComplete="off"
              value={valor}
              placeholder="Nome Pokemon"
              onChange={alterarValor}
              name="q"
              data-testid="imput-name"
            />
          </InputGroup>
        </DropdownToggle>
        <DropdownMenu>
          {listaPokemos.length > 0 ? (
            listaPokemos.map((pokemon) => (
              <DropdownItem
                onClick={() => {
                  setValor(pokemon.name);
                  setDropdownOpen(false);
                }}
                key={pokemon.name}
              >
                {pokemon.name}
              </DropdownItem>
            ))
          ) : (
            <DropdownItem>Não foi encontrado nenhum resultado!</DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
      <Button className="ml-2" color="primary" type="submit">
        Pesquisar
      </Button>
    </Form>
  );
};

export default BarraPesquisa;
