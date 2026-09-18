const quoteElement = document.querySelector("#quote");
const button = document.querySelector("#quote-button");

button.addEventListener("click", async () => {
  const response = await fetch("http://172.17.64.211:3000");
  const quote = await response.json();

  quoteElement.textContent = `"${quote.quote}" - ${quote.author}`;
});
