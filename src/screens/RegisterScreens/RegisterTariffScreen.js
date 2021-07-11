import React, { useState, useEffect } from 'react'
import {  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import RegisterSteps from '../../components/RegisterSteps'
import SubscriptionPlansTable from '../../components/SubscriptionPlans/SubscriptionPlansTable'

import { subscribe } from '../../actions/subsActions'

const RegisterTariffScreen = ({ match, history }) => {
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(1)
    const [selectedPlan, setSelectedPlan] = useState(1)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { userInfo } = userRegister

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo: userInfoLogin } = userLogin

    const subscription = useSelector(state => state.subscription)
    const { details: {subInfo}} = subscription

    useEffect(() => {
        if (subInfo){
            history.push('/')
        }
    }, [history, userInfo, userInfoLogin])

    const TariffSubmitHandler = (e) => {
        e.preventDefault()
        
        dispatch(subscribe(selectedPlan, selectedPaymentOption))
        history.push('/thankyou')
    }

    // console.log('selectedPaymentOption', selectedPaymentOption)
    // console.log('selectedPlan', selectedPlan)

    return (
        <div className="registration">
            <div className="section-frame">
                <h1 className="page-title page-title_center"><span>Выберите подходящий тариф</span></h1>
                <RegisterSteps active_step={3}/>
                <SubscriptionPlansTable 
                    onSubmit={TariffSubmitHandler}
                    setSelectedPlan={setSelectedPlan} 
                    selectedPlan={selectedPlan} 
                    setSelectedPaymentOption={setSelectedPaymentOption} 
                    selectedPaymentOption={selectedPaymentOption}
                    style_wrapper={{"margin-top":"100px"}}
                    btn_text={"Далее"}
                />
            </div>
        </div>
    );
};

export default RegisterTariffScreen;
