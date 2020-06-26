import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeButtonControl = (props) => {
  const { type, id, setInProgress, inProgress } = props;
  if (inProgress) {
    return (
      <div data-testid="start-recipe-btn">
        <Link to={`/${type}/${id}/in-progress`}>
          <button type="button">
            Continuar Receita
          </button>
        </Link>
      </div>
    );
  };
  return (
    <div>
      <Link to={`/${type}/${id}/in-progress`}>
        <button type="button" onClick={() => setInProgress(true)}>
          Iniciar Receita
        </button>
      </Link>
    </div>
  );
};

export default RecipeButtonControl;

RecipeButtonControl.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number,
  setInProgress: PropTypes.func,
  inProgress: PropTypes.bool,
}

RecipeButtonControl.defaultProps = {
  type: '',
  id: undefined,
  setInProgress: () => {},
  inProgress: false,
}
