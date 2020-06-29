import React, { useContext, useState } from 'react';
import ReactPlayer from 'react-player';
import { DetailsPageContext } from '../DetailsPageProvider';
import RecommendedDrinks from './RecommendedDrinks';
import RecipeButtonControl from '../RecipeButtonControl';
import ShareButton from '../../../components/Share/ShareButton';
import FavoriteButton from '../../../components/Favorite/FavoriteButton';
import './MealsComponent.css';

const MealsComponent = (props) => {
  const [inProgress, setInProgress] = useState(false);
  const { data } = props;
  const { providerData } = useContext(DetailsPageContext);
  const { name, category, img, instructions, id, init, mid, end, type } = data;
  const ingredientsValues = Object.values(providerData).slice(init, mid);
  const ingredientsQuantity = Object.values(providerData).slice(mid, end);

  const ingredientsWithQuantity = ingredientsValues.reduce((acc, currentElement, index) => {
    if (currentElement !== '' && currentElement !== null) {
      ingredientsQuantity[index] = ingredientsQuantity[index] || 'A seu gosto';
      acc.push([currentElement, ingredientsQuantity[index]]);
    }
    return acc;
  }, []);

  return (
    <div className="details-meals-container">
      <div className="details-meals-content">
        <img className="food-img" data-testid="recipe-photo" src={img} alt={name} width="20%" />
        <div className="details-meals-header">
          <div className="details-meals-titles">
            <h1 data-testid="recipe-title">{name}</h1>
            <p data-testid="recipe-category">{category}</p>
          </div>
          <div className="fav-share-button">
            <ShareButton />
            <FavoriteButton />
          </div>
        </div>
        <h2>Ingredients</h2>
        <ul>
          {ingredientsWithQuantity.map(([ingredient, quantity], index) =>
            (<li data-testid={`${index}-ingredient-name-and-measure`} key={ingredient}>{ingredient} - {quantity}</li>))}
        </ul>
        <h2>Instructions</h2>
        <div className="instructions-container">
          <p data-testid="instructions">{instructions}</p>
        </div>
        {providerData.video ?
          <div>
            <h2>Video</h2>
            <ReactPlayer data-testid="video" url={providerData.video} height={200} width={400}/>
          </div>
          :
          null
        }
        <RecommendedDrinks />
        <RecipeButtonControl
          type={type}
          id={id}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      </div>
    </div>
  );
};

export default MealsComponent;
