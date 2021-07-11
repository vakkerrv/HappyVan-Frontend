import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import FormContainer from '../components/FormContainer'
import { login } from '../../actions/userActions'

import InputField from '../../components/InputField'

const LoginScreen = ({ location, history }) => {
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const locationState = location.state || {}

    const [email, setEmail] = useState(locationState.email || '')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div className="registration">
            <div className="section-frame">
                <h1 className="page-title page-title_center"><span>Авторизация</span></h1>
                <div className="registration-content">
                    <p className="registration-subtitle">{locationState.firstName ? `${locationState.firstName}, приветсвуем вас снова в Swapie!` : 
                        "Приветствуем вас в Swapie!"}</p>
                    <form onSubmit={submitHandler} className="registration-form">
                        <InputField 
                            value={email}
                            onChangeHandler={setEmail} 
                            type={"text"} 
                            name={"email"} 
                            placeholder={"Введите ваш e-mail"} 
                            required={true}
                        />
                        <InputField 
                            onChangeHandler={setPassword} 
                            type={"password"} 
                            name={"password1"} 
                            placeholder={"Введите пароль"} 
                            required={true}
                        />

                        <div className="login-btn">
                            <label className="registration-sub">
                                <input type="submit" value="Далее" />Войти
                            </label>
                            <Link to='/reset_password'>Забыли пароль?</Link>
                        </div>

                        <div className="login-btn_nonauth">
                            <p >Еще не зарегистрировались?</p>
                            <Link to={'/register'} className="login-btn_registration">
                                Зарегистрироваться
                            </Link>
                        </div>
                    </form>
                </div>
               
            </div>
        </div>
    );
};

export default LoginScreen;
