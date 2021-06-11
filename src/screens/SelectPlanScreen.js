import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Table, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import RegisterSteps from '../components/RegisterSteps'

const SelectPlanScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const address = useSelector(state => state.address)
    const { addressInfo } = address

    useEffect(() => {
        if (!userInfo) {
            // history.push('/login')
        }
    }, [dispatch, history, userInfo])

    const [subscriptionPlan, setSubscriptionPlan] = useState(2)
    const submitPlanHandler = (e) => {
        e.preventDefault()

        if(!addressInfo.id){
            history.push(`/register/address/plan-${subscriptionPlan}`)
        }else{
            history.push(`/sub_payment/plan-${subscriptionPlan}`)
        }
    }

    const plansInfo = [
        {
            parameter: 'Месячная оплата', 
            value: {
                    'Малая коробка': 1500, 
                    'Средняя коробка': 2000,
                    'Большая коробка': 3500
                }
        },
        {
            parameter: 'Доступных токенов',
            value: {
                    'Малая коробка': 150, 
                    'Средняя коробка': 200,
                    'Большая коробка': 350
                }
        },
        {
            parameter: 'Стоимость доставки',
            value: {
                    'Малая коробка': 300, 
                    'Средняя коробка': 300,
                    'Большая коробка': 300
                }
        },
        {
            parameter: 'Выкуп игрушки',
            value: {
                    'Малая коробка': true, 
                    'Средняя коробка': true,
                    'Большая коробка': true
                }
        },
    ]

    return (
        <Container>
            <RegisterSteps step1 step2/>

            <h1>Выберите подходящий план</h1>
            {/*{message && <Alert variant='danger'>{message}</Alert>}*/}

            <div className='d-flex justify-content-end option-selector'>
                <ToggleButtonGroup 
                    type="radio"
                    name="options"  
                    value={subscriptionPlan} 
                    onChange={(e) => setSubscriptionPlan(e)}
                >
                  <ToggleButton value={1}>Малая коробка</ToggleButton>
                  <ToggleButton value={2}>Средняя коробка</ToggleButton>
                  <ToggleButton value={3}>Большая коробка</ToggleButton>
                </ToggleButtonGroup>
            </div>

            <Table borderless size="sm" className='table-plans'>
                <tbody>
                    {plansInfo.map(( listValue, index ) => {
                        return(
                            <tr key={index}>
                              <td className='parameter-name-cells'>{listValue.parameter}</td>
                              <td className='value-cells'>{listValue.value['Малая коробка']}</td>
                              <td className='value-cells'>{listValue.value['Средняя коробка']}</td>
                              <td className='value-cells'>{listValue.value['Большая коробка']}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            <div className='d-grid gap-2 col-6 mx-auto'>
                <Button 
                    id = 'submit-plan'
                    onClick = {submitPlanHandler} 
                >
                    Продолжить
                </Button>
            </div>

        </Container>
    );
};

export default SelectPlanScreen;
