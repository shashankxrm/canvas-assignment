import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faStrikethrough, faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const FontStyleToolbar = ({ textStyles, toggleTextStyle, toggleTextAlign, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex shadow-md rounded-2xl p-1 w-full">
        <button
          onClick={() => toggleTextStyle('bold')}
          className={`bg-transparent text-gray-700 hover:text-gray-900 mx-2 ${textStyles.bold ? 'font-bold' : ''}`}
        >
          <FontAwesomeIcon icon={faBold} className="text-lg" />
        </button>
        <button
          onClick={() => toggleTextStyle('italic')}
          className={`bg-transparent text-gray-700 hover:text-gray-900 mx-2 ${textStyles.italic ? 'italic' : ''}`}
        >
          <FontAwesomeIcon icon={faItalic} className="text-lg" />
        </button>
        <button
          onClick={() => toggleTextStyle('strikethrough')}
          className={`bg-transparent text-gray-700 hover:text-gray-900 mx-2 ${textStyles.strikethrough ? 'line-through' : ''}`}
        >
          <FontAwesomeIcon icon={faStrikethrough} className="text-lg" />
        </button>
        <button
          onClick={() => toggleTextAlign('center')}
          className="bg-transparent text-gray-700 hover:text-gray-900 mx-2"
        >
          <FontAwesomeIcon icon={faAlignCenter} className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default FontStyleToolbar;