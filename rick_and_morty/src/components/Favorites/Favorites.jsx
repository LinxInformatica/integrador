import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from '../Cards/Cards.module.scss'
import React from 'react';
import { useState, useEffect } from 'react';

class Favorites extends React.Component {
    constructor(props) {
        super(props);
        //stados locales
        this.state = {
            myFavs: []
        }
    }
    componentDidMount() {
        this.updateFavorites();
    }

    componentDidUpdate(oldProps) {
        if (this.props.characters !== oldProps.characters || this.props.myFavorites !== oldProps.myFavorites) {
            this.updateFavorites()
        }
    }

    updateFavorites() {
        const { characters, myFavorites } = this.props;
        if (characters && myFavorites) {
            const newFavorites = characters.filter((char) => myFavorites.includes(char.id));
            this.setState({ myFavs: newFavorites });
        }
    }

    render() {
        const { onClose } = this.props;
        const { myFavs } = this.state

        return (
            <div>
                <div className={styles.Cards}>
                    {
                        myFavs.map(character => (
                            <Card key={character.id}
                                id={character.id}
                                name={character.name}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}
                                origin={character.origin.name}
                                image={character.image}
                                onClose={onClose}
                            />)
                        )
                    }
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)

// const Favorites = (props) => {

//     const { characters, onClose } = props;
//     const { myFavorites } = props;

//     const [myFavs, setMyFavs] = useState([])

//     useEffect(() => {
//         console.log('fav',characters)
//         if (characters && myFavorites) {
//             const newFavorites = characters.filter((char) => myFavorites.includes(char.id))
//             console.log(newFavorites)
//             setMyFavs(newFavorites);
//         }
//     }, [characters,myFavorites]);

//     return (
//         <div>
//             <div className={styles.Cards}>
//                 {
//                     myFavs.map(character => (
//                         <Card key={character.id}
//                             id={character.id}
//                             name={character.name}
//                             status={character.status}
//                             species={character.species}
//                             gender={character.gender}
//                             origin={character.origin.name}
//                             image={character.image}
//                             onClose={onClose}
//                         />)
//                     )
//                 }
//             </div>
//         </div>
//     );
// }

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps, null)(Favorites)