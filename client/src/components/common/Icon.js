import React from 'react';

const Icon = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width || 20}
      height={height || 20}
      style={{ margin: '0 0.25rem', verticalAlign: 'middle' }}
    />
  );
};

export default Icon;
