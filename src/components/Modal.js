import React from 'react';

const Modal = ({ title, children, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <h2>{title}</h2>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Modal;
