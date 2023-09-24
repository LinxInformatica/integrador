import './App.scss';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/Detail.jsx'
import About from './components/About/About.jsx'
import Form from './components/Form/Form.jsx'

import SITEROUTES from './helpers/siteroutes.helpers'


export default function App() {
   const TOTALCHARACTERS = 826;
   const EMAIL = 'diegolepore01@gmail.com'
   const PASSWORD = '987654'

   // estado para los characters
   const [characters, setCharacters] = useState([]);

   //estado para simular seguridad
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   const login = (userData) => {
      if (userData.email === EMAIL && userData.password == PASSWORD) {
         setAccess(true);
         navigate(SITEROUTES.HOME);
      }
   }

   const logout = () => {
      setAccess(false);
      setCharacters([]);
      navigate(SITEROUTES.FORM);
   }

   // devuelve si el caracter existe      
   const characterFound = (id) => characters.find((character) => character.id === parseInt(id))

   //busca el la api
   const onFetch = (id) => {
      fetch(`${SITEROUTES.URL}/character/${id}`)
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

   //devuelve un numero random
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

   const location = useLocation();

   return (
      <div className='App'>
         {useEffect(() => {
            !access && navigate(SITEROUTES.FORM);
         }, [access])}

         {/* RENDER CONDICIONAL */}
         {location.pathname !== SITEROUTES.FORM &&
            <div>
               <Nav onSearch={onSearch} onRandom={onRandom} logout={logout}/>
            </div>
         }
         <Routes>
            <Route path={SITEROUTES.FORM} element={<Form login={login} />} />
            <Route path={SITEROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={SITEROUTES.ABOUT} element={<About />} />
            <Route path={SITEROUTES.DETAIL} element={<Detail />} />
         </Routes>
      </div>
   );
};



