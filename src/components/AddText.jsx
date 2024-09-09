import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont} from '@fortawesome/free-solid-svg-icons';

const AddText = ({ onAddText, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex shadow-md rounded-2xl p-1 w-full justify-center">
        <button onClick={onAddText} className="bg-transparent text-gray-700 hover:text-gray-900 p-2 rounded-2xl">
          <FontAwesomeIcon icon={faFont} className="text-lg" />
          <span className="text-sm mt-1 pl-2">Add Text</span>
        </button>
      </div>
    </div>
  );
};

export default AddText;