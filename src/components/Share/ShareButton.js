import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);
  const handleShareButton = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };
  return (
    <button onClick={() => handleShareButton()}>
      <img
        data-testid="share-btn"
        src={shareIcon} alt="Icone para compartilhar receita"
      />
      {copied && <span>Link copiado!</span>}
    </button>
  );
};

export default ShareButton;
