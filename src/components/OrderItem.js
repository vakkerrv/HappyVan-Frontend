import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image, ListGroup, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// import { removeFromOrder } from '../actions/OrderActions'

const OrderItem = ({item}) => {
    const dispatch = useDispatch()

    // const removeFromOrderHandler = (id) => {
    //     dispatch(removeFromOrder(id))
    // }

    return (

        <ListGroup.Item key={item.order_item_id}>
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

                </Col>
            </Row>
        </ListGroup.Item>
    )
}


export default OrderItem;
