import React from 'react';
import '../styles/Tooltip.css';

export default function Tooltip({ children, text, position = 'top' }) {
  return (
    <div className={`tooltip-container ${position}`}>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
}
