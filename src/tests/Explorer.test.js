import React from 'react';
import { fireEvent, cleanup, waitForDomChange } from '@testing-library/react';
import renderWithContext from './utilitiesTest/renderWithContext';
import Explorer from '../pages/ExplorerPages/Explorer';
import ExplorerDrinkOrFood from '../pages/ExplorerPages/ExplorerDrinkOrFood';
import ExplorerByIngredients from '../pages/ExplorerPages/ExplorerByIngredients';
import ExploreByOrigin from '../pages/ExplorerPages/ExplorerByOrigem';

const mealsMocked = {
  'meals': [
    {
      'idMeal': '52977',
      'strMeal': 'Corba',
      'strDrinkAlternate': null,
      'strCategory': 'Side',
      'strArea': 'Turkish',
      'strInstructions': 'Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.',
      'strMealThumb': 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
      'strTags': 'Soup',
      'strYoutube': 'https://www.youtube.com/watch?v=VVnZd8A84z4',
      'strIngredient1': 'Lentils',
      'strIngredient2': 'Onion',
      'strIngredient3': 'Carrots',
      'strIngredient4': 'Tomato Puree',
      'strIngredient5': 'Cumin',
      'strIngredient6': 'Paprika',
      'strIngredient7': 'Mint',
      'strIngredient8': 'Thyme',
      'strIngredient9': 'Black Pepper',
      'strIngredient10': 'Red Pepper Flakes',
      'strIngredient11': 'Vegetable Stock',
      'strIngredient12': 'Water',
      'strIngredient13': 'Sea Salt',
      'strIngredient14': '',
      'strIngredient15': '',
      'strIngredient16': '',
      'strIngredient17': '',
      'strIngredient18': '',
      'strIngredient19': '',
      'strIngredient20': '',
      'strMeasure1': '1 cup ',
      'strMeasure2': '1 large',
      'strMeasure3': '1 large',
      'strMeasure4': '1 tbs',
      'strMeasure5': '2 tsp',
      'strMeasure6': '1 tsp ',
      'strMeasure7': '1/2 tsp',
      'strMeasure8': '1/2 tsp',
      'strMeasure9': '1/4 tsp',
      'strMeasure10': '1/4 tsp',
      'strMeasure11': '4 cups ',
      'strMeasure12': '1 cup ',
      'strMeasure13': 'Pinch',
      'strMeasure14': ' ',
      'strMeasure15': ' ',
      'strMeasure16': ' ',
      'strMeasure17': ' ',
      'strMeasure18': ' ',
      'strMeasure19': ' ',
      'strMeasure20': ' ',
      'strSource': 'https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/',
      'dateModified': null
    }
  ]
}

afterEach(cleanup);

describe('Testing Explorer.js and ExplorerDrinkOrFood.js', () => {
  test('Testing Explorer food.js', () => {
    const { getByTestId, history } = renderWithContext(<Explorer />, '/explorar');

    const btnExploreMeals = getByTestId('explore-food');

    expect(btnExploreMeals).toBeInTheDocument();
    fireEvent.click(btnExploreMeals);
    expect(history.location.pathname).toBe('/explorar/comidas')
  });

  test('Testing Explorer drink.js', () => {
    const { getByTestId, history } = renderWithContext(<Explorer />, '/explorar');

    const btnExploreDrink = getByTestId('explore-drinks');

    expect(btnExploreDrink).toBeInTheDocument();
    fireEvent.click(btnExploreDrink);
    expect(history.location.pathname).toBe('/explorar/bebidas')
  });

  test('Testing Meals of ExplorerDrinkOrFood.js', () => {
    const { getByText } = renderWithContext(<ExplorerDrinkOrFood />, '/explorar/comidas');

    expect(getByText('Por Ingredientes')).toBeInTheDocument();
    expect(getByText('Por Local de Origem')).toBeInTheDocument();
    expect(getByText('Me Surpreenda!')).toBeInTheDocument();
  });

  test('Testing Drinks of ExplorerDrinkOrFood.js', () => {
    const { getByText } = renderWithContext(<ExplorerDrinkOrFood />, '/explorar/bebidas');

    expect(getByText('Me Surpreenda!')).toBeInTheDocument();
    expect(getByText('Por Ingredientes')).toBeInTheDocument();
  });

  test('Testing explore random', () => {
    const mockJsonPromise = Promise.resolve(mealsMocked)
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)
    const { getByText } = renderWithContext(<ExplorerDrinkOrFood />, '/explorar/comidas');
    expect(getByText('Me Surpreenda!')).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/random.php')
  });

  test('Testing explore by meals ingredients page', async () => {
    const { getByText, getByTestId, history } = renderWithContext(<ExplorerByIngredients />, '/explorar/comidas/ingredientes');
    await waitForDomChange();
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/list.php?i=list');

    const ingredientsCard = getByTestId(`0-card-name`)
    expect(ingredientsCard).toBeInTheDocument();
  });

  test('Testing explore by drinks ingredients page', async () => {
    const { getByText, history, getByTestId } = renderWithContext(<ExplorerByIngredients />, '/explorar/bebidas/ingredientes');
    await waitForDomChange();
    expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  });

  test('Explore by origin page', async () => {
    const {} = renderWithContext(<ExploreByOrigin />, '/explorar/comidas/area');
    await waitForDomChange();
    expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  })
});
