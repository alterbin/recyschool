/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  centered?: boolean;
  className?: string;
}

export function ModalContainer({
  isOpen,
  onClose,
  children,
  centered = true,
  className,
  ...props
}: IProps) {
  return (
    <div
      className={`modal fade ${
        isOpen ? 'show ' : 'app-modal-c'
      } fixed-top d-flex justify-content-center align-items-center ${className}`}
      style={{ display: isOpen ? 'block' : 'none' }}
      {...props}
    >
      {/* Overlay */}
      <div className="app-modal-backdrop fade show" onClick={onClose} />

      {/* Modal Content */}
      <div
        className={`app-modal-dialog ${
          centered ? 'app-modal-dialog-centered' : ''
        } app-modal-content`}
      >
        <div className="app-modal-body py-4">{children}</div>
      </div>
    </div>
  );
}
