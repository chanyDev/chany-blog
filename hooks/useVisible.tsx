import { useState } from 'react';

const useVisible = () => {
  const [visible, setVisible] = useState(false);

  const handleToggleDropDown = () => {
    setVisible((prev) => {
      if (prev) {
        document.body.removeAttribute('class');
      } else {
        document.body.classList.add('fixed', 'overflow-y-scroll');
      }

      return !prev;
    });
  };

  return { visible, handleToggleDropDown };
};

export default useVisible;
