import React, { PropTypes } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

const PaymentOrderScreen = ({history}) => {

    const OrderPayHandler = (e) => {
        e.preventDefault()
        history.push('/')
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

export default withRouter(PaymentOrderScreen);
