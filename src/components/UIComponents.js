// src/components/UIComponents.js (or wherever your Modal component is defined)

import React, { useEffect } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export const Button = ({ children, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className} flex items-center justify-center`}
    >
      {children}
    </button>
  );

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
    return () => {
      enablePageScroll();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-start pt-10">
      <div className="relative bg-white p-6 rounded-lg max-w-2xl w-full m-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="sticky top-0 flex justify-end">
          <button onClick={onClose} className="text-xl p-2 hover:bg-gray-200 rounded z-40">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};