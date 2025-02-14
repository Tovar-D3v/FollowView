import { useState } from 'react';

let idCounter = 0;

const useCustomId = () => {
  const [id] = useState(() => {
    idCounter += 1;
    return `custom-id-${idCounter}`;
  });

  return id;
};

export default useCustomId;