import React from 'react';

const SafeLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, ...rest }) => {
  return (
    <a {...rest} target="_blank" rel="noopener noreferrer">{children}</a>
  );
}

export default SafeLink;
