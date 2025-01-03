import { useState } from 'react';
import { speakText } from '../utils/speech';
import { symbols, Symbol } from '../data/symbols';
import { SymbolChatInput } from './chat/SymbolChatInput';
import { AIService } from '../services/aiService';

function groupSymbolsByCategory(symbols: Symbol[]): Map<string, Symbol[]> {
  return symbols.reduce((acc, symbol) => {
    const category = acc.get(symbol.category) || [];
    category.push(symbol);
    acc.set(symbol.category, category);
    return acc;
  }, new Map<string, Symbol[]>());
}

function SymbolButton({ symbol, onClick }: { symbol: Symbol; onClick: (symbol: Symbol) => void }) {
  return (
    <button
      onClick={() => {
        speakText(symbol.text);
        onClick(symbol);
      }}
      className="p-3 border rounded-md hover:bg-gray-100 flex flex-col items-center space-y-1 transition-colors"
      aria-label={symbol.text}
    >
      <span className="text-2xl">{symbol.icon}</span>
      <span className="text-xs font-medium">{symbol.text}</span>
    </button>
  );
}

function CategorySection({ 
  title, 
  symbols, 
  onSymbolSelect 
}: { 
  title: string; 
  symbols: Symbol[]; 
  onSymbolSelect: (symbol: Symbol) => void;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-gray-700">{title}</h3>
      <div className="grid grid-cols-5 gap-2">
        {symbols.map((symbol) => (
          <SymbolButton key={symbol.id} symbol={symbol} onClick={onSymbolSelect} />
        ))}
      </div>
    </div>
  );
}

export function SymbolBoard() {
  const symbolsByCategory = groupSymbolsByCategory(symbols);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ text: string; isAI: boolean }>>([]);
  const categories = Array.from(symbolsByCategory.keys());

  const handleSymbolSelect = (symbol: Symbol) => {
    speakText(symbol.text);
  };

  const handleSendMessage = async (message: string) => {
    setMessages(prev => [...prev, { text: message, isAI: false }]);

    try {
      const response = await AIService.generateResponse(message);
      setMessages(prev => [...prev, { text: response.response, isAI: true }]);
      speakText(response.response);
    } catch (error) {
      console.error('Failed to get AI response:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Communication Board</h2>
        
        <div className="mb-4 border rounded-md p-4 max-h-[300px] overflow-y-auto bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 p-2 rounded-lg ${
                msg.isAI ? 'bg-blue-100 ml-4' : 'bg-white mr-4'
              }`}
            >
              <span className="font-medium">{msg.isAI ? 'Julio: ' : 'You: '}</span>
              {msg.text}
            </div>
          ))}
        </div>

        <SymbolChatInput
          onSendMessage={handleSendMessage}
          onSymbolSelect={handleSymbolSelect}
        />
        
        <div className="flex gap-2 mb-4 flex-wrap mt-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {selectedCategory ? (
          <CategorySection
            title={selectedCategory}
            symbols={symbolsByCategory.get(selectedCategory) || []}
            onSymbolSelect={handleSymbolSelect}
          />
        ) : (
          categories.map((category) => (
            <CategorySection
              key={category}
              title={category}
              symbols={symbolsByCategory.get(category) || []}
              onSymbolSelect={handleSymbolSelect}
            />
          ))
        )}
      </div>
    </div>
  );
}