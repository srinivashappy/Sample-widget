// Call getQuote initially when the page loads
window.onload = getQuote;


const express = require('express');
const app = express();
const port = 3000;

// Sample data
const quotes = [
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "In the end, we only regret the chances we didn't take.", author: "Lewis Carroll" },
];

app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json(randomQuote);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});