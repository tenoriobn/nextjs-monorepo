import { render as rtlRender } from '@testing-library/react';
import { act } from '@testing-library/react'

const DefaultWrapper = ({ children }) => {
  return children;
};

export const customRender = (AllTheProviders = DefaultWrapper) => {
  return (ui, options = {}) => {
    let result;
    act(() => {
      result = rtlRender(ui, { wrapper: AllTheProviders, ...options });
    });
    return result;
  };
};

// Re-export everything
export * from '@testing-library/react';

// Override render method
export const render = () => console.error('Please create your own render method using customRender');
