const localStorageName = "PokemonFavoritos";

export const salvarFavorito = (id: number): void => {
  let favoritos = [];

  const storage = localStorage.getItem(localStorageName);

  if (storage !== null) {
    favoritos = JSON.parse(storage);
  }

  const encontrado = favoritos.includes(id);

  if (encontrado) {
    return;
  }

  favoritos.push(id);

  localStorage.setItem(localStorageName, JSON.stringify(favoritos));
};

export const obterFavoritos = (): number[] => {
  const storage = localStorage.getItem(localStorageName);

  if (storage !== null) {
    return JSON.parse(storage);
  }

  return [];
};

export const deletarFavorito = (id: number): void => {
  let favoritos = [];
  const storage = localStorage.getItem(localStorageName);

  if (storage !== null) {
    favoritos = JSON.parse(storage);
  }

  const dado = favoritos.filter((dados: number) => dados !== id);
  localStorage.setItem(localStorageName, JSON.stringify(dado));
};
