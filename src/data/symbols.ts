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
  { id: 'need6', text: 'Rest', icon: '🛏️', category: 'Basic Needs' },
  { id: 'need7', text: 'Shower', icon: '🚿', category: 'Basic Needs' },

  // Common Phrases
  { id: 'phrase1', text: 'Hello', icon: '👋', category: 'Common Phrases' },
  { id: 'phrase2', text: 'Goodbye', icon: '👋', category: 'Common Phrases' },
  { id: 'phrase3', text: 'Thank you', icon: '🙏', category: 'Common Phrases' },
  { id: 'phrase4', text: 'Please', icon: '🤲', category: 'Common Phrases' },
  { id: 'phrase5', text: 'Sorry', icon: '😔', category: 'Common Phrases' },
  { id: 'phrase6', text: 'Good morning', icon: '🌅', category: 'Common Phrases' },
  { id: 'phrase7', text: 'Good night', icon: '🌙', category: 'Common Phrases' },

  // Feelings
  { id: 'feel1', text: 'Happy', icon: '😊', category: 'Feelings' },
  { id: 'feel2', text: 'Sad', icon: '😢', category: 'Feelings' },
  { id: 'feel3', text: 'Pain', icon: '🤕', category: 'Feelings' },
  { id: 'feel4', text: 'Tired', icon: '😫', category: 'Feelings' },
  { id: 'feel5', text: 'Angry', icon: '😠', category: 'Feelings' },
  { id: 'feel6', text: 'Excited', icon: '🤩', category: 'Feelings' },
  { id: 'feel7', text: 'Worried', icon: '😟', category: 'Feelings' },
  { id: 'feel8', text: 'Love', icon: '❤️', category: 'Feelings' },

  // Actions
  { id: 'action1', text: 'Help', icon: '🆘', category: 'Actions' },
  { id: 'action2', text: 'Stop', icon: '✋', category: 'Actions' },
  { id: 'action3', text: 'Wait', icon: '⏳', category: 'Actions' },
  { id: 'action4', text: 'Come', icon: '🚶', category: 'Actions' },
  { id: 'action5', text: 'Go', icon: '🏃', category: 'Actions' },
  { id: 'action6', text: 'Play', icon: '🎮', category: 'Actions' },
  { id: 'action7', text: 'Read', icon: '📚', category: 'Actions' },
  { id: 'action8', text: 'Write', icon: '✍️', category: 'Actions' },

  // Responses
  { id: 'resp1', text: 'Yes', icon: '✅', category: 'Responses' },
  { id: 'resp2', text: 'No', icon: '❌', category: 'Responses' },
  { id: 'resp3', text: 'Maybe', icon: '🤔', category: 'Responses' },
  { id: 'resp4', text: 'I dont know', icon: '❓', category: 'Responses' },
  { id: 'resp5', text: 'Understand', icon: '👍', category: 'Responses' },
  { id: 'resp6', text: 'Dont understand', icon: '👎', category: 'Responses' },

  // Places
  { id: 'place1', text: 'Home', icon: '🏠', category: 'Places' },
  { id: 'place2', text: 'School', icon: '🏫', category: 'Places' },
  { id: 'place3', text: 'Hospital', icon: '🏥', category: 'Places' },
  { id: 'place4', text: 'Park', icon: '🌳', category: 'Places' },
  { id: 'place5', text: 'Store', icon: '🏪', category: 'Places' },

  // Time
  { id: 'time1', text: 'Now', icon: '⌚', category: 'Time' },
  { id: 'time2', text: 'Later', icon: '⏰', category: 'Time' },
  { id: 'time3', text: 'Today', icon: '📅', category: 'Time' },
  { id: 'time4', text: 'Tomorrow', icon: '🌅', category: 'Time' },
  { id: 'time5', text: 'Yesterday', icon: '🌆', category: 'Time' },

  // Weather
  { id: 'weather1', text: 'Hot', icon: '🌞', category: 'Weather' },
  { id: 'weather2', text: 'Cold', icon: '❄️', category: 'Weather' },
  { id: 'weather3', text: 'Rain', icon: '🌧️', category: 'Weather' },
  { id: 'weather4', text: 'Snow', icon: '🌨️', category: 'Weather' },
  { id: 'weather5', text: 'Sunny', icon: '☀️', category: 'Weather' },

  // Family
  { id: 'family1', text: 'Mom', icon: '👩', category: 'Family' },
  { id: 'family2', text: 'Dad', icon: '👨', category: 'Family' },
  { id: 'family3', text: 'Sister', icon: '👧', category: 'Family' },
  { id: 'family4', text: 'Brother', icon: '👦', category: 'Family' },
  { id: 'family5', text: 'Baby', icon: '👶', category: 'Family' },

  // Activities
  { id: 'activity1', text: 'Eat', icon: '🍴', category: 'Activities' },
  { id: 'activity2', text: 'Drink', icon: '🥤', category: 'Activities' },
  { id: 'activity3', text: 'Sleep', icon: '🛌', category: 'Activities' },
  { id: 'activity4', text: 'Walk', icon: '🚶‍♂️', category: 'Activities' },
  { id: 'activity5', text: 'Run', icon: '🏃‍♂️', category: 'Activities' }
];