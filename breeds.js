// breeds.js - Dog Breeds page logic

// Get elements from the HTML
const breedsContainer = document.getElementById('breeds-container');
const breedsError = document.getElementById('breeds-error');

/**
 * Fetch dog breeds from TheDogAPI and show them on the page
 */
async function loadBreeds() {
  // Clear any previous error
  breedsError.textContent = '';

  try {
    // Show loading message
    breedsContainer.innerHTML = '<p>Loading breeds...</p>';

    // Fetch all breeds from TheDogAPI
    const response = await fetch('https://api.thedogapi.com/v1/breeds');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Clear the container before adding breed cards
    breedsContainer.innerHTML = '';

    // Create a card for each breed
    data.forEach((breed) => {
      const card = document.createElement('div');
      card.classList.add('card');

      // Breed name
      const name = document.createElement('p');
      name.classList.add('breed-name');
      name.textContent = breed.name;

      // Breed image 
      if (breed.image && breed.image.url) {
        const img = document.createElement('img');
        img.src = breed.image.url;
        img.alt = breed.name;
        card.appendChild(img);
      }

      // Temperament
      const temperament = document.createElement('p');
      temperament.classList.add('breed-info');
      temperament.textContent = 'Temperament: ' + (breed.temperament || 'N/A');

      // Life span
      const lifeSpan = document.createElement('p');
      lifeSpan.classList.add('breed-info');
      lifeSpan.textContent = 'Life span: ' + (breed.life_span || 'N/A');

      // Add all text to the card
      card.appendChild(name);
      card.appendChild(temperament);
      card.appendChild(lifeSpan);

      // Added the card to the page //
      breedsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching breeds:', error);
    breedsContainer.innerHTML = '';
    breedsError.textContent = 'Sorry, something went wrong while loading breeds. Please try again.';
  }
}

// Run loadBreeds when the page is fully loaded
document.addEventListener('DOMContentLoaded', loadBreeds);
