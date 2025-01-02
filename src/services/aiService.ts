import { AI_CONFIG } from '../utils/aiConfig';
import { formatRequest } from '../utils/aiRequestFormatter';
import { AIResponse, AIRequestOptions } from '../types/ai';

/**
 * Service to handle AI communication and responses
 */
export class AIService {
  static async generateResponse(userInput: string): Promise<AIResponse> {
    try {
      const options: AIRequestOptions = {
        contents: [{
          parts: [{
            text: userInput
          }]
        }]
      };

      const response = await fetch(`${AI_CONFIG.API_URL}?key=${AI_CONFIG.API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formatRequest(options))
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      return {
        response: data.candidates[0].content.parts[0].text,
        confidence: 1.0
      };
    } catch (error) {
      console.error('AI Service Error:', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }
}