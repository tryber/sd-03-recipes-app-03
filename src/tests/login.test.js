import React from 'react';
import { fireEvent, cleanup, waitForDomChange } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithContext from './utilitiesTest/renderWithContext';
import App from '../App';

describe('Login page tests', () => {
  afterEach(() => cleanup());
  test('Verify if the login page has a Login text in it', () => {
    const { getByText } = renderWithContext(<App />);
    const login = getByText(/Welcome/i);
    expect(login).toBeInTheDocument();
  });

  test('Page should render the e-mail and password inputs', () => {
    const { getByTestId, container } = renderWithContext(<App />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-submit-btn');
    const totalInputs = container.querySelectorAll('INPUT');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(totalInputs.length).toBe(2);
  });

  test('Login button should be enable when e-mail and password are filled', () => {
    const { getByTestId, history } = renderWithContext(<App />);

    const loginButton = getByTestId('login-submit-btn');
    const email = 'email@gmail.com';
    const password = '12345678';
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');

    act(() => {
      fireEvent.input(emailInput, {target: { value: email }, });
      fireEvent.input(passwordInput, { target: { value: password }, });
      expect(loginButton).toBeVisible();
    });
});

  test('Login button should be disable when e-mail and password are not filled', () => {
    const { getByTestId } = renderWithContext(<App />);

    const loginButton = getByTestId('login-submit-btn');
    const email = 'email@gmail.com';
    const password = '12345';
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');

    act(() => {
      fireEvent.input(emailInput, {target: { value: email }, });
      fireEvent.input(passwordInput, { target: { value: password }, });
      expect(loginButton).toBeDisabled();
    });
  });

  test('testing localStorage setting', async () => {
    const { getByTestId, history } = renderWithContext(<App />);
    const loginButton = getByTestId('login-submit-btn');
    const email = 'email@gmail.com';
    const password = '12345678';
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    fireEvent.input(emailInput, {target: { value: email }, });
    fireEvent.input(passwordInput, { target: { value: password }, });
    fireEvent.click(loginButton);
    expect(JSON.parse(localStorage.getItem('mealsToken'))).toBe(1);
    expect(JSON.parse(localStorage.getItem('cocktailsToken'))).toBe(1);
    expect(JSON.parse(localStorage.getItem('user')).email).toBe('email@gmail.com');
  });
});

