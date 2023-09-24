import React from 'react'
import REXPRESSIONS from '../../helpers/rexpressions.helpers'

const validation = (userData, errors, setErrors) => {
    // validar email
    if (!userData.email) {
        setErrors({ ...errors, email: 'El email esta vacio' });
    } else {
        if (!REXPRESSIONS.MAIL.test(userData.email)) {
            setErrors({ ...errors, email: 'El email no es valido' });
        } else {
            if (userData.email.length > 35) {
                setErrors({ ...errors, email: 'El email no debe exceder los 35 caracteres' });
            } else setErrors({ ...errors, email: '' });
        }
    }

    // validar password
    if (!userData.password) {
        setErrors({ ...errors, password: 'La contraseña esta vacia' });
    } else {
        if (userData.password.length < 6 || userData.password.length > 10) {
            setErrors({ ...errors, password: 'La contraseña debe tner entre 6 y 10 caracteres' });
        } else {
            if (!REXPRESSIONS.TIENENUMERO.test(userData.password)) {
                setErrors({ ...errors, password: 'La contraseña deberia tener por lo menos un numero' });
            } else setErrors({ ...errors, password: '' });
        }

    }
}
export default validation;