import styles from '../SearchBar/SearchBar.module.scss'
import { useState } from 'react';

export default function SearchBar({onSearch,onRandom}) {
   

   const [id,setId] = useState('')

   const handleChange = (event)=>{
      setId(event.target.value);
   }

   return (
      <div className={styles.SearchBar}>
         
         <input name='search' 
             type='search' 
             onChange={handleChange}
             value={id}>
         </input>

         <button name='button' 
             type='button'
             onClick={() => onSearch(id)}>Agregar
         </button>
         <button name='random' 
             type='button'
             onClick={() => onRandom()}>Random
         </button>

      </div>   
   );
}
