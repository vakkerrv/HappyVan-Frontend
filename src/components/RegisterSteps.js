import React, { Fragment } from 'react'
import styled from 'styled-components';
import {mainColor} from '../constants/styles';

import circle_1 from "../images/icon/circle-1.svg"
import circle_2 from "../images/icon/circle-2.svg"
import circle_3 from "../images/icon/circle-3.svg"
import circle_4 from "../images/icon/circle-4.svg"

const StyledRegistrationStepsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

const StyledRegistrationStep = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E8E8E8;
    border-radius: 50%;
    flex-shrink: 0;
    font-weight: bold;
    font-size: 26px;
    line-height: 1;
    color: #d1d1d1;
    margin-right: 60px;
    position: relative;
    &::before {
        content: '';
        width: 60px;
        height: 2px;
        border-top: 2px dashed #E8E8E8;
        position: absolute;
        right: -60px;
        margin-top: 3px;
    }
    &:last-child {
        margin-right: 0;
        &::before {
            display: none;
        }
    }


    background-color: ${ ({active_step, step}) => active_step>=step && mainColor};
    color: ${ ({active_step, step}) => active_step>=step && "#fff"};
`

const StyledRegistrationStepsContainerMob = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    p {
        font-weight: 500;
        color: #424242;
        margin-left: 10px;
    }
`

const StyledRegistrationStepMob = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: $main-color;

    background: url(${ ({active_step}) => (active_step===1) ? circle_1 : (active_step===2) ? circle_2 : (active_step===3) ? (circle_3) : circle_4}) center no-repeat;
`


function RegisterSteps({ active_step }) {
    const { innerWidth: width } = window;

    return (
        <Fragment>
            {width >= 700 
                ? (
                    <StyledRegistrationStepsContainer>
                        <StyledRegistrationStep active_step={active_step} step={1}>1</StyledRegistrationStep>
                        <StyledRegistrationStep active_step={active_step} step={2}>2</StyledRegistrationStep>
                        {/*<StyledRegistrationStep active_step={active_step} step={3}>3</StyledRegistrationStep>
                        <StyledRegistrationStep active_step={active_step} step={4}>4</StyledRegistrationStep>*/}
                    </StyledRegistrationStepsContainer>)
                : (
                    <StyledRegistrationStepsContainerMob>
                        <StyledRegistrationStepMob active_step={active_step}>
                            <span>{active_step}</span>
                        </StyledRegistrationStepMob>
                        <p>шаг из 4</p>
                    </StyledRegistrationStepsContainerMob>
                )
            }
            
            
        </Fragment>
    )
}

export default RegisterSteps;
