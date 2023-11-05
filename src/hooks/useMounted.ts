import { useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';

const useMounted = (): MutableRefObject<boolean> => {
  const isMounted = useRef(false);

  useEffect(
    () => {
      isMounted.current = true;

      return (): void => {
        isMounted.current = false;
      };
    },
    [],
  );

  return isMounted;
};

export default useMounted;
