import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const registerHandler = (e) => {
        e.preventDefault()
        const user_register_data = {
        	'username': username,
        	'firstName': firstName,
        	'lastName': lastName,
        	'password': password,
        }

        if (password !== password2) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(user_register_data))
            history.push('/register/plan')
        }
    }

    return (
        <Container>
            <h1>Sign In</h1>
            {message && <Alert variant='danger'>{message}</Alert>}

            <Form onSubmit={registerHandler}>

            <Row>
            	<Col md={4}>
            		<Form.Group controlId='username' className='form-floating my-form-floating'>
                        <Form.Control
                            type='text'
                            placeholder='Username'
                            // value={1}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        >
                        </Form.Control>
                        <Form.Label>Username</Form.Label>
                    </Form.Group>
            	</Col>
            </Row>
                
            <Row>
                <Col md={4}>   

                    <Form.Group controlId='firstName' className='form-floating my-form-floating'>
                        <Form.Control
                            type='text'
                            placeholder='placeholder'
                            // value={1}
                            // onChange={(e) => setUsername(e.target.value)}
                        >
                        </Form.Control>
                        <Form.Label>First Name</Form.Label>
                    </Form.Group>
                </Col>

                <Col md={4}>
                    <Form.Group controlId='lastName' className='form-floating my-form-floating'>
                        <Form.Control
                            type='text'
                            placeholder='Last Name'
                            // value={1}
                            // onChange={(e) => setUsername(e.target.value)}
                        >
                        </Form.Control>
                        <Form.Label>Last Name</Form.Label>
                    </Form.Group>
                </Col>
            </Row>
                        
            <Row>
            	<Col md={4}> 
	                <Form.Group controlId='password' className='form-floating my-form-floating'>
	                    <Form.Control
	                        type='password'
	                        placeholder='Password'
	                        // value={1}
	                        onChange={(e) => setPassword(e.target.value)}
	                        required
	                    >
	                    </Form.Control>
	                    <Form.Label>Password</Form.Label>
	                </Form.Group>
                </Col>

                <Col md={4}>
	                <Form.Group controlId='password2' className='form-floating my-form-floating'>
	                    <Form.Control
	                        type='password'
	                        placeholder='Password'
	                        // value={1}
	                        onChange={(e) => setPassword2(e.target.value)}
	                        required
	                    >
	                    </Form.Control>
	                    <Form.Label>Confirm Password</Form.Label>
	                </Form.Group>
                </Col>
            </Row>

            <Button type='submit' variant='primary' className='my-1'>
                Create an account
            </Button>

            </Form>

        </Container>
    );
};

export default RegisterScreen;
