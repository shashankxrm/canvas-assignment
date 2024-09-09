import React, { useState, useRef, useEffect } from 'react';
import UndoRedo from './UndoRedo';
import AddText from './AddText';
import FontDropdown from './FontDropdown';
import FontSizeControl from './FontSizeControl';
import FontStyleToolbar from './FontStyleToolbar';

const CanvasApp = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(20);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });
  const [textStyles, setTextStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const [textAlign, setTextAlign] = useState('center');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${textStyles.bold ? 'bold' : ''} ${textStyles.italic ? 'italic' : ''} ${fontSize}px ${font}`;
    ctx.textAlign = textAlign;
    ctx.fillText(text, textPosition.x, textPosition.y);
    if (textStyles.underline) {
      const textWidth = ctx.measureText(text).width;
      ctx.beginPath();
      ctx.moveTo(textPosition.x, textPosition.y + 2);
      ctx.lineTo(textPosition.x + textWidth, textPosition.y + 2);
      ctx.strokeStyle = ctx.fillStyle;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }, [text, font, fontSize, textPosition, textStyles, textAlign]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      setTextPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const addText = () => {
    const newText = prompt('Enter text:');
    if (newText) {
      setHistory([...history, { text, font, fontSize, textPosition, textStyles, textAlign }]);
      setText(newText);
    }
  };

  const changeFont = (e) => {
    setHistory([...history, { text, font, fontSize, textPosition, textStyles, textAlign }]);
    setFont(e.target.value);
  };

  const changeFontSize = (increment) => {
    setHistory([...history, { text, font, fontSize, textPosition, textStyles, textAlign }]);
    setFontSize(fontSize + increment);
  };

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    if (!isNaN(newSize)) {
      setHistory([...history, { text, font, fontSize, textPosition, textStyles, textAlign }]);
      setFontSize(newSize);
    }
  };

  const toggleTextStyle = (style) => {
    setHistory([...history, { text, font, fontSize, textPosition, textStyles, textAlign }]);
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      [style]: !prevStyles[style],
    }));
  };

  const toggleTextAlign = (align) => {
    setHistory([...history, { text, font, fontSize, textPosition, textStyles, textAlign }]);
    setTextAlign(align);
  };

  const undo = () => {
    if (history.length > 0) {
      const lastState = history.pop();
      setRedoStack([...redoStack, { text, font, fontSize, textPosition, textStyles, textAlign }]);
      setText(lastState.text);
      setFont(lastState.font);
      setFontSize(lastState.fontSize);
      setTextPosition(lastState.textPosition);
      setTextStyles(lastState.textStyles);
      setTextAlign(lastState.textAlign);
      setHistory(history);
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const lastRedoState = redoStack.pop();
      setHistory([...history, { text, font, fontSize, textPosition, textStyles, textAlign }]);
      setText(lastRedoState.text);
      setFont(lastRedoState.font);
      setFontSize(lastRedoState.fontSize);
      setTextPosition(lastRedoState.textPosition);
      setTextStyles(lastRedoState.textStyles);
      setTextAlign(lastRedoState.textAlign);
      setRedoStack(redoStack);
    }
  };

  return (
    <div className="space-y-4">
      <UndoRedo onUndo={undo} onRedo={redo} />
      <div className="bg-gray-200 p-4 rounded shadow-md">
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="bg-white border border-gray-300 shadow-md"
        />
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <FontDropdown font={font} onChangeFont={changeFont} className="w-35 h-12 flex items-center" />
        <FontSizeControl fontSize={fontSize} onIncrement={() => changeFontSize(1)} onDecrement={() => changeFontSize(-1)} onFontSizeChange={handleFontSizeChange} className="w-22 h-12 flex items-center" />
        <FontStyleToolbar textStyles={textStyles} toggleTextStyle={toggleTextStyle} toggleTextAlign={toggleTextAlign} className="w-35 h-12 flex items-center" />
      </div>
      <div className="flex justify-center mt-4">
        <AddText onAddText={addText} className="w-1/4 h-12 flex items-center" />
      </div>
    </div>
  );
};

export default CanvasApp;