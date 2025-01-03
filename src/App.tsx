import { Header } from './components/layout/Header';
import { Container } from './components/layout/Container';
import { Card } from './components/layout/Card';
import { Footer } from './components/layout/Footer';
import { TextToSpeech } from './components/TextToSpeech';
import { SpeechToText } from './components/SpeechToText';
import { SymbolBoard } from './components/SymbolBoard';
import { AIChatInterface } from './components/AIChatInterface';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <Container>
          <Card title="AI Chat Assistant">
            <AIChatInterface />
          </Card>
          
          <Card title="Text to Speech">
            <TextToSpeech />
          </Card>
          
          <Card title="Speech to Text">
            <SpeechToText />
          </Card>
          
          <Card title="Symbol Communication Board">
            <SymbolBoard />
          </Card>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}