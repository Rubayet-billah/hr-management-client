import React from 'react';

const Btn = ({ children, className, color }) => {
    return (
        <button className={`w-full py-2 text-xs text-white rounded bg-${color}-500`}>
            {children}
        </button>
    );
};

export default Btn;