import React, {  } from 'react';
import { useDispatch } from 'react-redux'
import { Row, Col, Image, Button } from 'react-bootstrap';

import { removeFromCart } from '../actions/cartActions'

const CartItem = ({item, id}) => {
    const dispatch = useDispatch()

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (

        <Row>
            <Col md={3}>
                {item.image && item.image.length>0 ? (
                    <Image src={item.image[0].image} fluid rounded />
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
