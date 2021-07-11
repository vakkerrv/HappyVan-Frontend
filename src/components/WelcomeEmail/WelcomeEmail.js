import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { checkInfo } from '../../actions/userActions'

const WelcomeEmail = ({center, history}) => {
    const [email, SetEmail] = useState('')

    const dispatch = useDispatch()

    const StartHandler = (e) => {
        e.preventDefault()
        // dispatch(checkInfo(email))

        Promise.resolve(dispatch(checkInfo(email))).then(function (response) {
            pushOnSubmit(response);
            return response;
        })
    }

    const pushOnSubmit = (data) => {
        if(data){
            history.push('/thankyou')
            // history.push({
                // pathname: '/login', 
                // state: {email: data.email, firstName: data.first_name, lastName: data.last_name}
            // })
        } else {
            history.push({
                pathname: '/register', 
                state: {email: email}
            })
        }
    }

    return (
        <form className={`submit-form swapie-form ${center&&"swapie-form_center"}`} onSubmit={StartHandler}>
            <input 
                type="email" 
                name="email"
                value={email}  
                onChange={(e) => SetEmail(e.target.value)} 
                className="swapie-form__input" 
                placeholder="Введите Ваш e-mail" 
            />
            <label className="swapie-form__submit">
                <input type="submit" value="Начать"/>Начать
            </label>
        </form>
    );
};

export default withRouter(WelcomeEmail);
