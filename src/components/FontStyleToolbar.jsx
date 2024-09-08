import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline } from '@fortawesome/free-solid-svg-icons';

const FontStyleToolbar = ({ textStyles, toggleTextStyle }) => {
  return (
    <div className="flex space-x-2 mt-4">
      <button onClick={() => toggleTextStyle('bold')} className={`p-2 rounded ${textStyles.bold ? 'bg-blue-700' : 'bg-blue-500'}`}>
        <FontAwesomeIcon icon={faBold} className="text-white" />
      </button>
      <button onClick={() => toggleTextStyle('italic')} className={`p-2 rounded ${textStyles.italic ? 'bg-blue-700' : 'bg-blue-500'}`}>
        <FontAwesomeIcon icon={faItalic} className="text-white" />
      </button>
      <button onClick={() => toggleTextStyle('underline')} className={`p-2 rounded ${textStyles.underline ? 'bg-blue-700' : 'bg-blue-500'}`}>
        <FontAwesomeIcon icon={faUnderline} className="text-white" />
      </button>
    </div>
  );
};

export default FontStyleToolbar;