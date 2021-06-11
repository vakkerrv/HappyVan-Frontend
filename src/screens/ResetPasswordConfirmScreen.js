import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import FormContainer from '../components/FormContainer'
import { resetPasswordConfirm } from '../actions/userActions'

import RegisterSteps from '../components/RegisterSteps'

const ResetPasswordConfirmScreen = ({ match, history }) => {
    const [newPassword, setNewPassword] = useState('')
    const [reNewPassword, setReNewPassword] = useState('')
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()

    const { successConfirm } = useSelector(state => state.passwordReset)
    if (successConfirm){
        history.push('/')
    }

    const formHandler = (e) => {
        e.preventDefault()

        const uid = match.params.uid;
        const token = match.params.token;

        if (newPassword !== reNewPassword) {
            // setMessage('Passwords do not match')
        } else {
            dispatch(resetPasswordConfirm(uid, token, newPassword, reNewPassword))
        }
    }

    const fieldsObj = [
        {
            controlId: 'password', 
            type: 'password', 
            placeholder: 'Новый пароль', 
            method: (e) => setNewPassword(e.target.value),
            required: true,
        },
        {
            controlId: 'password2', 
            type: 'password', 
            placeholder: 'Подтвердите новый пароль', 
            method: (e) => setReNewPassword(e.target.value),
            required: true,
        },
    ]

    return (
        <Container>

            <RegisterSteps step1/>

            <h1>Введите новый пароль</h1>
            {message && <Alert variant='danger'>{message}</Alert>}

            <Form onSubmit={formHandler}>

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
                Обновить
            </Button>

            </Form>

        </Container>
    );
};

export default ResetPasswordConfirmScreen;
