async function getQuote() {
    const quoteElem = document.getElementById('quote');
    const authorElem = document.getElementById('author');
    const loadingElem = document.getElementById('loading');

    quoteElem.textContent = '';
    authorElem.textContent = '';
    loadingElem.style.display = 'block';

    try {
        const response = await fetch('http://localhost:3000/api/quote');
        const data = await response.json();

        quoteElem.textContent = `"${data.quote}"`;
        authorElem.textContent = `- ${data.author}`;
    } catch (error) {
        quoteElem.textContent = 'Failed to load data.';
        console.error(error);
    } finally {
        loadingElem.style.display = 'none';
    }
}

