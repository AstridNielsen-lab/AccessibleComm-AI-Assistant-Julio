import { AIRequestOptions, AIRequest } from '../types/ai';
import { AI_PERSONA } from './aiPersona';

/**
 * Formats the request body according to Gemini API requirements
 */
export function formatRequest(options: AIRequestOptions): AIRequest {
  // Add persona context to the user's message
  const personaContext = `You are ${AI_PERSONA.name}, a ${AI_PERSONA.role}. 
    Respond professionally with your expertise in ${AI_PERSONA.expertise.join(', ')}.`;

  // Prepend persona context to the first message
  options.contents[0].parts.unshift({ text: personaContext });

  return {
    ...options,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024
    }
  };
}