import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../actions/userActions'

import '../css/InputFieldStyle.css';

function ResetPasswordScreen({ reset_password, history }) {
    const [requestSent, setRequestSent] = useState('')
    const [email, setEmail] = useState('')

    const { success } = useSelector(state => state.passwordReset)
    if (success){
        history.push({
            pathname: '/reset_password_sent',
            state: { email: email }
            })
    }

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(resetPassword(email))
    }

    return (
        <Container>
            <h1>Login</h1>

            <Row>
                <Col md={4}>   
                    
                    <Form onSubmit={submitHandler}>
                        
                        <Form.Group controlId='email' className='form-floating my-form-floating'>
                            <Form.Control
                                type='email'
                                placeholder=' '
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            >
                            </Form.Control>
                            <Form.Label>Email</Form.Label>
                        </Form.Group>

                        <Button type='submit' variant='primary' className='my-1'>
                            Reset password
                        </Button>

                    </Form>

                </Col> 
            </Row>

        </Container>
    )
}

export default ResetPasswordScreen
