import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Button, Table, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import AccountSettingsView from './AccountSettingsView'
import { updatePersonalInfo } from '../actions/userActions'

import '../css/ProfileScreenStyle.css';

const TabPersonalInfo = () => {
    const [personalChangeState, setPersonalChangeState] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [firstName, setFirstName] = useState(userInfo.first_name)
    const [lastName, setLastName] = useState(userInfo.last_name)
    const [email, setEmail] = useState(userInfo.email)
    const [phone, setPhone] = useState(userInfo.phone)

    const personalInfo = [
    	{key: 'Имя', value: firstName, type: 'text', onChange: (e) => setFirstName(e.target.value), required: true},
    	{key: 'Фамилия', value: lastName, type: 'text', onChange: (e) => setLastName(e.target.value), required: true},
    	{key: 'Электронная почта', value: email, type: 'email', onChange: (e) => setEmail(e.target.value), required: true},
    	{key: 'Телефон', value: phone, type: 'text', onChange: (e) => setPhone(e.target.value), required: true},
    ]


    const dispatch = useDispatch()

    const updatePersonalInfoHandler = (e) => {
        e.preventDefault()
        const updated_data = {
        	'first_name': firstName,
        	'last_name': lastName,
        	'email': email,
        	'phone': phone,
        }

        dispatch(updatePersonalInfo(updated_data, userInfo.id))
        setPersonalChangeState(false)
    }

	return(	
        <AccountSettingsView
        	header = 'Персональная информация' 
        	button = {
        		personalChangeState ? (
		        		<Button type='submit' form='form-personal-info'>
		                	Сохранить
		                </Button>
        			) : 
        			(
		        		<Fragment>
                            <Button onClick={()=>setPersonalChangeState(prev => !prev)} as='div'>
    		                	Изменить
    		                </Button>

                            <Link to={'/set_password'}>
                                <Button type='button' variant='secondary' className='my-1'>
                                    Изменить пароль
                                </Button>
                            </Link>
                        </Fragment>
        			)

        	}
        	content = {
        		personalChangeState ? (
			            <Form id='form-personal-info' onSubmit={updatePersonalInfoHandler}>
			            	{personalInfo.map((listValue, index) => {
			            		return (
			            			<Form.Group key={index} className='form-floating my-form-floating'>
				                        <Form.Control
				                            type={listValue.type}
				                            placeholder={listValue.key}
				                            value={listValue.value}
				                            onChange={listValue.onChange}
				                            required={listValue.required}
				                        >
				                        </Form.Control>
				                        <Form.Label>{listValue.key}</Form.Label>
				                    </Form.Group>
			            			)
			            	})}
                        </Form>
        			) : (
        				<Table borderless size="sm" className='info-table'>
							  <tbody>
							  	{personalInfo.map(( listValue, index) => {
						  			return (
							  			<tr key={index}>
									      <td>{listValue.key}</td>
									      <td>{listValue.value}</td>
									    </tr>
						  				)
						  			}
						  		)}
							  </tbody>
						</Table>
        			)
	        }

    	/>
	)

}

export default TabPersonalInfo;

