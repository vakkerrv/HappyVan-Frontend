import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { payOrder, getOrderDetails } from '../actions/orderActions'
import { ORDER_PAY_RESET } from '../constants/orderConstants'

const PaymentOrderScreen = ({ match, history }) => {
    const orderId = match.params.id
    const dispatch = useDispatch()

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const subscription = useSelector(state => state.subscription)
    const { details: subDetails } = subscription

    useEffect(() => {

        if (!subDetails.id) {
            history.push('/login')
        }

        if (!order || successPay  || order.id !== Number(orderId)) {
            dispatch({ type: ORDER_PAY_RESET })
            
            dispatch(getOrderDetails(orderId))

        } else if (order.is_paid) {
            console.log('Payment accepted')
            history.push('/')
        }
    }, [dispatch, order, successPay])

    const OrderPayHandler = (e) => {   	
        e.preventDefault()
    	const body = {
    		'order_id': order.id,
    		'subscription_id': subDetails.id,
    	}
        dispatch(payOrder(body))
    }


    return (
    	<Container className='d-flex flex-column justify-content-center'>
			<h1 className='text-center'>Оплата доставки</h1>

			<Button className='btn btn-primary col-4 mx-auto'
				onClick={OrderPayHandler}
			>
				ОПЛОТИТЬ
			</Button>
		</Container>
    );
};

export default PaymentOrderScreen;
