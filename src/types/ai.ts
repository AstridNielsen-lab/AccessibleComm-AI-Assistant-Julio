export interface AIResponse {
  response: string;
  confidence: number;
}

export interface AIRequestOptions {
  contents: Array<{
    parts: Array<{
      text: string;
    }>;
  }>;
}

export interface AIRequest extends AIRequestOptions {
  generationConfig?: {
    temperature?: number;
    maxOutputTokens?: number;
  };
}