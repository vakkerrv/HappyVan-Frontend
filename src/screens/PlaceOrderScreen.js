import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col, ListGroup, Image, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'

import CartItem from '../components/CartItem'

import { fetchCartList } from '../actions/cartActions'
import { fetchBagList } from '../actions/bagActions'

function PlaceOrderScreen({ history }) {
    const [deliveryOption, setDeliveryOption] = useState('')

    const {amount} = useSelector(state => state.token)

    const address = useSelector(state => state.address)
    const { addressInfo } = address

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const bag = useSelector(state => state.bag)
    const { bagItems } = bag

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success: orderCreateSuccess } = orderCreate

    const subscription = useSelector(state => state.subscription)
    const { details: subscriptionDetails } = subscription

    const dispatch = useDispatch()

    useEffect(() => {
        // if (cartItems.length === 0 && userInfo) {
        if (userInfo) {
            dispatch(fetchCartList()) 
        }
        // if (bagItems.length === 0  && userInfo){
        if (userInfo){
            dispatch(fetchBagList())
        }

        if (orderCreateSuccess){
            history.push(`/order_payment/${order.id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [userInfo, dispatch, orderCreateSuccess])

    const placeOrder = (e) => {
        e.preventDefault()
        dispatch(createOrder({
            subscription_id: subscriptionDetails.id,
            delivery_option: 'standard',
            delivery_date: 2,
            delivery_time_from: 5, 
            delivery_time_to: 6,
        }))
    }

    return (
        <Container>

            <h1>Подтверждение заказа</h1>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2 className='mb-4'>Адрес доставки</h2>

                            <p>{userInfo.first_name} {userInfo.last_name}</p>
                            {/*<p>{addressInfo.settlement ? addressInfo.settlement : addressInfo.city}, {addressInfo.street}, {addressInfo.house}</p>*/}
                            {addressInfo.id ? (<p>
                                    {addressInfo.settlement ? addressInfo.settlement : addressInfo.city}, {addressInfo.street}, {addressInfo.house}
                                </p>) : (
                                    <p>Адрес не указан</p>)}
                            
                            <p>{addressInfo.notes && addressInfo.notes}</p>

                            <Row>
                                <Col>Способ доставки</Col>
                                <Col>
                                    <Form.Control
                                        as="select"
                                        value={deliveryOption}
                                        onChange={(e) => setDeliveryOption(e.target.value)}
                                    >
                                        {

                                            ['Стандартная', 'Ускоренная'].map((x) => (
                                                <option key={x} value={x}>
                                                    {x}
                                                </option>
                                            ))
                                        }

                                    </Form.Control>
                                </Col>
                            </Row>

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Игрушки на возврат</h2>

                            {bagItems.filter(x => x.to_return).length === 0 ? 
                                    (
                                        <p>Вы не возвращаете никакие игрушки</p>
                                    ) : (
                                        <ListGroup variant='flush'>
                                        {bagItems.filter(x => x.to_return).map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row className='d-flex flex-row align-items-center'>
                                                    <Col md={2}>
                                                        {item.item_id.image ? (
                                                            <Image src={item.item_id.image[0].image} alt={'image'} fluid rounded />
                                                            ) : (
                                                            <Image alt={'image'} fluid rounded />
                                                            )
                                                        }
                                                    </Col>

                                                    <Col>
                                                        <Link to={`/product/${item.id}`}>{item.item_id.name}</Link>
                                                    </Col>

                                                    <Col>
                                                        {parseFloat(item.item_id.price).toFixed(0)} токенов
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            )
                                        )}
                                        </ListGroup>
                                    )}

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Новые игрушки</h2>
                            
                                {cartItems.length === 0 ? 
                                    (
                                        <p>Вы не выбрали новые игрушки</p>
                                    ) : (
                                        <ListGroup variant='flush'>
                                        {cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row className='d-flex flex-row align-items-center'>
                                                    <Col md={2}>
                                                        {item.item_id && item.item_id.image && item.item_id.image.length>0 ? (
                                                            <Image src={item.item_id.image[0].image} alt={'image'} fluid rounded />
                                                            ) : (
                                                            <Image alt={'image'} fluid rounded />
                                                            )
                                                        }
                                                    </Col>

                                                    <Col>
                                                        <Link to={`/product/${item.id}`}>{item.item_id.name}</Link>
                                                    </Col>

                                                    <Col>
                                                        {parseFloat(item.item_id.price).toFixed(0)} токенов
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            )
                                        )}
                                        </ListGroup>
                                    )}

                        </ListGroup.Item>

                    </ListGroup>

                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Стоимость</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Использованных токенов:</Col>
                                    <Col>{amount.totalTokenAmount}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Оставшихся токенов:</Col>
                                    <Col>{amount.leftTokenAmount}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Стоимость доставки:</Col>
                                    <Col>300 рублей</Col>
                                </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                <Row>
                                    <Col>Итого:</Col>
                                    <Col>300 рублей</Col>
                                </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    disabled={cartItems.length === 0 && bagItems.length===0}
                                    onClick={placeOrder}
                                >
                                    Оформить заказ
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PlaceOrderScreen;
