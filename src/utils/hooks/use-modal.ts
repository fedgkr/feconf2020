import {useEffect} from "react";

export const useModal = (active: boolean) => {
  useEffect(() => {
    if (active) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  }, [active]);
}
