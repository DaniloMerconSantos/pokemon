import React from 'react'
import { render, screen } from '../../__test__/test-utils';
import BarraNavegacao from '.';

describe('O componente BarraNavegacao', () => {
    it('renderiza sem problemas', ()=> {
        render(<BarraNavegacao />);

        const barra = screen.getByTestId('barraNavegacao');

        expect(barra).toBeInTheDocument();
    })
})