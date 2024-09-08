import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddText = ({ onAddText }) => {
  return (
    <button onClick={onAddText} className="bg-green-500 text-white p-2 rounded shadow">
      <FontAwesomeIcon icon={faPlus} /> Add Text
    </button>
  );
};

export default AddText;