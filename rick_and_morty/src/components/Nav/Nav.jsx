import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from '../Nav/Nav.module.scss'

export default function Nav({onSearch,onRandom}) {
   return (
      <nav className='Nav'>
         <SearchBar onSearch={onSearch} onRandom={onRandom}/>
      </nav>
   );
}

