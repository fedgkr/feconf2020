import React, {useEffect, useMemo, useState} from 'react';
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

export const PortalWrap = ({ children, className, forwardRef = null, ...rest }) => {
  return (
    <div ref={forwardRef} className={classcat([css.Portal, className || '']) } {...rest}>
      {children}
    </div>
  );
}

export default Portal;
