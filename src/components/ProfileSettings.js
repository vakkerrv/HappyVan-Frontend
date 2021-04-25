import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Button, Container, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { subscribe } from '../actions/subsActions'

export const ProfileTab = () => {

	return(
		<div className='settings-block pb-2'>
		
			<Row>
				<h2 className='mb-3'>
					Персональная информация
				</h2>


	            <Col md={9} className='py-2'>
	            	<Col md={6} className='col-no-padding'>
		                <Table borderless size="sm">
						  <tbody>
						    <tr>
						      <td>Имя</td>
						      <td>Mark</td>
						    </tr>
						    <tr>
						      <td>Фамилия</td>
						      <td>Jacob</td>
						    </tr>
						    <tr>
						      <td>Электронная почта</td>
						      <td></td>
						    </tr>
						  </tbody>
						</Table>
					</Col>
	            </Col>
	            
	            <Col md={3} className='py-2 px-4'>
	                <Button>
	                	Изменить
	                </Button>
	            </Col>
	        </Row>


	        <Row>
				<h2 className='mb-3'>
					Адрес
				</h2>


	            <Col md={9} className='py-2'>
	            	<Col md={6} className='col-no-padding'>
		                <Table borderless size="sm">
						  <tbody>
						    <tr>
						      <td>Город</td>
						      <td></td>
						    </tr>
						    <tr>
						      <td>Улица</td>
						      <td></td>
						    </tr>
						    <tr>
						      <td>Дом</td>
						      <td></td>
						    </tr>
						  </tbody>
						</Table>
					</Col>
	            </Col>
	            
	            <Col md={3} className='py-2 px-4'>
	                <Button>
	                	Изменить
	                </Button>
	            </Col>
	        </Row>

	        <Row>
				<h2 className='mb-3'>
					Способ оплаты
				</h2>
	        </Row>

        </div>
	)

}



export const SubscriptionTab = ({ history }) => {
    const [subType, setSubType] = useState(1)

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // const subscription = useSelector(state => state.subscription)
    // const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const SubscribeHandler = (e) => {
        e.preventDefault()
        if(subType!==''){
            dispatch(subscribe(userInfo.id, subType))
        }
    }

	return(
		<div className='settings-block pb-2'>
			
			{false ? (
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
							    <tr>
							      <td>Тип</td>
							      <td>1</td>
							    </tr>
							    <tr>
							      <td>Всего токенов</td>
							      <td>5000</td>
							    </tr>
							    <tr>
							      <td>Доступно токенов</td>
							      <td>1000</td>
							    </tr>
							    <tr>
							      <td>Использовано токенов</td>
							      <td>4000</td>
							    </tr>
							    <tr>
							      <td>Стоимость подписки</td>
							      <td> 5 рублей </td>
							    </tr>
							  </tbody>
							</Table>
						</Col>
		            </Col>
		            
		            <Col md={3} className='py-2 px-4'>
		                <Button className='my-2'>
		                	Изменить
		                </Button>
		                <Button className='my-2'>
		                	Отменить
		                </Button>
		            </Col>
		        </Row>
	        )}

        </div>
	)

}



