import React, { useState } from 'react';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

export function TextToSpeech() {
  const [text, setText] = useState('');
  const { speak, isSpeaking } = useSpeechSynthesis();

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-2 border rounded-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak"
        aria-label="Text to speak"
      />
      <button
        onClick={() => speak(text)}
        disabled={isSpeaking}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
        aria-label="Speak text"
      >
        {isSpeaking ? 'Speaking...' : 'Speak'}
      </button>
    </div>
  );
}