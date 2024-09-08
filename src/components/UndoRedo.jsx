import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

const UndoRedo = ({ onUndo, onRedo }) => {
  return (
    <div className="flex space-x-2">
      <button onClick={onUndo} className="bg-blue-500 text-white p-2 rounded shadow">
        <FontAwesomeIcon icon={faUndo} />
      </button>
      <button onClick={onRedo} className="bg-blue-500 text-white p-2 rounded shadow">
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </div>
  );
};

export default UndoRedo;