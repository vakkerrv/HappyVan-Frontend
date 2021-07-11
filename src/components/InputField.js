import React, { useState, Fragment } from 'react'
import styled from 'styled-components';
import {subColor} from '../constants/styles';

import InputMask from 'react-input-mask';

const StyledInputContainer = styled.div`
    position: relative;
    width: 100%;
    input {
        width: 100%;
    }
    margin-bottom: 20px;
    i {
        font-size: 25px;
        color: ${subColor};
        position: absolute;
        top: 17px;
        right: 5%;
        cursor:pointer;
    }
`

const StyledInput = styled.input`
    width: 100%;
    padding: 0 25px;
    height: 55px;
    display: block;
    background: #F5F5F5;
    border-radius: 150px;
    font-size: 16px;
    color: #606060;
    border: 1px solid #F5F5F5;
    transition: .3s;
    border: ${ ({error}) => error && "1px solid #FB5353"};
    &:focus {
        border-color: ${ ({error}) => !error && subColor};
    };

    @media screen and (max-width: 700px) {
        font-size: 14px;
    }

`

const StyledErrorMessage = styled.p`
    // width: fit-content;
    // max-width: 100%;
    width: 100%;
    // padding: 15px 30px;
    padding: 0 25px;
    box-sizing: border-box;
    // background: rgba(251, 82, 82, 0.4);
    // text-align: center;
    // border-radius: 150px;
    font-style: italic;
    font-size: 12px;
    line-height: 18px;
    // color: #4A4A4A;
    color: #FB5353;
    // margin: 10px auto 0;
    margin-top: 10px;
    position: relative;
    // &::before {
    //     content: '';
    //     width: 12px;
    //     height: 12px;
    //     background: #FDBABA;
    //     border-radius: 1px;
    //     transform: rotate(45deg);
    //     position: absolute;
    //     left: 0;
    //     right: 0;
    //     margin: 0 auto;
    //     top: -6px;
}
`


function InputField({ value, onChangeHandler, onBlurHandler, error, error_message, errorOnSubmit, errorMessageOnSubmit, type, name, placeholder, required }) {
    const [passwordHidden, setPasswordHidden] = useState(true)

    // console.log(errorOnSubmit, errorMessageOnSubmit)

    return (
        <StyledInputContainer>
            {name==='phone' 
                ? (
                    <InputMask mask="+7\ (999) 999-99-99" onChange={(e)=>onChangeHandler(e.target.value)}>
                        {(inputProps) => 
                            <StyledInput 
                                error={errorOnSubmit ? errorOnSubmit : error} 
                                type={type} 
                                name={name} 
                                placeholder={placeholder} 
                            />
                        }
                    </InputMask>
                    ) 
                : type==='password'
                    ? (
                        <Fragment>
                        <StyledInput 
                            onChange={(e) => onChangeHandler(e.target.value)} 
                            onBlur={(e) => onBlurHandler ? onBlurHandler(e.target.value) : ()=>{}}
                            error={errorOnSubmit ? errorOnSubmit : error} 
                            type={passwordHidden ? "password" : "text"} 
                            name={name} 
                            placeholder={placeholder} 
                            required={required}
                            passwordHidden={passwordHidden}/>
                            <i onClick={()=>setPasswordHidden(!passwordHidden)} className={`${passwordHidden ? "fa-eye" : "fa-eye-hidden"}`}></i>
                        </Fragment>
                        )
                    : (
                        <StyledInput
                            value={value}
                            onChange={(e) => onChangeHandler(e.target.value)} 
                            onBlur={(e) => onBlurHandler ? onBlurHandler(e.target.value) : ()=>{}}
                            error={errorOnSubmit ? errorOnSubmit : error} 
                            type={type} 
                            name={name} 
                            placeholder={placeholder} 
                            required={required} />
                        )
                }
            {errorOnSubmit && <StyledErrorMessage>{errorMessageOnSubmit}</StyledErrorMessage> || error && <StyledErrorMessage>{error_message}</StyledErrorMessage>}
        </StyledInputContainer>
    )
}

export default InputField;
