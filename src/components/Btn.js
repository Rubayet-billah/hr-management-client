import React from 'react';

const Btn = ({ children, className, color, onClick, disabled }) => {
    return (
        <button onClick={onClick} className={`w-full py-2 text-xs text-white rounded bg-${color}-500 hover:bg-${color}-700 ${className}`} disabled={disabled}>
            {children}
        </button>
    );
};

export default Btn;