import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RegisterSteps from '../../components/RegisterSteps'
import InputField from '../../components/InputField'

import { AddressSuggestions } from 'react-dadata/dist/esm/AddressSuggestions';
import 'react-dadata/dist/react-dadata.css';

import { addAddress } from '../../actions/userActions'

import truck from "../../images/registration/truck.svg"

const RegisterAddressScreen = ({ match, history }) => {
    const subPlanId = match.params.planId

    const [city_with_type, setCity] = useState({data:{}, value: ''})
    const [settlement_with_type, setSettlement] = useState({data:{}, value: ''})
    const [street_with_type, setStreet] = useState({data:{}, value: ''})
    const [house, setHouse] = useState({data:{}, value: ''})
    const [apartment, setApartment] = useState('')
    const [notes, setNotes] = useState('')


    const [geo_lat, setGeoLat] = useState('')
    const [geo_lon, setGeoLon] = useState('')
    const [postal_code, setPostalCode] = useState('')
    // const geo_lat = house.data.geo_lat
    // const geo_lon = house.data.geo_lon
    // const postal_code = house.data.postal_code

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { userInfo } = userRegister

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: userInfoLogin } = userLogin

    useEffect(() => {
        if (userInfoLogin){
            history.push('/')
        }

        setGeoLat(house.data.geo_lat)
        setGeoLat(house.data.geo_lon)
        setGeoLat(house.data.postal_code)
    }, [history, userInfo, userInfoLogin, house])

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
        history.push(`/sub_payment/plan-${subPlanId}`)
    }

    return (
        <div className="registration">
            <div className="section-frame">
                <h1 className="page-title page-title_center"><span>Регистрация</span></h1>
                <RegisterSteps active_step={2}/>
                <div className="registration-content">
                    <p className="registration-subtitle">Укажите ваш адрес, чтобы мы знали, куда доставлять игрушки</p>
                    <form action="#" method="POST" className="registration-form">
                        <InputField onChangeHandler={()=>console.log('typed')} type={"text"} name={"city"} placeholder={"Город"} required={true}/>
                        <InputField onChangeHandler={()=>console.log('typed')} type={"text"} name={"settlement"} placeholder={"Насленный пункт"} required={false}/>
                        <InputField onChangeHandler={()=>console.log('typed')} type={"text"} name={"street"} placeholder={"Улица"} required={true}/>
                        <InputField onChangeHandler={()=>console.log('typed')} type={"text"} name={"house"} placeholder={"Дом"} required={true}/>
                        <InputField onChangeHandler={()=>console.log('typed')} type={"text"} name={"apartment"} placeholder={"Квартира"} required={true}/>
                        <InputField onChangeHandler={()=>console.log('typed')} type={"text"} name={"notes"} placeholder={"Примечания"} required={true}/>

                        
                        <div className="registration-address_price">
                            <img src={truck} alt=""/>
                            <p>Доставка осуществляется толькот внутри МКАД</p>
                            <p>300 рублей</p>
                        </div>

                        <label className="registration-sub">
                            <input type="submit" value="Далее" />Далее
                        </label>
                    </form>
                </div>
               
            </div>
        </div>
    );
};

export default RegisterAddressScreen;
