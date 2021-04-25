import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { removeFromCart } from '../actions/cartActions'

const CartItem = ({item, id}) => {
    const dispatch = useDispatch()

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (

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

                <div className='d-flex flex-row'>
                    <div className='my-4'>
                        {parseFloat(item.price).toFixed(0)} токенов
                    </div>
                        

                        <Button
                            type='button'
                            variant='white'
                            onClick={() => removeFromCartHandler(id)}
                        >
                            <i className='fas fa-trash'></i>
                        </Button>
                </div>
                

            </Col>
        </Row>
    )
}


export default CartItem;
