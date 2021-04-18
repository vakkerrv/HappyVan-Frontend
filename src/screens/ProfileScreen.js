import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const ProfileScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Container>
            <Button onClick={logoutHandler}>    
                Logout
            </Button>
        </Container>
  	  
    );
};

export default ProfileScreen;
