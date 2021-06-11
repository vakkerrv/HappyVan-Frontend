import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setPassword } from '../actions/userActions'

import RegisterSteps from '../components/RegisterSteps'

const SetPasswordScreen = ({ history }) => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [reNewPassword, setReNewPassword] = useState('')
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()

    const { successSet } = useSelector(state => state.passwordReset)
    if (successSet){
        history.push('/profile')
    }

    const formHandler = (e) => {
        e.preventDefault()

        if (newPassword !== reNewPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(setPassword(newPassword, reNewPassword, currentPassword))
        }
    }

    const fieldsObj = [
        {
            controlId: 'currentPassword', 
            type: 'password', 
            placeholder: 'Текущий пароль', 
            method: (e) => setCurrentPassword(e.target.value),
            required: true,
        },
        {
            controlId: 'newPassword', 
            type: 'password', 
            placeholder: 'Новый пароль', 
            method: (e) => setNewPassword(e.target.value),
            required: true,
        },
        {
            controlId: 'reNewPassword', 
            type: 'password', 
            placeholder: 'Подтвердите новый пароль', 
            method: (e) => setReNewPassword(e.target.value),
            required: true,
        },
    ]

    return (
        <Container>

            <RegisterSteps step1/>

            <h1>Изменение пароля</h1>
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
                Сохранить
            </Button>

            </Form>

        </Container>
    );
};

export default SetPasswordScreen;
