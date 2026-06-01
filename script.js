const quotes = [
  {
    quote: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author: "Dr. A.P.J. Abdul Kalam"
  },
  {
    quote: "If you want to shine like a sun, first burn like a sun.",
    author: "Dr. A.P.J. Abdul Kalam"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    quote: "Arise, awake and stop not till the goal is reached.",
    author: "Swami Vivekananda"
  },
  {
    quote: "Take risks in your life. If you win, you can lead. If you lose, you can guide.",
    author: "Swami Vivekananda"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  }
];

function generateQuote() {
  let random = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText = quotes[random].quote;

  document.getElementById("author").innerText =
    "- " + quotes[random].author;
}

generateQuote();