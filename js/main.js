//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', run)


    



    
// DOM Objects
const mainScreen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const pokeListItems = document.querySelectorAll('.list-item');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');


// constants and variables
const TYPES = [
  'normal', 'fighting', 'flying',
  'poison', 'ground', 'rock',
  'bug', 'ghost', 'steel',
  'fire', 'water', 'grass',
  'electric', 'psychic', 'ice',
  'dragon', 'dark', 'fairy'
];





// Functions
const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

const resetScreen = () => {
  mainScreen.classList.remove('hide');
  for (const type of TYPES) {
    mainScreen.classList.remove(type);
  }
};

  function run() {
    const poke = document.querySelector('#poke').value
    const url = 'https://pokeapi.co/api/v2/pokemon/'+poke
    resetScreen();
   
   
    fetch(url)
      .then(res => res.json())
      .then(data => {

        
        
     
        const dataTypes = data['types'];
        const dataFirstType = dataTypes[0];
        const dataSecondType = dataTypes[1];
        pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);
        if (dataSecondType) {
          pokeTypeTwo.classList.remove('hide');
          pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
        } else {
          pokeTypeTwo.classList.add('hide');
          pokeTypeTwo.textContent = '';
        }
        mainScreen.classList.add(dataFirstType['type']['name']);
        
  
    

        mainScreen.classList.add(data.types[0].type.name);
  
        pokeName.textContent = capitalize(data.name);
        pokeId.textContent = '#' + data.id.toString().padStart(3, '0');
        pokeWeight.textContent = data.weight;
        pokeHeight.textContent = data.height;
        pokeFrontImage.src = data.sprites['front_default'] || '';
        pokeBackImage.src = data.sprites['back_default'] || '';
      });

      const handleListItemClick = (e) => {
        if (!e.target) return;
      
        const listItem = e.target;
        if (!listItem.textContent) return;
      
        const id = listItem.textContent.split('.')[0];
        fetchPokeData(id);
      };
  };















