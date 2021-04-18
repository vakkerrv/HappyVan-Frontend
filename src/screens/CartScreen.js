import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Container, Row, Col, Image, ListGroup, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'

// import Product from '../components/Product'
import { fetchCartList, removeFromCart } from '../actions/cartActions'

const CartScreen = () => {
    const dispatch = useDispatch()
    const cartCart = useSelector(state => state.cart)
    const { error, loading, cartItems } = cartCart

    useEffect(() => {
        dispatch(fetchCartList())
    }, [dispatch])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <Container>
        	<h1>Cart</h1>
                    {cartItems.length === 0 ? (
                    <Container>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Container>
                    ) : (                    
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                            <ListGroup.Item key={item.sku.cart_item_id}>
                                <Row>
                                    <Col md={3}>
                                        {item.sku.image ? (
                                            <Image src={item.sku.image[0].image} alt={'image'} fluid rounded />
                                            ) : (
                                            <Image alt={'image'} fluid rounded />
                                            )
                                        }
                                    </Col>

                                    <Col md={9}>
                                        <h4>
                                            {item.sku.name}
                                        </h4>

                                        <div className='my-4'>
                                            {item.sku.price}
                                        </div>

                                        {/*<Form.Control
                                            as="select"
                                            value={1} 
                                            size="sm"
                                            className='my-2'                        
                                        >
                                            {

                                                [...Array(5).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))
                                            }
                                        </Form.Control>*/}

                                        <Button
                                            type='button'
                                            variant='light'
                                            className='my-2'
                                            onClick = {() => removeFromCartHandler(item.cart_item_id)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            ))}
                        </ListGroup>    
                        )
                    }


        </Container>
    );
};

export default CartScreen;
