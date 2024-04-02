import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-99999">
      <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50" />
      <div className="modal-container bg-white p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="modal-content mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
