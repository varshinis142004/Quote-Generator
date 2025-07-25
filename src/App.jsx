import React, { useState } from 'react';
import './index.css';
import bgImage from './assets/bg5.jpg';

const quotes = [
  { text: "Believe in yourself.", author: "Unknown" },
  { text: "The only limit is your mind.", author: "Unknown" },
  { text: "You can do it!", author: "Encouragement Bot" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Never bend your head. Always hold it high. Look the world straight in the eye.", author: "Helen Keller" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
  { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { text: "Limit your 'always' and your 'nevers'.", author: "Amy Poehler" },
  { text: "Nothing will work unless you do.", author: "Maya Angelou" },
  { text: "Try to be a rainbow in someone’s cloud.", author: "Maya Angelou" },
  { text: "You are enough just as you are.", author: "Meghan Markle" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Do not wait for the perfect moment, take the moment and make it perfect.", author: "Unknown" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
  { text: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  { text: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
  { text: "There is no substitute for hard work.", author: "Thomas Edison" },
  { text: "I never dreamed about success. I worked for it.", author: "Estee Lauder" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" },
  { text: "Little things make big days.", author: "Isabel Marant" },
  { text: "It’s going to be hard, but hard does not mean impossible.", author: "Art Williams" },
  { text: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Don’t limit your challenges. Challenge your limits.", author: "Jerry Dunn" },
  { text: "Difficult roads often lead to beautiful destinations.", author: "Zig Ziglar" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div
      className="app-bg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        color: 'white',
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >



      <div style={{ fontSize: '1.8rem', fontStyle: 'italic', maxWidth: '800px' ,color: 'rgb(254,122,161)' }}>
        "{quote.text}"
      </div>
      <div style={{ marginBottom: '20px', fontWeight: 'bold', marginTop: '10px' ,color: 'rgb(6,166,127)' }}>
        - {quote.author}
      </div>
      <button onClick={getRandomQuote}>New Quote</button>
    </div>
  );
}

export default App;
