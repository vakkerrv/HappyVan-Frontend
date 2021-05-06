import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { unsubscribe, getSubscriptionDetail } from '../actions/subsActions'

const SubscriptionTab = ({ history }) => {
    const dispatch = useDispatch()

    const subscription = useSelector(state => state.subscription)
    const { details } = subscription

    useEffect(() => {
    	if(details){     		
        	dispatch(getSubscriptionDetail())
    	}
    }, [dispatch, history])

    const SubscribeHandler = (e) => {
        e.preventDefault()
        if(!details){
        	history.push('/register/plan')
        }
    }

    const UnsubscribeHandler = (e) => {
        e.preventDefault()
        if(details){
            dispatch(unsubscribe(details.id))
        }
    }

    let subInfo = []
    if (details){
	    const subDetails = details.sub_plan_id
	    subInfo = [
			{key: 'Тип', value: subDetails.id},
	    	{key: 'Всего токенов', value: subDetails.allowance},
	    	{key: 'Доступно токенов', value: 1000},
	    	{key: 'Использовано токенов', value: 4000},
	    	{key: 'Стоимость подписки', value:  parseFloat(subDetails.price).toFixed(0)},
	    	]
    }
    
	return(
		<div className='settings-block pb-2'>
			
			{!details ? (
				<Row>
		            <Col md={9} className='py-2'>
		            	Подписка не оформлена
		            </Col>
		            <Col md={3} className='py-2 px-4'>
		                <Button className='my-2' onClick={SubscribeHandler}>
		                	Оформить подписку
		                </Button>
		            </Col>
	            </Row>
				) : (
				<Row>

		            <Col md={9} className='py-2'>
		            	<Col md={6} className='col-no-padding'>
			                <Table borderless size="sm">
							  <tbody>
							  	{subInfo.map(( listValue, index ) => {
							          return (
						          		<tr key={index}>
									      <td>{listValue.key}</td>
									      <td>{listValue.value}</td>
									    </tr>
							          	)
							        })
							    }
							  </tbody>
							</Table>
						</Col>
		            </Col>
		            
		            <Col md={3} className='py-2 px-4'>
		                <Button className='my-2'>
		                	Изменить
		                </Button>
		                <Button 
		                	className='my-2'
		                	onClick={UnsubscribeHandler}
		                >
		                	Отменить
		                </Button>
		            </Col>
		        </Row>
	        	)}

        </div>
	)

}

export default withRouter(SubscriptionTab);

