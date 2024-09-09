import React from 'react';

const FontSizeControl = ({ fontSize, onIncrement, onDecrement, onFontSizeChange, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex shadow-md rounded-2xl p-1 w-full">
        <button onClick={onDecrement} className="bg-transparent text-gray-700 hover:text-gray-900 ml-2 pr-2">-</button>
        <input
          type="number"
          value={fontSize}
          onChange={onFontSizeChange}
          className="bg-transparent text-gray-700 h-8 w-11 text-center"
        />
        <button onClick={onIncrement} className="bg-transparent text-gray-700 hover:text-gray-900 pr-2">+</button>
      </div>
    </div>
  );
};

export default FontSizeControl;