import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import CartItem from '../components/CartItem'
import OrderItem from '../components/OrderItem'
import { fetchCartList, createOrder } from '../actions/cartActions'
import { fetchOrderList } from '../actions/orderActions'

const CartScreen = () => {
    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()

    const order = useSelector(state => state.order)
    const { orderError, orderLoading, orderItems } = order

    const cart = useSelector(state => state.cart)
    const { cartError, cartLoading, cartItems } = cart

    const cartItemsNew = cartItems.filter(item => item.status === 'new')
    const cartItemsReturn = cartItems.filter(item => item.status === 'return')

    useEffect(() => {
        dispatch(fetchCartList())
        dispatch(fetchOrderList())
    }, [dispatch, fetchCartList])

    const createOrderHandler = () => {
        dispatch(createOrder())
    }

    return (
        <Container>
        	<h1>Корзина</h1>
                    {cartItems.length === 0 ? (
                    <Container>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Container>
                    ) : (

                        <Container id='cart-container'>
                            <Row>
                                <Col md={6}  id='onhand-items'>
                                    <h2 className='window-name'>Оставить у себя</h2>

                                    <ListGroup variant='flush'>
                                        {orderItems.map(item => (
                                            <OrderItem item = {item.sku} />
                                            ))
                                        }
                                    </ListGroup>
                                    
                                </Col>

                                <Col>
                                    <Row id='new-items'>
                                        <h2 className='window-name'>Добавить</h2>
                                        
                                        <ListGroup variant='flush'>
                                            {cartItemsNew.map(item => (
                                                <CartItem item = {item.sku} />
                                                ))
                                            }
                                        </ListGroup>
                                    </Row>
                                    <Row id='return-items'>
                                        <h2 className='window-name'>Вернуть</h2>
                                        
                                        <ListGroup variant='flush'>
                                            {cartItemsReturn.map(item => (
                                                <CartItem item = {item.sku} />
                                                ))
                                            }
                                        </ListGroup>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>

                        )
                    }
        
        <Container className='cart-footer'>
                <div className='d-flex flex-row-reverse'>
                    <Button 
                        className='mx-3'
                        onClick = {() => createOrderHandler()}
                    >
                        Продолжить
                    </Button>

                    <div className="text-end mx-2">
                        <h2>Итого</h2>
                        {cartItems.reduce((acc, item) => acc + parseFloat(item.sku.price), 0).toFixed(0)} токенов
                    </div>
                    
                </div>
        </Container>

        </Container>

    );
};

export default CartScreen;
