import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import CartItem from '../components/CartItem'
import BagItem from '../components/BagItem'
import { fetchCartList } from '../actions/cartActions'
import { fetchBagList } from '../actions/bagActions'
import { createOrder } from '../actions/orderActions'

import { BAG_STATUS_TO_RETURN } from '../constants/bagConstants'

const CartScreen = (  ) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const { details } = useSelector(state => state.subscription)

    const bag = useSelector(state => state.bag)
    const { bagItems } = bag

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (userInfo) {
            dispatch(fetchCartList()) 
        }
        if (details){
            dispatch(fetchBagList())
        }
    }, [userInfo, details, dispatch])

    const createOrderHandler = () => {
        dispatch(createOrder())
    }

    return (
        <Fragment>
        <Container>
        	<h1>Корзина</h1>
                <Row>
                    <Col md={6} id='new-items'>
                    <h2 className='window-name'>Добавить</h2>

                    {cartItems.length === 0 ? (
                        <Container></Container>
                        ) : (
                            <Container id='cart-container'>
                                    
                                <ListGroup variant='flush'>
                                    {cartItems.map(item => (
                                        <ListGroup.Item key={item.id}>
                                            <CartItem item = {item.item_id} id = {item.id}/>
                                        </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>
 
                            </Container>
                        )
                    }
                    </Col>

                    {details ? (
                        <Col md={6}  id='onhand-items'>
                        <h2 className='window-name'>Текущий набор</h2>

                        {bagItems.length === 0 ? (
                            <Container></Container>
                            ) : (
                                <Container id='cart-container'>

                                    <ListGroup variant='flush'>
                                        {bagItems.map(item => (
                                            <ListGroup.Item 
                                                key={item.id} 
                                                className={item.status===BAG_STATUS_TO_RETURN ? 'bag-item-return' : 'bag-item-active'}
                                                // className={'bag-item-return'}
                                            >
                                                <BagItem 
                                                    item = {item.item_id} 
                                                    id = {item.id}
                                                    status = {item.status}/>
                                            </ListGroup.Item>
                                            ))
                                        }
                                    </ListGroup>
                                        
                                </Container>
                            )
                        }
                        </Col>
                        ) : (
                            <Col md={6}></Col>
                        )}
                    

                </Row>
        </Container>

        <div className='cart-footer container-fluid'>

            {details ? (
                <div className='d-flex flex-row-reverse'>
                    <Button 
                        className='mx-3'
                        onClick = {() => createOrderHandler()}
                    >
                        Продолжить
                    </Button>

                    <div className="text-end mx-2">
                        <h2>Итого</h2>
                        {cartItems.length !== 0 ? (
                            cartItems.reduce(function(acc, item){
                                return acc + (item.item_id ? parseFloat(item.item_id.price) : 0)
                            }, 0).toFixed(0)
                        ) : (
                            0
                            )
                        } токенов
                    </div>
                </div>
                ) : (
                    <LinkContainer 
                        to='/register/plan'
                    >
                        <div className='d-flex flex-row-reverse'>
                            <div className='get-started-button'>
                                Оформить подписку
                            </div>
                        </div>
                    </LinkContainer>
                )
            }

            
        </div>

        </Fragment>
    );
};

export default CartScreen;
