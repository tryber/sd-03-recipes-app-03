import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);
  const handleShareButton = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };
  return (
    <div>
      <div onClick={() => handleShareButton()}>
        <img src={shareIcon} alt="Icone para compartilhar receita" />
      </div>
      {copied && <span>Link copiado!</span>}
    </div>
  );
}

export default ShareButton;
