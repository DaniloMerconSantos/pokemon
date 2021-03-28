import React from "react";
import { Pagination, PaginationItem, PaginationLink, Row } from "reactstrap";

interface IPaginadorProps {
  totalRegistro: number;
  itensPorPagina: number;
  paginaAtual: number;
  onChange: (pagina: number) => void;
}

const Paginador: React.FC<IPaginadorProps> = ({
  totalRegistro,
  itensPorPagina,
  paginaAtual,
  onChange,
}) => {
  let numPaginas = Math.floor(totalRegistro / itensPorPagina);

  if (totalRegistro % itensPorPagina > 0) {
    numPaginas += 1;
  }

  let inicio = 1;
  let fim = 10;

  if (paginaAtual >= 5) {
    fim = paginaAtual + 4;
    if (fim > numPaginas) {
      inicio = numPaginas - 5;
      fim = numPaginas;
    } else {
      inicio = paginaAtual - 1;
    }
  } else {
    fim = numPaginas > 5 ? 5 : numPaginas;
  }

  const itens = [];

  for (let i = inicio; i <= fim; i++) {
    const isActive = paginaAtual === i;
    const pageItem = (
      <PaginationItem key={i}>
        <PaginationLink onClick={() => (isActive ? () => {} : onChange(i))}>
          {i}
        </PaginationLink>
      </PaginationItem>
    );
    itens.push(pageItem);
  }

  return (
    <>
      <Row data-testid="paginacao">
        {numPaginas > 1 && (
          <Pagination size="sm">
            {paginaAtual > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink first onClick={() => onChange(1)} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    previous
                    onClick={() => onChange(paginaAtual - 1)}
                  />
                </PaginationItem>
              </>
            )}
            {itens}
            {paginaAtual < numPaginas && (
              <>
                <PaginationItem>
                  <PaginationLink
                    next
                    onClick={() => onChange(paginaAtual + 1)}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink last onClick={() => onChange(numPaginas)} />
                </PaginationItem>
              </>
            )}
          </Pagination>
        )}
      </Row>
    </>
  );
};

export default Paginador;
