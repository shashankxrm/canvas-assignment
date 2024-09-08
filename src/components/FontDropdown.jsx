import React from 'react';

const FontDropdown = ({ font, onChangeFont }) => {
  return (
    <select className="border border-gray-300 p-2 rounded shadow" onChange={onChangeFont} value={font}>
      <option value="Arial">Arial</option>
      <option value="Courier New">Courier New</option>
      <option value="Georgia">Georgia</option>
      <option value="Times New Roman">Times New Roman</option>
      <option value="Verdana">Verdana</option>
    </select>
  );
};

export default FontDropdown;