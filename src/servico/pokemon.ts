import axios, { AxiosResponse } from "axios";
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
