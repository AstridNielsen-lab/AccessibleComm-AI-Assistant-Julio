import React, { useState } from 'react';
import { Symbol } from '../../data/symbols';
import { VirtualKeyboard } from '../keyboard/VirtualKeyboard';

interface SymbolChatInputProps {
  onSendMessage: (message: string) => void;
  onSymbolSelect: (symbol: Symbol) => void;
}

export function SymbolChatInput({ onSendMessage, onSymbolSelect }: SymbolChatInputProps) {
  const [inputText, setInputText] = useState('');

  const handleKeyPress = (key: string) => {
    if (key === '⌫') {
      setInputText(prev => prev.slice(0, -1));
    } else {
      setInputText(prev => prev + key);
    }
  };

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <div className="space-y-4">
      {/* Input display */}
      <div className="border rounded-md p-3 min-h-[60px] bg-white">
        {inputText || 'Type your message...'}
      </div>

      {/* Virtual Keyboard */}
      <VirtualKeyboard onKeyPress={handleKeyPress} />

      {/* Send button */}
      <button
        onClick={handleSend}
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Send Message
      </button>
    </div>
  );
}