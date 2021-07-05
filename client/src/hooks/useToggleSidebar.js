import { useState } from 'react';

const useToggle = ({ init }) => {
  const [value, setValue] = useState(init);

  const toggle = () => {
    setValue(!value);
  };

  return { value, toggle };
};

export default useToggle;
