import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from '../Nav/Nav.module.scss'

import { Link } from 'react-router-dom';

export default function Nav(props) {
   const { onSearch, onRandom } = props;

   return (
      <nav className={styles.Nav}>
         <div>
            <img src="../../src/assets/logo.png" />
         </div>
         <div className={styles.SearchBar}>
            <SearchBar onSearch={onSearch} onRandom={onRandom} />
         </div>   
         <div>
            <Link to="/">
               <button>Home</button>
            </Link>
            <Link to="/about">
               <button>About</button>
            </Link>
         </div>
      </nav>
   );
}

