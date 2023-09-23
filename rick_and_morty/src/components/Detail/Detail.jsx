import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SITEROUTES from "../../helpers/routes.helpers";

import styles from "../Detail/Detail.module.scss"


export default function Detail() {
   const [character, setCharacter] = useState({});

   const { id } = useParams();



   useEffect(() => {
      axios(`${SITEROUTES.URL}/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
      return setCharacter({});
   }, [id]);

   return (
      <div>
         {character.name && (
            <Link to={SITEROUTES.HOME}>
               <div className={styles.Detail}>
                  <div className={styles.img}>
                     <img src={character.image} alt='{image}' />
                  </div>
                  <div>
                     <div>
                        {character.status}
                     </div>
                     <div>
                        {character.species}
                     </div>
                     <div>
                        {character.gender}
                     </div>
                     <div>
                        {character.origin.name}
                     </div>
                  </div>
               </div>
            </Link>
         )}
      </div>
   );
}
