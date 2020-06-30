import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);
  const handleShareButton = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };
  return (
    <div>
        <img
          data-testid="share-btn" onClick={() => handleShareButton()}
          src={shareIcon} alt="Icone para compartilhar receita"
        />
      {copied && <span>Link copiado!</span>}
    </div>
  );
};

export default ShareButton;
