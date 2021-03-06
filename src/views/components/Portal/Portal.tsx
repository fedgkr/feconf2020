import React, {forwardRef, HTMLAttributes, useEffect, useMemo, useState} from 'react';
import {createPortal} from "react-dom";
import css from './Portal.module.scss';
import classcat from "classcat";

interface PortalProps {}

const useClientRendering = () => {
  const [isClientRendering, setClientRendering] = useState(false);
  useEffect(() => setClientRendering(true), []);
  return isClientRendering;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const element = useMemo(() => (typeof document === 'object' ? document : undefined)?.getElementById('modal-root'), []);
  if (useClientRendering()) {
    return createPortal(children, element);
  }
  return null;
}

export const PortalWrap = ({ children, className, ...rest }) => {
  return (
    <div className={classcat([css.Portal, className || '']) } {...rest}>
      {children}
      <div className={css.dimmed}/>
    </div>
  );
};

export default Portal;
