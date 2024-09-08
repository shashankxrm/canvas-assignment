import React from 'react';
import Button from './Button';

const FontSizeControl = ({ fontSize, onIncrement, onDecrement, onFontSizeChange }) => {
  return (
    <div className="inline-flex items-center space-x-2">
      <Button onClick={onDecrement} className="bg-red-500 px-2 py-1 rounded-l">-</Button>
      <input
        type="number"
        value={fontSize}
        onChange={onFontSizeChange}
        className="border-t border-b border-gray-300 px-4 py-2 text-center"
        style={{ width: '80px' }}
      />
      <Button onClick={onIncrement} className="bg-red-500 px-2 py-1 rounded-r">+</Button>
    </div>
  );
};

export default FontSizeControl;