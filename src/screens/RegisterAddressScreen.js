import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { AddressSuggestions } from 'react-dadata/dist/esm/AddressSuggestions';
import 'react-dadata/dist/react-dadata.css';

import { addAddress } from '../actions/userActions'

const RegisterAddressScreen = ({history}) => {
    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/')
        }
    }, [history, userInfo])



    const [city_with_type, setCity] = useState({data:{}, value: ''})
    const [settlement_with_type, setSettlement] = useState({data:{}, value: ''})
    const [street_with_type, setStreet] = useState({data:{}, value: ''})
    const [house, setHouse] = useState({data:{}, value: ''})
    const [apartment, setApartment] = useState('')
    const [notes, setNotes] = useState('')

    const geo_lat = house.data.geo_lat
    const geo_lon = house.data.geo_lon
    const postal_code = house.data.postal_code

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
            'postal_code': postal_code,
        }

        dispatch(addAddress(address_data))
        history.push('/register/payment')
    }

    return (
        <Container className ="address">

            <Row>
                <Form onSubmit={addressSubmitHandler}>

                    <Col md={4}>
                        <h1>Укажите адрес доставки</h1>
                        
                        {inputParams.map(( listValue, index ) => {
                            return (
                                <div className='my-2' key = {index}>
                                    {listValue.key}
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
                                    />
                                </div>    
                                )
                            })
                        } 

                        {manualInputParams.map(( listValue, index ) => {
                            return (
                                <Form.Group key = {index} controlId={listValue.controlId} className={listValue.className}>
                                    <Form.Label>{listValue.label}</Form.Label>
                                    <Form.Control
                                        type={listValue.textbox}
                                        // placeholder=''
                                        value={listValue.value}
                                        onChange={listValue.onChange}
                                    >
                                    </Form.Control>
                                </Form.Group> 
                                )
                            })
                        } 

                        <Button type='submit' variant='primary' className='my-1'>
                            Продолжить
                        </Button>
                    </Col>    

                </Form>
            </Row>           



        </Container>
    );
};

export default RegisterAddressScreen;
