# Dog-API-Project

A simple two-page website that uses [TheDogAPI](https://thedogapi.com/) to display random dog images and dog breed information.

## Features

- **Random Dogs page (`index.html`)**
  - Uses the endpoint `https://api.thedogapi.com/v1/images/search?limit=12`
  - Displays 12 random dog images
  - Button to load a new set of dogs

- **Dog Breeds page (`breeds.html`)**
  - Uses the endpoint `https://api.thedogapi.com/v1/breeds`
  - Displays a grid of breed cards with:
    - Breed name
    - Temperament
    - Life span
    - Image (when available)

- Navigation links between the two pages

## How to Run the Project

1. Clone or download this repository.
2. Open the `dog-api-project` folder in your code editor.
3. Open `index.html` in your browser:
   - Either use a simple local server (e.g., VS Code Live Server), or
   - Double-click `index.html` to open it directly.

4. Use the navigation links:
   - `Random Dogs` → Random dog images page
   - `Dog Breeds` → Dog breeds information page

## Technologies Used

- HTML
- CSS
- JavaScript
