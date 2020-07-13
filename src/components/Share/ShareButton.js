import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import './ShareButton.css';
import '../Favorite/FavoriteButton.css';

const ShareButton = ({ index, path }) => {
  const [copied, setCopied] = useState(false);
  const handleShareButton = () => {
    navigator.clipboard.writeText(`${window.location.origin}${path}`);
    // setTimeout(() => setCopied(false), 5000);
    setCopied(true);
  };
  return (
    <button data-testid="shareTest" className="transparentBtn" onClick={() => handleShareButton()}>
      <img
        data-testid={typeof (index) === 'number' ? `${index}-horizontal-share-btn` : 'share-btn'}
        src={shareIcon} alt="Icone para compartilhar receita"
      />
      {copied && <span className="copied-link">Link copiado!</span>}
    </button>
  );
};

ShareButton.defaultProps = {
  index: undefined,
};

ShareButton.propTypes = {
  index: PropTypes.number,
  path: PropTypes.string.isRequired,
};

export default ShareButton;
