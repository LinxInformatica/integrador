import React from 'react'
import styles from '../Form/Form.module.scss'
import { useState } from 'react'

import validation from './validation.js'

export default function Form(props) {
    const {login} = props;

    // Estado de los campos del form
    const [userData, setUserData] = useState({
        email:"",
        password:""
    }) 
    // estados de error
    const [errors,setErrors]= useState({
        email:"",
        password:""
    })
    //cambios en el form
    const handleChange =(event) =>{
        const property=event.target.name;
        const value=event.target.value;

        setUserData({...userData,[property]:value});
        validation({...userData,[property]:value},errors,setErrors);

    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }
    
    return (
        <form >
            <div className={styles.Form}>
                <label htmlFor="email">eMail:</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={userData.password} onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit </button>
            </div>
        </form>

    )
}
