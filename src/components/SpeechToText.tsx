import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

export function SpeechToText() {
  const { isListening, transcript, toggleListening } = useSpeechRecognition();

  return (
    <div className="space-y-4">
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