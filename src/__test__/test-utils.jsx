import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'my-ui-lib'
import '@testing-library/jest-dom';
import './mocks/react-router-dom';

const withThemeProvider = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
  };

const customRender = (ui, options) => render(ui, {wrapper: withThemeProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };