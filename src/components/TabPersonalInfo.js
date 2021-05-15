import React, { useState, useEffect } from 'react'
import { Button, Table, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import AccountSettingsView from './AccountSettingsView'
import { updatePersonalInfo } from '../actions/userActions'

import '../css/ProfileScreenStyle.css';

const TabPersonalInfo = () => {
    const [personalChangeState, setPersonalChangeState] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [username, setUsername] = useState(userInfo.username)
    const [firstName, setFirstName] = useState(userInfo.first_name)
    const [lastName, setLastName] = useState(userInfo.last_name)
    const [email, setEmail] = useState(userInfo.email)
    const [phone, setPhone] = useState(userInfo.user_ext ? userInfo.user_ext.phone : null)

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
        	'username': username,
        	'first_name': firstName,
        	'last_name': lastName,
        	'email': email,
        	'phone': phone,
        }

        dispatch(updatePersonalInfo(updated_data, userInfo.id))
        setPersonalChangeState(false)
    }

	return(
		<div className='settings-block pb-2'>
		
	        <AccountSettingsView
	        	header = 'Персональная информация' 
	        	button = {
	        		personalChangeState ? (
			        		<Button type='submit' form='form-personal-info'>
			                	Сохранить
			                </Button>
	        			) : 
	        			(
			        		<Button onClick={()=>setPersonalChangeState(prev => !prev)} as='div'>
			                	Изменить
			                </Button>
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

        </div>
	)

}

export default TabPersonalInfo;

