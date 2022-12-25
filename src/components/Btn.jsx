import React from 'react';

const Btn = ({ children, className, color }) => {
    return (
        <button className={`w-full py-2 text-xs text-white rounded bg-${color}-500 hover:bg-${color}-700 ${className}`}>
            {children}
        </button>
    );
};

export default Btn;