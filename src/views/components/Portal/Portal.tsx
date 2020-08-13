import React, {useEffect, useMemo, useState} from 'react';
import {createPortal} from "react-dom";

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

export default Portal;
