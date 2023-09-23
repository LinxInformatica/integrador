import styles from '../Card/Card.module.scss'
import { Link } from "react-router-dom";


export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      <div className={styles.Card}>
         <div>
            <button className={styles.buttonCard} onClick={() => onClose(id)}>X</button>
         </div>
         <Link to={`/detail/${id}`} >

            <div className={styles.name}>
               {name}

            </div>
            <div className={styles.img}>
               <img src={image} alt='{image}' />
            </div>
            <div className={styles.name}>
               <div>
                  {status}
               </div>
               <div>
                  {species}
               </div>
            </div>   
         </Link>
      </div>
   );
}
