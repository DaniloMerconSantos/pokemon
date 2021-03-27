import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import BarraNavegacao from ".";

describe("O componente BarraNavegacao", () => {
  it("renderiza sem problemas", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <BarraNavegacao />
      </MemoryRouter>
    );

    const barra = getByTestId("barraNavegacao");

    expect(barra).toBeInTheDocument();
  });
});
