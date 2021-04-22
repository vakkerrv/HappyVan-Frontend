import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../actions/userActions'
import { subscribe } from '../actions/subsActions'

const ProfileScreen = ({ history }) => {
    const [subType, setSubType] = useState(1)


    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // const subscription = useSelector(state => state.subscription)
    // const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const SubscribeHandler = (e) => {
        e.preventDefault()
        if(subType!==''){
            dispatch(subscribe(userInfo.id, subType))
        }
    }

        const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Container>
            
            <Form.Group controlId='subscription_type'>
                <Form.Label>Выберите тип подписки</Form.Label>
                <Form.Control 
                    as="select"
                    // value={2}
                    onChange={(e) => setSubType(e.target.value)}
                    required
                    >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Form.Control>
            </Form.Group>

            <Button type='submit' onClick={SubscribeHandler}>    
                Подписаться
            </Button>

            <div className='my-4'>
                <Button onClick={logoutHandler}>    
                    Logout
                </Button>
            </div>
        </Container>
  	  
    );
};

export default ProfileScreen;
