import { useState, useEffect } from 'react';

export function SpeechToText() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<any | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
      };

      setRecognition(recognition);
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognition?.stop();
    } else {
      recognition?.start();
    }
    setIsListening(!isListening);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Speech to Text</h2>
      <div className="min-h-[100px] p-4 border rounded-md bg-gray-50">
        {transcript || 'Your speech will appear here...'}
      </div>
      <button
        onClick={toggleListening}
        className={`px-4 py-2 rounded-md ${
          isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
        } text-white`}
        aria-label={isListening ? 'Stop listening' : 'Start listening'}
      >
        {isListening ? 'Stop' : 'Start'} Listening
      </button>
    </div>
  );
}