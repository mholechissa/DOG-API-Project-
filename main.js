// main.js - handles the Random Dogs page (index.html)

// Get elements from the page
const randomDogsContainer = document.getElementById('random-dogs-container');
const loadDogsButton = document.getElementById('load-dogs-button');
const randomDogsError = document.getElementById('random-dogs-error');

/**
 * Fetch and display 12 random dog images
 */
async function loadRandomDogs() {
  // Clear any previous error
  randomDogsError.textContent = '';

  try {
    // Show a loading message
    randomDogsContainer.innerHTML = '<p>Loading dogs...</p>';

    // Fetch 12 random dog images from TheDogAPI
    const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=12');

    if (!response.ok) {
      throw new Error('Network error while fetching dog images');
    }

    const data = await response.json();

    // Clear container before adding dog images
    randomDogsContainer.innerHTML = '';

    // Create an image card for each dog
    data.forEach((dog) => {
      const card = document.createElement('div');
      card.classList.add('card');


      const img = document.createElement('img');
      img.src = dog.url;
      img.alt = 'A random dog';
      

      card.appendChild(img);
      randomDogsContainer.appendChild(card);
    });


  } catch (error) {
    console.error('Error fetching random dogs:', error);
    randomDogsContainer.innerHTML = '';
    randomDogsError.textContent = 'Sorry, something went wrong while loading dogs. Please try again.';
  }
}

// Load dogs automatically when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadRandomDogs();
});
// for Random Dog images 

// Load new dogs when the button is clicked
loadDogsButton.addEventListener('click', () => {
  loadRandomDogs();
});

