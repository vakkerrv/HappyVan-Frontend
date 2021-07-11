import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { AddressSuggestions } from 'react-dadata/dist/esm/AddressSuggestions';
import 'react-dadata/dist/react-dadata.css';

import { addAddress } from '../actions/userActions'
import { updateAddress } from '../actions/userActions'

const AddressForm = ({history, addressChangeState, setAddressChangeState, address_id}) => {
    const address = useSelector(state => state.address)
    const { addressInfo } = address

    const [city_with_type, setCity] = useState({data:{city_fias_id: addressInfo.city_fias_id}, value: addressInfo.city})
    const [settlement_with_type, setSettlement] = useState({data:{settlement_fias_id: addressInfo.settlement_fias_id}, value: addressInfo.settlement})
    const [street_with_type, setStreet] = useState({data:{street_fias_id: addressInfo.street_fias_id}, value: addressInfo.street})
    const [house, setHouse] = useState({data:{house_fias_id: addressInfo.house_fias_id}, value: addressInfo.house})
    const [apartment, setApartment] = useState(addressInfo.apartment)
    const [notes, setNotes] = useState(addressInfo.notes)

    const geo_lat = house.data.geo_lat
    const geo_lon = house.data.geo_lon
    const postal_code = house.data.postal_code
    console.log('apartment', apartment)

    const manualInputHandler = (level, e) => {
        if(level==='city_with_type'){
            setCity({data:{}, value: e.target.value})
        }
        if(level==='settlement_with_type'){
            setSettlement({data:{}, value: e.target.value})
        }
        if(level==='street_with_type'){
            setStreet({data:{}, value: e.target.value})
        }
        if(level==='house'){
            setHouse({data:{}, value: e.target.value})
        }
    }

    let inputParams = []
    inputParams = [
        {
            key: 'Город', 
            value: city_with_type,
            level: 'city_with_type', 
            filterFromBound: 'city', 
            filterToBound: 'city', 
            method: setCity, 
            filterLocations:[{"region": "московская"}, {"region": "москва"}]
        },
        {
            key: 'Населенный пункт', 
            value: settlement_with_type,
            level: 'settlement_with_type', 
            filterFromBound: 'settlement', 
            filterToBound: 'settlement', 
            method: setSettlement, 
            filterLocations: [{"city_fias_id": city_with_type.data.city_fias_id ? city_with_type.data.city_fias_id : ''}]},
        {
            key: 'Улица', 
            value: street_with_type,
            level: 'street_with_type', 
            filterFromBound: 'street', 
            filterToBound: 'street', 
            method: setStreet, 
            filterLocations: [settlement_with_type.data.settlement_fias_id ? ({"settlement_fias_id": settlement_with_type.data.settlement_fias_id}) : (
                            {"city_fias_id": city_with_type.data.city_fias_id ? city_with_type.data.city_fias_id : ''})], 
                                },
        {
            key: 'Дом', 
            value: house,
            level: 'house', 
            filterFromBound: 'house', 
            filterToBound: 'none', 
            method: setHouse, 
            filterLocations: [{"street_fias_id": street_with_type ? street_with_type.data.street_fias_id : ''}]},
    ]


    const manualInputParams = [
        {
            label: 'Квартира',
            controlId: 'apartment', 
            className: '',
            type: 'textbox', 
            value: apartment, 
            onChange: (e) => setApartment(e.target.value), 
        },
        {
            label: 'Примечания',
            controlId: 'notes', 
            className: '',
            type: 'textbox', 
            value: notes, 
            onChange: (e) => setNotes(e.target.value), 
        },
    ]



    const dispatch = useDispatch()

    const addressSubmitHandler = (e) => {
        e.preventDefault()

        const address_data = {
            'city': city_with_type.value ? city_with_type.value : '',
            'settlement': settlement_with_type.value,
            'street': street_with_type.value,
            'house': house.value,
            'apartment': apartment,
            'notes': notes,
            'geo_lat': geo_lat,
            'geo_lon': geo_lon,
            'city_fias_id': city_with_type.data ? city_with_type.data.city_fias_id : '',
            'settlement_fias_id': settlement_with_type.data ? settlement_with_type.data.settlement_fias_id : '',
            'street_fias_id': street_with_type.data ? street_with_type.data.street_fias_id : '',
            'house_fias_id': house.data ? house.data.house_fias_id : '',
            'postal_code': postal_code,
        }


        if (addressChangeState){
            setAddressChangeState(false)
            dispatch(updateAddress(address_data, address_id))
        }else{
            dispatch(addAddress(address_data))
            history.push('/register/payment')
        }
    }

    return (
        <div className ="address">
                <Form id='address-form' onSubmit={addressSubmitHandler}>

                    {inputParams.map(( listValue, index ) => {
                        return (
                            <div className='form-group row' key = {index}>
                                <label className='form-label col-form-label col'>{listValue.key}</label>
                                <AddressSuggestions
                                    token="90379f9b19aa274d2a7ebe2c510816985d8e518e" 
                                    value = {listValue.value}
                                    onChange={listValue.method}
                                    filterLocations={listValue.filterLocations}
                                    filterFromBound = {listValue.filterFromBound}
                                    filterToBound = {listValue.filterToBound}
                                    level = {listValue.level}
                                    inputProps={{ onChange: manualInputHandler
                                      }}
                                    restrictValue = {true}
                                    containerClassName = {'col'}
                                />
                            </div>    
                            )
                        })
                    } 

                    {manualInputParams.map(( listValue, index ) => {
                        return (
                            <Form.Group as={Row} key = {index} controlId={listValue.controlId} className={listValue.className}>
                                <Form.Label column >{listValue.label}</Form.Label>
                                <Col>
                                <Form.Control
                                    type={listValue.textbox}
                                    // placeholder=''
                                    value={listValue.value}
                                    onChange={listValue.onChange}
                                >
                                </Form.Control>
                                </Col>
                            </Form.Group> 
                            )
                        })
                    } 

                </Form>
        </div>
    );
};

export default withRouter(AddressForm);
