import React, { useState, useEffect } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { Row, Col, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import AccountSettingsView from './AccountSettingsView'
import AddressForm from './AddressForm'

import '../css/ProfileScreenStyle.css';

const TabAddress = () => {
    const [addressChangeState, setAddressChangeState] = useState(false)

    const address = useSelector(state => state.address)
    const { addressInfo } = address
    // console.log('address in tab', address)

    const addressInfoObj = [
    	{key: 'Город', value: addressInfo.city},
    	{key: 'Населенный пункт', value: addressInfo.settlement},
    	{key: 'Улица', value: addressInfo.street},
    	{key: 'Дом', value: addressInfo.house},
    	{key: 'Квартира', value: addressInfo.apartment},
    	{key: 'Примечания', value: addressInfo.notes},
    ]

	return(
	        <AccountSettingsView 
	        	header = 'Адрес' 
	        	button = {
	        		addressChangeState ? (
	        				<Button
			                	form='address-form'
			                	type='submit'
		                	>
			                	Сохранить
			                </Button>
		                ) : 
	        			(
	        				<Button onClick={()=>setAddressChangeState(prev => !prev)} as='div'>
			                	Изменить
			                </Button>
		                )

	        	}
	        	content = {
		        	addressChangeState ? (
		        		<AddressForm addressChangeState setAddressChangeState={setAddressChangeState} address_id={addressInfo.id}/>
		        	) : 
		        	(
		        		<Table borderless size="sm" className='info-table'>
							  <tbody>
							    {addressInfoObj.filter(x => x.key !== 'Населенный пункт' || x.value).map(( listValue, index) => {
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

export default TabAddress;

