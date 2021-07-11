import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/userActions'
import { addListToCart } from '../../actions/cartActions'

import RegisterSteps from '../../components/RegisterSteps'
import InputField from '../../components/InputField'

import { validateEmail, validateName, validatePassword } from '../../components/FieldValidationFunc'

import notify from '../../components/notify';

const RegisterScreen = ({ location, history }) => {
    const locationState = location.state || {}

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [errorDict, setErrorDict] = useState({})
    const [errorOnSubmitDict, setErrorOnSubmitDict] = useState({})
    const [fieldsFilled, setFieldsFilled] = useState(false)

    const [consentData, setConsentData] = useState(false)
    const [consentMailing, setConsentMailing] = useState(false)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { userInfo, loading: loadingRegister, error: errorRegister } = userRegister

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: userInfoLogin } = userLogin

    const subscription = useSelector(state => state.subscription)
    const { details: subInfo} = subscription

    const { cartItems } = useSelector(state => state.cart)

    useEffect(() => {
        if (userInfoLogin){ //authorized customers should not get to this page
            if (subInfo.id){
                history.push('/thankyou')
            }else{
                history.push('/register/tariff')
            }
        }else

        if (errorRegister){
            if (errorRegister.email && errorRegister.email[0]==='user with this email address already exists.'){
                setErrorDict({...errorDict, 
                    email: {error: true, message: "Пользователь с таким e-mail уже зарегистрирован"}})
            }else{
                notify('Произошла ошибка. Пожалуйста, обратись в чат поддержки, мы обязательно вам поможем.')
            }
        }
    }, [history, userInfo, userInfoLogin, errorRegister])

    // Field validations
    useEffect(() => {
        setErrorDict({ 
            firstName: {error: !validateName(firstName) && firstName.length>0, message: "Имя может содерждать только буквы"},
            lastName: {error: !validateName(lastName) && lastName.length>0, message: "Фамилия может содерждать только буквы"},
            email: {error: !validateEmail(email) && email.length>0, message: "E-mail должен быть записан в формате name@email.domain"},
            phone: {error: phone.includes("_") && (phone.match(/_/g)||[]).length<10, message: "Введите телефон полностью"},
            password: {error: !validatePassword(password)[0] && password.length>0, message: validatePassword(password)[1]},
        })

        setFieldsFilled(firstName.length>0 && lastName.length>0 && email.length>0 && phone.length>0 && password.length>0 && password2.length>0)
    }, [firstName, lastName, email, phone, password, password2])

    const confirmPasswordHandler = () => {
        setErrorDict({...errorDict, 
        password2: (password !== password2 && password2.length>0),
        })
    } 

    const registerHandler = (e) => {
        e.preventDefault()

        setErrorOnSubmitDict({
            firstName:{error: firstName.length===0, message: "Имя не заполнено"},
            lastName:{error: lastName.length===0, message: "Фамилия не заполнена"},
            email:{error: email.length===0, message: "E-mail не заполнен"},
            phone:{error: phone.length===0, message: "Телефон не заполнен"},
            password:{error: password.length===0, message: "Пароль не заполнен"},
            password2:{error: password===password2, message: "Пароли не совпадают"},
        })

        if (fieldsFilled && 
            Object.values(errorDict).every(item => !item.error) && consentData){
                const user_register_data = {
                    'email': email,
                    'first_name': firstName,
                    'last_name': lastName,
                    'password': password,
                    'phone': phone,
                    'consent_mailing': consentMailing,
                }

            dispatch(register(user_register_data))
        }
    }
    // console.log('password', password, password2)
    // console.log('errorDict', errorDict)
    // console.log('errorDict.lastName && errorDict.lastName.error', errorDict.lastName && errorDict.lastName.error)

    return (
        <div className="registration">
            <div className="section-frame">
                <h1 className="page-title page-title_center"><span>Регистрация</span></h1>
                <RegisterSteps active_step={1}/>
                <div className="registration-content">
                    <p className="registration-subtitle">Заполните информацию о себе, чтобы мы создали ваш личный аккаунт</p>
                    <form onSubmit={registerHandler} className="registration-form">
                        <InputField 
                            onChangeHandler={setFirstName} 
                            error={errorDict.firstName && errorDict.firstName.error} 
                            error_message={errorDict.firstName && errorDict.firstName.message} 
                            type={"text"} 
                            name={"name"} 
                            placeholder={"Введите ваше имя"} 
                            errorOnSubmit={errorOnSubmitDict.firstName&&errorOnSubmitDict.firstName.error&&firstName.length===0}
                            errorMessageOnSubmit={errorOnSubmitDict.firstName&&errorOnSubmitDict.firstName.message}
                        />
                        <InputField 
                            onChangeHandler={setLastName} 
                            error={errorDict.lastName && errorDict.lastName.error} 
                            error_message={errorDict.lastName && errorDict.lastName.message} 
                            type={"text"} 
                            name={"surname"} 
                            placeholder={"Введите вашу фамилию"}
                            errorOnSubmit={errorOnSubmitDict.lastName&&errorOnSubmitDict.lastName.error&&lastName.length===0}
                            errorMessageOnSubmit={errorOnSubmitDict.lastName&&errorOnSubmitDict.lastName.message}
                        />
                        <InputField 
                            value={locationState.email}
                            onChangeHandler={setEmail} 
                            error={errorDict.email && errorDict.email.error} 
                            error_message={errorDict.email && errorDict.email.message} 
                            type={"text"} 
                            name={"email"} 
                            placeholder={"Введите ваш e-mail"}
                            errorOnSubmit={errorOnSubmitDict.email&&errorOnSubmitDict.email.error&&email.length===0}
                            errorMessageOnSubmit={errorOnSubmitDict.email&&errorOnSubmitDict.email.message}
                        />
                        <InputField 
                            onChangeHandler={setPhone} 
                            error={errorDict.phone && errorDict.phone.error} 
                            error_message={errorDict.phone && errorDict.phone.message} 
                            type={"text"} 
                            name={"phone"} 
                            placeholder={"Введите ваш телефон"}
                            errorOnSubmit={errorOnSubmitDict.phone&&errorOnSubmitDict.phone.error&&phone.length===0}
                            errorMessageOnSubmit={errorOnSubmitDict.phone&&errorOnSubmitDict.phone.message}
                        />
                        <InputField 
                            onChangeHandler={setPassword} 
                            error={errorDict.password && errorDict.password.error} 
                            error_message={errorDict.password&&errorDict.password.message} 
                            type={"password"} 
                            name={"password1"} 
                            placeholder={"Введите пароль"}
                            errorOnSubmit={errorOnSubmitDict.password&&errorOnSubmitDict.password.error&&password.length===0}
                            errorMessageOnSubmit={errorOnSubmitDict.password&&errorOnSubmitDict.password.message}
                        />
                        <InputField 
                            onChangeHandler={setPassword2} 
                            onBlurHandler={confirmPasswordHandler} 
                            error={errorDict.password2} 
                            error_message={"Пароли не сопадают"} 
                            type={"password"} 
                            name={"password2"} 
                            placeholder={"Подтвердить пароль"}
                            errorOnSubmit={errorOnSubmitDict.password2&&errorOnSubmitDict.password2.error&&password2.length===0}
                            errorMessageOnSubmit={errorOnSubmitDict.password2&&errorOnSubmitDict.password2.message}
                        />


                        <div 
                            onClick={()=>setConsentData(!consentData)} 
                            className={`registration-check ${consentData&&"catalog-filter__check_active"}`}
                        >
                            <div className="check">
                                <i className="fa-check"></i>
                            </div>
                            <p>Согласие на использование  и обработку персональных данных*</p>
                            <input type="checkbox" name="" />
                        </div>
                        <div 
                            onClick={()=>setConsentMailing(!consentMailing)} 
                            className={`registration-check ${consentMailing&&"catalog-filter__check_active"}`}>
                            <div className="check">
                                <i className="fa-check"></i>
                            </div>
                            <p>Согласие на получение рассылки  специальных предложений по почте</p>
                            <input type="checkbox" name="" />
                        </div>
                        <label className={`registration-sub ${
                            (!Object.values(errorDict).every(item => !item.error) || 
                                !fieldsFilled || !consentData) && "btn-disabled"}`}>
                            <input type="submit" value="Далее" />Далее
                        </label>
                    </form>
                </div>
               
            </div>
        </div>
    );
};

export default RegisterScreen;
