import React, { useState, useEffect } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const ProfileTab = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


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
						      <td>{userInfo.first_name}</td>
						    </tr>
						    <tr>
						      <td>Фамилия</td>
						      <td>{userInfo.last_name}</td>
						    </tr>
						    <tr>
						      <td>Электронная почта</td>
						      <td>{userInfo.email}</td>
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

export default ProfileTab;

