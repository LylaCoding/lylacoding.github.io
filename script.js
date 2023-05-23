const factContainer = document.getElementById('fact-container');

fetch('facts.txt')
  .then(response => response.text())
  .then(text => {
    const facts = text.split('\n');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factContainer.innerHTML = randomFact;
  })
  .catch(error => console.error(error));