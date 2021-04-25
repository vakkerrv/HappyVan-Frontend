import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Row, Col, Tabs, Tab } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileTab, SubscriptionTab } from '../components/ProfileSettings'

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


    return (
        <Container>
            
{/*            <Form.Group controlId='subscription_type'>
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
            </Button>*/}


            <Row>
                <Col md={8}>
                    <Tabs defaultActiveKey="profile" id="account-settings">
                        <Tab eventKey="profile" title="Аккаунт">
                            <ProfileTab/>
                        </Tab>
                        <Tab eventKey="subscription" title="Подписка">
                            <SubscriptionTab/>
                        </Tab>
                        <Tab eventKey="notifications" title="Уведомления">

                        </Tab>
                    </Tabs>
                </Col>
            </Row>

        </Container>
  	  
    );
};

export default ProfileScreen;
