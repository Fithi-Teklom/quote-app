const quoteElement = document.querySelector("#quote");
const button = document.querySelector("#quote-button");
const form = document.querySelector("#quote-form");

const BACKEND_URL = "https://hx5vmh3uvnltexmaepu8xr17.trainees.hosting.cyf.academy";

async function getQuote() {
  const response = await fetch(BACKEND_URL);
  const quote = await response.json();

  quoteElement.textContent = `"${quote.quote}" - ${quote.author}`;
}

button.addEventListener("click", getQuote);

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const quote = document.querySelector("#new-quote").value;
  const author = document.querySelector("#new-author").value;

  await fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quote: quote,
      author: author,
    }),
  });

  form.reset();

  await getQuote();
});
