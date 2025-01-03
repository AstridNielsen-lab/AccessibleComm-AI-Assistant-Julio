interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
}

export function VirtualKeyboard({ onKeyPress }: VirtualKeyboardProps) {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  return (
    <div className="space-y-2">
      {rows.map((row, i) => (
        <div key={i} className="flex justify-center gap-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className="w-8 h-8 border rounded-md hover:bg-gray-100 flex items-center justify-center"
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => onKeyPress(' ')}
          className="px-4 py-2 border rounded-md hover:bg-gray-100 flex-grow"
        >
          Space
        </button>
        <button
          onClick={() => onKeyPress('⌫')}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          ⌫
        </button>
      </div>
    </div>
  );
}