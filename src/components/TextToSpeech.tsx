import { useState } from 'react';

export function TextToSpeech() {
  const [text, setText] = useState('');

  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Text to Speech</h2>
      <textarea
        className="w-full p-2 border rounded-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak"
        aria-label="Text to speak"
      />
      <button
        onClick={speak}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        aria-label="Speak text"
      >
        Speak
      </button>
    </div>
  );
}