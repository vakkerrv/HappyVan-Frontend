import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import CartItem from '../components/CartItem'
import BagItem from '../components/BagItem'
import { fetchCartList } from '../actions/cartActions'
import { createOrder } from '../actions/orderActions'
import { fetchBagList } from '../actions/bagActions'

import { BAG_STATUS_TO_RETURN } from '../constants/bagConstants'

const CartScreen = ({ history }) => {
    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const bag = useSelector(state => state.bag)
    const { bagError, bagLoading, bagItems } = bag

    const cart = useSelector(state => state.cart)
    const { cartError, cartLoading, cartItems } = cart

    useEffect(() => {
        if (!userInfo) {
            history.push('/')
        }else{
            dispatch(fetchCartList())
            dispatch(fetchBagList())    
        }
    }, [history, userInfo, dispatch])

    const createOrderHandler = () => {
        dispatch(createOrder())
    }

    return (
        <Fragment>
        <Container>
        	<h1>Корзина</h1>
                <Row>
                    <Col md={6} id='new-items'>

                    {cartItems.length === 0 ? (
                        <Container>
                            Your cart is empty
                        </Container>
                        ) : (

                            <Container id='cart-container'>
                                    <h2 className='window-name'>Добавить</h2>
                                    
                                    <ListGroup variant='flush'>
                                        {cartItems.map(item => (
                                            <ListGroup.Item key={item.cart_item_id}>
                                                <CartItem item = {item.sku} id = {item.cart_item_id}/>
                                            </ListGroup.Item>
                                            ))
                                        }
                                    </ListGroup>
                                    {/*<Row id='return-items'>
                                        <h2 className='window-name'>Вернуть</h2>
                                        
                                        <ListGroup variant='flush'>
                                            {cartItemsReturn.map(item => (
                                                <OrderItem item = {item.sku} key={item.sku.cart_item_id}/>
                                                ))
                                            }
                                        </ListGroup>
                                    </Row>*/}
                            </Container>
                        )
                    }
                    </Col>


                    <Col md={6}  id='onhand-items'>
                    <h2 className='window-name'>Текущий набор</h2>

                    {bagItems.length === 0 ? (
                        <Container>
                            
                        </Container>
                        ) : (
                            <Container id='cart-container'>
                                        <ListGroup variant='flush'>
                                            {bagItems.map(item => (
                                                <ListGroup.Item 
                                                    key={item.bag_item_id} 
                                                    className={item.status===BAG_STATUS_TO_RETURN ? 'bag-item-return' : 'bag-item-active'}
                                                    // className={'bag-item-return'}
                                                >
                                                    <BagItem 
                                                        item = {item.sku} 
                                                        id = {item.bag_item_id}
                                                        status = {item.status}/>
                                                </ListGroup.Item>
                                                ))
                                            }
                                        </ListGroup>
                                        
                            </Container>
                        )
                    }
                    </Col>

                </Row>
        </Container>

        <div className='cart-footer container-fluid'>
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
                        cartItems.reduce((acc, item) => acc + parseFloat(item.sku.price), 0).toFixed(0)
                    ) : (
                        0
                        )
                    } токенов
                </div>
                
            </div>
        </div>

        </Fragment>
    );
};

export default CartScreen;
