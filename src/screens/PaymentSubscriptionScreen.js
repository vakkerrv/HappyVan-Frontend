import React, { PropTypes } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { subscribe, updateSubscription } from '../actions/subsActions'

const SubscriptionPaymentScreen = ({ history,match }) => {
    const subPlanId = match.params.id

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const subscription = useSelector(state => state.subscription)
    const { details: subDetails } = subscription

    const SubscriptionPayHandler = (e) => {
        e.preventDefault()
        if (subDetails.id) {
            dispatch(updateSubscription(subDetails.id, subPlanId))
        }else{
            dispatch(subscribe(subPlanId))
        }

        if (cart.cartItems){
	        history.push('/cart')
        } else{
        	history.push('/catalog')
        }
    }


    return (
    	<Container className='d-flex flex-column justify-content-center'>
			<h1 className='text-center'>Оплата подписки</h1>

			<Button className='btn btn-primary col-4 mx-auto'
				onClick={SubscriptionPayHandler}
			>
				ОПЛОТИТЬ
			</Button>
		</Container>
    );
};

export default withRouter(SubscriptionPaymentScreen);
