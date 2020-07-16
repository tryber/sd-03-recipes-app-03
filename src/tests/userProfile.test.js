import React from 'react';
import { fireEvent, cleanup, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithContext from './utilitiesTest/renderWithContext';
import UserProfile from '../pages/UserProfile/Profile';


describe('User Profile page tests', () => {
  afterEach(cleanup);
  beforeEach(() => localStorage.clear());

  test('Shoul have the right header title', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'email@gmail.com' }));
    const { getByText } = renderWithContext(<UserProfile />, { route: '/perfil' });
    const [profileText] = await waitForElement(() => [getByText(/Perfil/i)]);

    expect(profileText).toBeInTheDocument();
  });

  test('Verify the components in the page', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'email@gmail.com' }));
    const { getByTestId, getByText } = renderWithContext(<UserProfile />, { route: '/perfil' });
    const [email, doneRecipes, favoriteRecipes, logoutButton] = await waitForElement(() => [
      getByTestId('profile-email'),
      getByTestId('profile-done-btn'),
      getByTestId('profile-favorite-btn'),
      getByTestId('profile-logout-btn'),
    ]);

    act(() => {
      expect(email).toBeInTheDocument();
      expect(doneRecipes).toBeInTheDocument();
      expect(favoriteRecipes).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });

  test('Verify if the button done recipe redirect to the right route', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'email@gmail.com' }));
    const { getByTestId, history } = renderWithContext(<UserProfile />, '/perfil');

    const btnDoneRecipes = getByTestId('profile-done-btn');

    fireEvent.click(btnDoneRecipes);
    expect(history.location.pathname).toBe('/receitas-feitas');
  });

  test('Verify if the button favorite recipe redirect to the right route', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'email@gmail.com' }));
    const { getByTestId, history } = renderWithContext(<UserProfile />, '/perfil');

    const btnFavoriteRecipes = getByTestId('profile-favorite-btn');
    const btnLogout = getByTestId('profile-logout-btn');

    fireEvent.click(btnFavoriteRecipes);
    expect(history.location.pathname).toBe('/receitas-favoritas');
  });

  test('Verify if the button favorite recipe redirect to the right route', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'email@gmail.com' }));
    const { getByTestId, history } = renderWithContext(<UserProfile />, '/perfil');

    const btnLogout = getByTestId('profile-logout-btn');

    fireEvent.click(btnLogout);
    expect(history.location.pathname).toBe('/');
  });
});
