import React from 'react';
import Portal from '@/components/common/portal/Portal';

import './Modal.scoped.scss';

interface Props extends ReactProps {
  status: boolean;
  setStatus: (b: boolean) => void;
}

const Modal = ({ status, setStatus, children }: Props) => {
  React.useEffect(() => {
    document.body.setAttribute('style', 'overflow: hidden; position:fixed;');

    return () => {
      document.body.removeAttribute('style');
    };
  }, [status]);

  return (
    <Portal elementId="modal-root">
      <div className={'modal' + (status ? ' active' : '')}>
        <div className="inner">
          {children}
        </div>

        <div className="dimmed" onClick={() => setStatus(!status)}></div>
      </div>
    </Portal>
  );
};

export default React.memo(Modal, (prevProps, nextProps) => prevProps.status === nextProps.status);
