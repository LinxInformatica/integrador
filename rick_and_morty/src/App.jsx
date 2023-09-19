import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';

import { useState } from 'react';

export default function App() {
   const TOTALCHARACTERS = 826;
   const URLAPI = 'https://rickandmortyapi.com/api/character/'

   const [characters, setCharacters] = useState([]);

   const characterFound = (id) => characters.find((character) => character.id === parseInt(id))

   const onFetch = (id) => {
      fetch(`${URLAPI}${id}`)
         .then((res) => res.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }
   const onSearch = (id) => {
      if (characterFound(id) === undefined) {
         onFetch(id);
      } else {
         window.alert(`¡Personaje ${id} Repetido!`);
      }
   }

   const randomId = () => Math.floor(Math.random() * (TOTALCHARACTERS+2)); 

   const onRandom = () => {

      if (characters.length === TOTALCHARACTERS) {
         window.alert('No quedan mas personaes para seleccionar')
         return
      }
      let id = randomId();
      while (characterFound(id) !== undefined) {
         id = randomId();
      }
      console.log(id);
      onFetch(id);
   }

   const onClose = (id) => {
      const filteredCharacters = characters.filter(character => character.id !== parseInt(id));
      setCharacters(filteredCharacters);

   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch} onRandom={onRandom}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
};



