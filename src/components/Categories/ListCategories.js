import React from 'react';
import PropTypes from 'prop-types';

const ListCategories = ({ strCategories }) => {
  return (
    <div>
      {strCategories.map(({ strCategory }, index) => (
        index < 6 &&
        <button
          data-testid={`${strCategory}-category-filter`} key={index}>{`${strCategory}`}
        </button>
      ))}
    </div>
  );
};

ListCategories.propTypes = {
  strCategories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ListCategories;
