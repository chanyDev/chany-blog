import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  root: Element | null;
  children: ReactNode;
}

const Portal = ({ children, root }: PortalProps) => {
  if (!root) return null;

  return ReactDOM.createPortal(children, root);
};

export default Portal;
