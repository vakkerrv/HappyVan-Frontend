import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

function LoginScreen({ location, history }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'
    // const redirect = '/'

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }

    return (
        <Container>
            <h1>Login</h1>

            <Row>
                <Col md={4}>   
                    
                    <Form onSubmit={submitHandler}>
                        
                        <Form.Group controlId='username' className='form-floating my-form-floating'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Username'
                                // value={1}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            >
                            </Form.Control>
                            <Form.Label>Username</Form.Label>
                        </Form.Group>

                        <Form.Group controlId='password' className='form-floating my-form-floating'>
                            <Form.Control
                                type='password'
                                placeholder='Enter Password'
                                // value={1}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            >
                            </Form.Control>
                            <Form.Label>Password</Form.Label>
                        </Form.Group>

                        <Button type='submit' variant='primary' className='my-1'>
                            Login
                        </Button>

                    </Form>

                    <Link to={'/register'}>
                        <Button type='button' variant='secondary' className='my-1'>
                            Register
                        </Button>
                    </Link>

                </Col> 
            </Row>

        </Container>
    )
}

export default LoginScreen
