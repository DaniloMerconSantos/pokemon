import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Favoritos = React.lazy(() => import("./pages/Favoritos"));

const rotas = [
  { path: "/", component: Home, exact: true },
  { path: "/favoritos", component: Favoritos },
];

export default rotas;
