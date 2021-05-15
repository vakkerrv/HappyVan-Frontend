import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { unsubscribe, getSubscriptionDetail } from '../actions/subsActions'

const SubscriptionTab = ({ history }) => {
    const dispatch = useDispatch()

    const subscription = useSelector(state => state.subscription)
    const { details: subDetails } = subscription

    useEffect(() => {
    	dispatch(getSubscriptionDetail())
    }, [history])

    const SubscribeHandler = (e) => {
        e.preventDefault()
        if(!subDetails.id){
        	history.push('/register/plan')
        }
    }

    const UnsubscribeHandler = (e) => {
        e.preventDefault()
        if(subDetails.id){
            dispatch(unsubscribe(subDetails.id))
        }
    }

    const changeSubscriptionHandler = (e) => {
        e.preventDefault()
        history.push('/register/plan')
    }

    const subPlanInfo = subDetails.sub_plan_id
	const subInfo = [
		{key: 'Тип', value: subPlanInfo ? subPlanInfo.id : ''},
    	{key: 'Всего токенов', value: subPlanInfo ? subPlanInfo.allowance : 0},
    	{key: 'Доступно токенов', value: 1000},
    	{key: 'Использовано токенов', value: 4000},
    	{key: 'Стоимость подписки', value:  parseFloat(subPlanInfo ? subPlanInfo.price : 0).toFixed(0)},
	]
    
	return(
		<div className='settings-block pb-2'>
			
			{!subDetails.id ? (
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
		                <Button 
		                	className='my-2'
		                	onClick={changeSubscriptionHandler}
		                >
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

