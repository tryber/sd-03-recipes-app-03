import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DetailsPageContext } from '../DetailsPageProvider';
import { ingredientsWithQuantity } from '../../../untils/ingredientsWithQuantity';

const Ingredients = (props) => {
  const { providerData } = useContext(DetailsPageContext);
  const { init, mid, end } = props.data;
  const ingredientsValues = Object.values(providerData).slice(init, mid);
  const ingredientsQuantity = Object.values(providerData).slice(mid, end);

  // const ingredientsWithQuantity = ingredientsValues.reduce((acc, currentElement, index) => {
  //   if (currentElement !== '' && currentElement !== null) {
  //     ingredientsQuantity[index] = ingredientsQuantity[index] || 'A seu gosto';
  //     acc.push([currentElement, ingredientsQuantity[index]]);
  //   }
  //   return acc;
  // }, []);
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredientsWithQuantity(ingredientsValues, ingredientsQuantity)
          .map(([ingredient, quantity], index) =>
          (<li data-testid={`${index}-ingredient-name-and-measure`} key={ingredient}>{ingredient} - {quantity}</li>))}
      </ul>
    </div>
  );
};

export default Ingredients;

Ingredients.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
