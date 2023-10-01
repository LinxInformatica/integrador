import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { useState ,useEffect} from "react";

import styles from '../Card/Card.module.scss';
import { addFav, removeFav } from '../../redux/actions';

const Card = (props) => {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   const { addFav, removeFav } = props;
   const {myFavorites} = props;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav(id)
      }
   }

   const onDelete = (id)=>{
      onClose(id);
      removeFav(id);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

      <div className={styles.Card}>
         {
            isFav ? (
               <button className={styles.buttonFav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.buttonNoFav} onClick={handleFavorite}>🤍</button>
            )
         }
         <div>
            <button className={styles.buttonCard} onClick={() => onDelete(id)}>X</button>
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
               </div>-
               <div>
                  {species}
               </div>
            </div>
         </Link>
      </div>
   );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (id) => dispatch(addFav(id)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);