import React from 'react';
import { fireEvent, cleanup, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import UserProfile from '../pages/UserProfile/Profile';

class LocalStorageMock {
  constructor(obj = {}) { this.store = obj; }

  setItem(key, val) { this.store[key] = val.toString(); }
  getItem(key) { return this.store[key]; }
  removeItem(key) { delete this.store[key]; }
  clear() { this.store = {}; }
}

window.localStorage = new LocalStorageMock();

describe('User Profile page tests', () => {
  afterEach(cleanup);
  beforeEach(() => localStorage.clear());

  test('Shoul have the right header title', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'email@gmail.com' }));
    const { getByText } = renderWithRouter(<UserProfile />, { route: '/perfil' });
    const [profileText] = await waitForElement(() => [getByText(/Perfil/i)]);

    expect(profileText).toBeInTheDocument();
  });

  test('Verify the components in the page', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'email@gmail.com' }));
    const { getByTestId, getByText } = renderWithRouter(<UserProfile />, { route: '/perfil' });
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

  test('Verify if the buttons redirect to the right route', async () => {
    localStorage.setItem('user', JSON.stringify({ email: 'email@gmail.com' }));
    const { getByTestId, history } = renderWithRouter(<UserProfile />, { route: '/perfil' });
    const [btnDoneRecipes, btnFavoriteRecipes, btnLogout] = await waitForElement(() => [
      getByTestId('profile-done-btn'),
      getByTestId('profile-favorite-btn'),
      getByTestId('profile-logout-btn'),
    ]);
    
    fireEvent.click(btnDoneRecipes);
    expect(history.location.pathname).toBe('/receitas-feitas');
    fireEvent.click(btnFavoriteRecipes);
    expect(history.location.pathname).toBe('/receitas-favoritas');
    fireEvent.click(btnLogout);
    expect(history.location.pathname).toBe('/');
  });
});
