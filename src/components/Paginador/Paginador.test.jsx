import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Paginador from ".";

describe("O componente BarraPesquisa", () => {
  it("renderiza sem problemas", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Paginador />
      </MemoryRouter>
    );

    const paginacao = getByTestId("paginacao");

    expect(paginacao).toBeInTheDocument();
  });
});
