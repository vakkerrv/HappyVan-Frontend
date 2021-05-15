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


    const subscription = useSelector(state => state.subscription)
    const { details: subDetails } = subscription

    const address = useSelector(state => state.address)
    const { addressInfo } = address

    const bag = useSelector(state => state.bag)
    const { bagItems } = bag

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (userInfo && cartItems.length===0) {
            dispatch(fetchCartList()) 
        }
        if (subDetails.id && bagItems.length===0){
            dispatch(fetchBagList())
        }
    }, [userInfo, subDetails, dispatch])

    const createOrderHandler = () => {
        dispatch(createOrder())
    }

    const nextStepObj = {}
    if (userInfo && subDetails.id && addressInfo.id){
        nextStepObj['link'] = '/placeorder'
    }else if (userInfo && subDetails.id){
        nextStepObj['link'] = '/register/address'       
    }else if (userInfo){
        nextStepObj['link'] = '/register/plan'              
    }else if (userInfo){
            nextStepObj['link'] = '/register'              
    }else{
        nextStepObj['link'] = '/register'
    }

    const {amount} = useSelector(state => state.token)

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

                    {subDetails.id ? (
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
                                                className={item.to_return ? 'bag-item-return' : 'bag-item-active'}
                                                // className={'bag-item-return'}
                                            >
                                                <BagItem 
                                                    item = {item.item_id} 
                                                    id = {item.id}
                                                    status = {item.to_return}/>
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

            {/*{subDetails ? (
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
                ) : (*/}
                    <LinkContainer 
                        to={nextStepObj.link}
                    >
                        <div className='d-flex flex-row-reverse'>
                            <div className='get-started-button'>
                                Продолжить
                            </div>

                            <div className="text-end mx-2">
                                {!userInfo ? (
                                    <div>
                                        <h2>Токенов выбрано</h2>
                                        {amount.totalTokenAmount}
                                    </div>
                                    ) : (
                                    <div>
                                        <h2>Токенов выбрано / Токенов осталось</h2>
                                        {amount.totalTokenAmount} / {amount.leftTokenAmount}
                                    </div>
                                    )}
                            </div>
                        </div>
                    </LinkContainer>
                {/*)*/}
            {/*}*/}

            
        </div>

        </Fragment>
    );
};

export default CartScreen;
