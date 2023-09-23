import './App.css';
import axios from 'axios';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/Detail.jsx'
import About from './components/About/About.jsx'

import SITEROUTES from './helpers/routes.helpers'

import { Routes, Route } from 'react-router-dom';

import { useState } from 'react';

export default function App() {
   const TOTALCHARACTERS = 826;
   const URLAPI = `${SITEROUTES.URL}/character/`

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

   const randomId = () => Math.floor(Math.random() * (TOTALCHARACTERS + 2));

   const onRandom = () => {

      if (characters.length === TOTALCHARACTERS) {
         window.alert('No quedan mas personajes para seleccionar')
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
         {console.log(SITEROUTES)}
         <div>
            <Nav onSearch={onSearch} onRandom={onRandom}/>
         </div>
         <Routes>
            <Route path={SITEROUTES.HOME} element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path={SITEROUTES.ABOUT} element={<About />} />
            <Route path={SITEROUTES.DETAIL} element={<Detail />} />
         </Routes>
      </div>
   );
};



