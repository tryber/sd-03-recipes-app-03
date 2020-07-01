
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBarContext = createContext(null);

SearchBarContext.displayName = 'SearchBarContext';

const SearchBarProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);

  const context = { isFetching, setIsFetching, data, setData };

  return <SearchBarContext.Provider value={context}>{children}</SearchBarContext.Provider>;
};

export default SearchBarProvider;

SearchBarProvider.propTypes = { children: PropTypes.node.isRequired };
