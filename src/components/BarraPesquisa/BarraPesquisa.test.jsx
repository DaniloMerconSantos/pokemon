import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import BarraPesquisa from ".";

describe("O componente BarraPesquisa", () => {
  it("renderiza sem problemas", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <BarraPesquisa />
      </MemoryRouter>
    );

    const barra = getByTestId("form-navegacao");
    const imput = getByTestId("imput-name");

    expect(barra).toBeInTheDocument();
    expect(imput).toBeInTheDocument();
  });
});
