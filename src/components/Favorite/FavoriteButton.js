import React from 'react';
import WhiteHeartIcon from '../../images/WhiteHeartIcon.svg';

const FavoriteButton = () => {
  return (
    <div onClick={() => handleFavorite()}>
      <img src={WhiteHeartIcon} alt="Icone para favoritar receit" />
    </div>
  );
}

export default FavoriteButton;
