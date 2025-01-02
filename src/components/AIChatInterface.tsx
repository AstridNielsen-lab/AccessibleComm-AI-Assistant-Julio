import React, { useState } from 'react';
import { AIService } from '../services/aiService';
import { speakText } from '../utils/speech';

/**
 * AI Chat Interface Component
 * Integrates speech, text, and AI capabilities
 * @component
 */
export function AIChatInterface() {
  // State management for chat interface
  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles sending message to AI and processing response
   * @param event - Form submission event
   */
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    setIsProcessing(true);
    setError(null);
    
    try {
      // Add user message to chat
      setResponses(prev => [...prev, `You: ${userInput}`]);
      
      // Get AI response using service
      const aiResponse = await AIService.generateResponse(userInput);
      
      // Add AI response to chat history
      setResponses(prev => [...prev, `Julio: ${aiResponse.response}`]);
      
      // Speak the response using text-to-speech
      speakText(aiResponse.response);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setError(errorMessage);
      console.error('Chat Error:', errorMessage);
    } finally {
      setIsProcessing(false);
      setUserInput('');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">AI Assistant - Julio</h2>
      
      {/* Chat history display */}
      <div className="h-64 overflow-y-auto p-4 border rounded-md bg-gray-50">
        {responses.map((response, index) => (
          <div 
            key={index} 
            className={`mb-2 p-2 rounded shadow ${
              response.startsWith('You:') ? 'bg-blue-50' : 'bg-white'
            }`}
          >
            {response}
          </div>
        ))}
        {error && (
          <div className="p-2 mb-2 bg-red-50 text-red-600 rounded shadow">
            Error: {error}
          </div>
        )}
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 p-2 border rounded-md"
          placeholder="Type your message..."
          disabled={isProcessing}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Send'}
        </button>
      </form>
    </div>
  );
}