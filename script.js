// Array of motivational quotes
const quotes = [
    "Believe in yourself and all that you are.",
    "You are stronger than you think.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Push yourself, because no one else is going to do it for you.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream it. Wish it. Do it.",
    "Great things never come from comfort zones.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Stay positive, work hard, make it happen.",
    "Your only limit is your mind."
  ];
  
  // Get DOM elements
  const quoteText = document.getElementById("quote-text");
  const nextQuoteBtn = document.getElementById("next-quote");
  
  // Function to show a new random quote with fade-in effect
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
  
    // Add fade class
    quoteText.classList.add("fade");
  
    // Wait for fade out, then change text and fade in
    setTimeout(() => {
      quoteText.textContent = newQuote;
      quoteText.classList.remove("fade");
    }, 600);
  }
  
  // Event listener
  nextQuoteBtn.addEventListener("click", showRandomQuote);
  
  // Initial quote on page load
  document.addEventListener("DOMContentLoaded", showRandomQuote);
  