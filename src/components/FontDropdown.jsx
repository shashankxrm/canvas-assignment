import React from 'react';

const FontDropdown = ({ font, onChangeFont, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex shadow-md rounded-2xl p-1 w-full">
        <select
          value={font}
          onChange={onChangeFont}
          className="bg-transparent text-gray-700 p-2 rounded-2xl w-full"
        >
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>
    </div>
  );
};

export default FontDropdown;