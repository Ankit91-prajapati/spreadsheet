import { useState, useRef, useEffect } from 'react';

interface CellProps {
  value: string;
  onChange: (value: string) => void;
}

const Cell = ({ value, onChange }: CellProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
    onChange(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <div
      className="h-8 border-r border-b border-gray-300 relative"
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          className="w-[124px] h-[32px] px-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div className="w-full h-full px-2 flex items-center overflow-hidden text-sm">
          {value}
        </div>
      )}
    </div>
  );
};

export default Cell;