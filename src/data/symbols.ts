// Categories of communication symbols with their respective icons and text
export interface Symbol {
  id: string;
  text: string;
  icon: string;
  category: string;
}

export const symbols: Symbol[] = [
  // Basic Needs
  { id: 'need1', text: 'Water', icon: '💧', category: 'Basic Needs' },
  { id: 'need2', text: 'Food', icon: '🍽️', category: 'Basic Needs' },
  { id: 'need3', text: 'Bathroom', icon: '🚽', category: 'Basic Needs' },
  { id: 'need4', text: 'Sleep', icon: '😴', category: 'Basic Needs' },
  { id: 'need5', text: 'Medicine', icon: '💊', category: 'Basic Needs' },

  // Common Phrases
  { id: 'phrase1', text: 'Hello', icon: '👋', category: 'Common Phrases' },
  { id: 'phrase2', text: 'Goodbye', icon: '👋', category: 'Common Phrases' },
  { id: 'phrase3', text: 'Thank you', icon: '🙏', category: 'Common Phrases' },
  { id: 'phrase4', text: 'Please', icon: '🤲', category: 'Common Phrases' },
  { id: 'phrase5', text: 'Sorry', icon: '😔', category: 'Common Phrases' },

  // Feelings
  { id: 'feel1', text: 'Happy', icon: '😊', category: 'Feelings' },
  { id: 'feel2', text: 'Sad', icon: '😢', category: 'Feelings' },
  { id: 'feel3', text: 'Pain', icon: '🤕', category: 'Feelings' },
  { id: 'feel4', text: 'Tired', icon: '😫', category: 'Feelings' },
  { id: 'feel5', text: 'Angry', icon: '😠', category: 'Feelings' },

  // Actions
  { id: 'action1', text: 'Help', icon: '🆘', category: 'Actions' },
  { id: 'action2', text: 'Stop', icon: '✋', category: 'Actions' },
  { id: 'action3', text: 'Wait', icon: '⏳', category: 'Actions' },
  { id: 'action4', text: 'Come', icon: '🚶', category: 'Actions' },
  { id: 'action5', text: 'Go', icon: '🏃', category: 'Actions' },

  // Responses
  { id: 'resp1', text: 'Yes', icon: '✅', category: 'Responses' },
  { id: 'resp2', text: 'No', icon: '❌', category: 'Responses' },
  { id: 'resp3', text: 'Maybe', icon: '🤔', category: 'Responses' },
  { id: 'resp4', text: 'I dont know', icon: '❓', category: 'Responses' },
  { id: 'resp5', text: 'Understand', icon: '👍', category: 'Responses' },
];