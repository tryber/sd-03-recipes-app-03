import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = ({ index, path }) => {
  const [copied, setCopied] = useState(false);
  const handleShareButton = () => {
    navigator.clipboard.writeText(`${window.location.origin}${path}`);
    setCopied(true);
  };
  return (
    <button onClick={() => handleShareButton()}>
      <img
        data-testid={typeof (index) === 'number' ? `${index}-horizontal-share-btn` : 'share-btn'}
        src={shareIcon} alt="Icone para compartilhar receita"
      />
      {copied && <span>Link copiado!</span>}
    </button>
  );
};

ShareButton.defaultProps = {
  index: undefined,
}

ShareButton.propTypes = {
  index: PropTypes.number,
};

export default ShareButton;
