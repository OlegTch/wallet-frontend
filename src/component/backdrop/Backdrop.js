import React from 'react';
import { createPortal } from 'react-dom';
import './Backdrop.scss';

export const Backdrop = ({ children }) => {
    const modalRoot = document.querySelector('#modalroot');
    return createPortal(
        <div id="backdrop" className="backdrop">
            {children}
        </div>,
        modalRoot,
    );
};
