const text = document.getElementById("quoteElement");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    text.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);

const newQuoteBtn = document.querySelector("button");

newQuoteBtn.addEventListener("click", () => {
    getQuote(api_url);
});