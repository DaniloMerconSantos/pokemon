import axios, { AxiosResponse } from "axios";
import { addDays, isValid } from "date-fns";
import IPokemon from "../models/pokemon";
import IResource from "../models/resource";

interface IPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: [IResource];
}

const API = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

const cacheList = "pokemonList";
const cacheListDate = "pokemonListDate";

const cachePokemon = () => {
  return API.get<IPokemonListResponse>(`pokemon`)
    .then((dados) => {
      return API.get<IPokemonListResponse>(`pokemon?limit=${dados.data.count}`);
    })
    .then((dados) => {
      localStorage.setItem(cacheList, JSON.stringify(dados.data.results));
      localStorage.setItem(cacheListDate, new Date().toISOString());
    });
};

const checkPokemonCache = () => {
  const cachedDateValue = localStorage.getItem(cacheListDate);
  const cachedListValue = localStorage.getItem(cacheList);
  if (cachedListValue === null) {
    return false;
  }
  if (!isValid(cachedDateValue) || cachedDateValue === null) {
    return false;
  }

  const cachedDate = new Date(cachedDateValue);
  const targetDate = addDays(new Date(cachedDateValue), 1);

  if (targetDate <= cachedDate) {
    return false;
  }
  return true;
};

export const listarPokemon = (
  page?: number
): Promise<AxiosResponse<IPokemonListResponse>> => {
  return API.get<IPokemonListResponse>(
    `pokemon?limit=20&offset=${page ? page * 20 - 20 : ""}`
  );
};

export const obterPokemon = (
  value: string | number
): Promise<AxiosResponse<IPokemon>> => {
  return API.get<IPokemon>(`pokemon/${value}`);
};
