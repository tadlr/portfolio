'use client';

import { useEffect, useState } from 'react';
import quoteText from '@/data/quoteText.json';

const QuoteText = () => {
  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const shuffledQuotes = shuffleArray([...quoteText]);
    let currentIndex = 0;

    const updateQuote = () => {
      setCurrentQuote(shuffledQuotes[currentIndex]);
      currentIndex = (currentIndex + 1) % shuffledQuotes.length;
    };

    updateQuote();
    const interval = setInterval(updateQuote, 6500);

    return () => clearInterval(interval);
  }, [quoteText]);

  return (
    <section id="banner" className="bg-gray-900 text-white py-2">
      <div className="container mx-auto px-6 text-center">
        <figure className="p-4">
          <blockquote id="main-quote" className="text-lg ">
            <p className="quote__text">{currentQuote}</p>
          </blockquote>
          <figcaption className="mt-2 text-sm text-gray-400">
            Words of wisdom by <cite title="Source Title">Me</cite>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default QuoteText;
