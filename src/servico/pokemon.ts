import axios, { AxiosResponse } from "axios";
import { addDays, isValid, parseISO } from "date-fns";
import IPokemon from "../models/pokemon";
import IResource from "../models/resource";

interface IPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResource[];
}

const API = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

const cacheList = "pokemonList";
const cacheListDate = "pokemonListDate";

const isPokemonCached = () => {
  const cachedDateValue = localStorage.getItem(cacheListDate);
  const cachedListValue = localStorage.getItem(cacheList);
  if (cachedListValue === null) {
    return false;
  }
  if (cachedDateValue === null || !isValid(parseISO(cachedDateValue))) {
    return false;
  }

  const targetDate = addDays(new Date(cachedDateValue), 1);

  if (targetDate <= new Date()) {
    return false;
  }

  return true;
};

const cachePokemon = () => {
  return new Promise<IPokemonListResponse>((resolve) => {
    if (isPokemonCached() === false) {
      resolve(
        API.get<IPokemonListResponse>(`pokemon`)
          .then((dados) => {
            return API.get<IPokemonListResponse>(
              `pokemon?limit=${dados.data.count}`
            );
          })
          .then((dados) => {
            localStorage.setItem(cacheList, JSON.stringify(dados.data));
            localStorage.setItem(cacheListDate, new Date().toISOString());

            return dados.data;
          })
      );
    } else {
      const storage = localStorage.getItem(cacheList);
      if (storage !== null) {
        resolve(JSON.parse(storage));
      }
    }
  });
};

export const listarPokemon = (
  page = 1,
  q = ""
): Promise<IPokemonListResponse> => {
  return cachePokemon().then((dados) => {
    const pokemonList = dados.results.filter((dado) => {
      if (q) {
        const regex = new RegExp(q, "g");
        return dado.name.match(regex);
      }
      return true;
    });
    return {
      ...dados,
      count: pokemonList.length,
      results: pokemonList.splice(page * 20 - 20, 20),
    };
  });
};

export const obterPokemon = (
  value: string | number
): Promise<AxiosResponse<IPokemon>> => {
  return API.get<IPokemon>(`pokemon/${value}`);
};

export const listarPokemonPorNome = (
  nome: string
): Promise<IPokemonListResponse> => {
  return new Promise<IPokemonListResponse>((resolve) => {
    const storage = localStorage.getItem(cacheList);
    if (storage !== null) {
      const response: IPokemonListResponse = JSON.parse(storage);
      const pokemonList = response.results.filter((dados) => {
        const regex = new RegExp(nome, "g");
        return dados.name.match(regex);
      });
      resolve({ ...response, count: pokemonList.length, results: pokemonList });
    }
  });
};
