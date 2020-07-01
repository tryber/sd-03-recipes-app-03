import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const DetailsPageContext = createContext();

export const DetailsPageProvider = ({ children }) => {
  const [providerData, setProviderData] = useState([]);
  const [providerRecommended, setProviderRecommended] = useState([]);
  const [pathName, setPathName] = useState('');

  const setProviderRecommendedFunc = (recommendedData) => setProviderRecommended(recommendedData);

  const setProviderDataFunc = (data) => {
    setProviderData(data);
  };

  const setPathNameFunc = (path) => setPathName(path);

  const detailsPageObj = {
    setPathNameFunc,
    pathName,
    setProviderDataFunc,
    providerData,
    setProviderRecommendedFunc,
    providerRecommended,
  };

  return (
    <DetailsPageContext.Provider value={detailsPageObj}>
      {children}
    </DetailsPageContext.Provider>
  );
};

DetailsPageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
