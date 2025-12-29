'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Elijah's AI assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const USAGE_LIMIT = 5;
  const LIMIT_MESSAGE = "Elijah isn't rich yet so we're gonna have to cut you off. 💸";

  useEffect(() => {
    // Check usage on mount
    const usageCount = parseInt(localStorage.getItem('chat_usage_count') || '0', 10);
    if (usageCount >= USAGE_LIMIT) {
       setMessages(prev => {
         // Avoid adding duplicate limit message if it's already the last one
         if (prev[prev.length - 1]?.content === LIMIT_MESSAGE) return prev;
         return [...prev, { role: 'assistant', content: LIMIT_MESSAGE }];
       });
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Check usage before sending
    const currentUsage = parseInt(localStorage.getItem('chat_usage_count') || '0', 10);
    if (currentUsage >= USAGE_LIMIT) {
       setMessages(prev => [...prev, { role: 'assistant', content: LIMIT_MESSAGE }]);
       return;
    }

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Increment usage
    localStorage.setItem('chat_usage_count', (currentUsage + 1).toString());

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content }))
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.result }]);
      } else {
        throw new Error('Failed to fetch');
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to my brain right now. Try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110"
        size="icon"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] shadow-2xl z-50 flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300 border-border/50 backdrop-blur-sm bg-background/95">
          <CardHeader className="border-b p-4 bg-muted/20">
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Ask Elijah AI
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 p-0 flex flex-col overflow-hidden">
            <div className="flex-1 min-h-0">
              <ScrollArea className="h-full p-4">
                <div className="flex flex-col gap-4">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl px-4 py-3">
                      <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1"
                autoFocus
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send size={18} />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
