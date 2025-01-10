import React from 'react';
import { TextToSpeech } from './components/TextToSpeech';
import { SpeechToText } from './components/SpeechToText';
import { SymbolBoard } from './components/SymbolBoard';
import { AIChatInterface } from './components/AIChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Accessible Communication
        </h1>
        
        <div className="space-y-8">
          {/* AI Chat Interface */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <AIChatInterface />
          </div>
          
          {/* Text to Speech Component */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TextToSpeech />
          </div>
          
          {/* Speech to Text Component */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <SpeechToText />
          </div>
          
          {/* Symbol Board Component */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <SymbolBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;