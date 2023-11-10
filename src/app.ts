interface Character {
    name: string;
    img: string;
    species: string;
}

const url = 'https://rickandmortyapi.com/api/character';
const container = document.getElementById('characters-container');

async function fetchCharacters() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de los personajes');
        }
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}

function displayCharacters(characters: Character[]) {
    if (container) {
        container.innerHTML = '';
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML = 
                <img src="${character.img}" alt="${character.name}">
                <h2>${character.name}</h2>
                <p>${character.species}</p>
            ;
            container.appendChild(characterCard);
        });
    }
}

fetchCharacters();