import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import Header from '../components/Header/index';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

afterEach(() => {
  cleanup();
})

describe('testing Header Component', () => {
  test('testing profile icon', async () => {
    const { getByTestId } = renderWithContext(
      <Header
        title={'Comidas'}
        searchIcon={true}
      />
    )

    const profileIconTest = getByTestId('profile-top-btn');
    expect(profileIconTest).toBeInTheDocument();
    expect(profileIconTest).toHaveAttribute('src', profileIcon)
  })

  test('testing search icon', async () => {
    const { getByTestId } = renderWithContext(
      <Header
        title={'Comidas'}
        searchIcon={true}
      />
    )

    const searchIconTest = getByTestId('search-top-btn');
    expect(searchIconTest).toBeInTheDocument();
    expect(searchIconTest).toHaveAttribute('src', searchIcon)
  })

  test('testing page title', async () => {
    const { getByTestId } = renderWithContext(
      <Header
        title={'Comidas'}
        searchIcon={true}
      />
    )

    const pageTitle = getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle.innerHTML).toMatch('Comidas');
  })
});

