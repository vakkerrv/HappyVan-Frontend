import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import { addListToCart } from '../actions/cartActions'

import RegisterSteps from '../components/RegisterSteps'

const RegisterScreen = ({ location, history }) => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { userInfo } = userRegister

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: userInfoLogin } = userLogin

    const { cartItems } = useSelector(state => state.cart)

    useEffect(() => {
        if (userInfoLogin){
            history.push('/')
        } else
        if (userInfo) {
            history.push('/register/plan')
        }
    }, [history, userInfo, userInfoLogin])

    const registerHandler = (e) => {
        e.preventDefault()
        const user_register_data = {
        	'username': username,
            'email': email,
        	'first_name': firstName,
        	'last_name': lastName,
        	'password': password,
            phone: phone,
            // 'user_ext': {
            //     phone: phone,
            //     registration_step: 1,
            // }
        }

        if (password !== password2) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(user_register_data))
            // console.log('before dispatching')
            // Promise.resolve(dispatch(register(user_register_data))).then(function (response) {
            //       dispatch(addListToCart(cartItems.map(x => x.item_id.id))); //dispatch
            //       return response;
            //     })

            // history.push('/register/plan')
        }
    }

    const fieldsObj = [
        {
            controlId: 'username', 
            type: 'text', 
            placeholder: 'Логин', 
            method: (e) => setUsername(e.target.value),
            required: true,
        },
        {
            controlId: 'email', 
            type: 'email', 
            placeholder: 'Email', 
            method: (e) => setEmail(e.target.value),
            required: false,
        },

        {
            controlId: 'firstName', 
            type: 'text', 
            placeholder: 'Имя', 
            method: (e) => setFirstName(e.target.value),
            required: false,
        },
        {
            controlId: 'lastName', 
            type: 'text', 
            placeholder: 'Фамилия', 
            method: (e) => setLastName(e.target.value),
            required: false,
        },
        {
            controlId: 'phone', 
            type: 'text', 
            placeholder: 'Телефонный номер', 
            method: (e) => setPhone(e.target.value),
            required: false,
        },
        {
            controlId: 'password', 
            type: 'password', 
            placeholder: 'Пароль', 
            method: (e) => setPassword(e.target.value),
            required: true,
        },
        {
            controlId: 'password2', 
            type: 'password', 
            placeholder: 'Подтвердите пароль', 
            method: (e) => setPassword2(e.target.value),
            required: true,
        },
    ]

    return (
        <Container>

            <RegisterSteps step1/>

            <h1>Создайте аккаунт</h1>
            {message && <Alert variant='danger'>{message}</Alert>}

            <Form onSubmit={registerHandler}>

            <Row>
                <Col md={4}>
                    {fieldsObj.map((listValue, index) => {
                        return(
                            <Form.Group controlId={listValue.controlId} className='form-floating my-form-floating' key={index}>
                                <Form.Control
                                    type={listValue.type}
                                    placeholder={listValue.placeholder}
                                    onChange={listValue.method}
                                    required={listValue.required}
                                >
                                </Form.Control>
                                <Form.Label>{listValue.placeholder}</Form.Label>
                            </Form.Group>
                        )
                    })}
                    
                </Col>

            </Row>

            <Button type='submit' variant='primary' className='my-1'>
                Зарегистрироваться
            </Button>

            </Form>

        </Container>
    );
};

export default RegisterScreen;
