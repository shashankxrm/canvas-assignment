import React from 'react';
import CanvasApp from './components/CanvasApp';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Canvas Drawing App</h1>
        <CanvasApp />
      </div>
    </div>
  );
};

export default App;