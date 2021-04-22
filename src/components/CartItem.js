import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image, ListGroup, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { removeFromCart } from '../actions/cartActions'

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (

        <ListGroup.Item key={item.cart_item_id}>
            <Row>
                <Col md={3}>
                    {item.image ? (
                        <Image src={item.image[0].image} alt={'image'} fluid rounded />
                        ) : (
                        <Image alt={'image'} fluid rounded />
                        )
                    }
                </Col>

                <Col md={9}>
                    <h4 className='cart-name'>
                        {item.name}
                    </h4>

                    <div className='my-4'>
                        {parseFloat(item.price).toFixed(0)} токенов
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

{/*                    <Button
                        type='button'
                        variant='light'
                        className='my-2'
                        onClick = {() => removeFromCartHandler(item.cart_item_id)}
                    >
                        <i className='fas fa-trash'></i>
                    </Button>*/}
                </Col>
            </Row>
        </ListGroup.Item>
    )
}


export default CartItem;
