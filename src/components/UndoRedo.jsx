import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

const UndoRedo = ({ onUndo, onRedo }) => {
  return (
    <div className="flex justify-center space-x-4">
      <button onClick={onUndo} className="flex flex-col items-center bg-transparent text-gray-700 hover:text-gray-900">
        <FontAwesomeIcon icon={faUndo} className="text-2xl" />
        <span className="text-xs mt-1">Undo</span>
      </button>
      <button onClick={onRedo} className="flex flex-col items-center bg-transparent text-gray-700 hover:text-gray-900">
        <FontAwesomeIcon icon={faRedo} className="text-2xl" />
        <span className="text-xs mt-1">Redo</span>
      </button>
    </div>
  );
};

export default UndoRedo;