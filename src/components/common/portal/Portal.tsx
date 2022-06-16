import { useMemo } from 'react';
import ReactDOM from 'react-dom';

interface Props extends ReactProps {
  elementId: string;
}

export default ({ elementId, children }: Props) => {
  const rootElement = useMemo(() => document.getElementById(elementId), [elementId]) ! as HTMLDivElement;

  return ReactDOM.createPortal(children, rootElement);
};
