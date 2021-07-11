import React, {  } from 'react'
import styled from 'styled-components';
import {mainColor, subColor} from '../constants/styles';

const StyledContainer = styled.div`
    display:flex;
    flex-flow: column;
    align-items: center;
    text-align:center;
    justify-content: center;

    font-weight: 700;
    font-size: 55px; 
    min-height: 60vh;
    color: ${subColor};

    p {
        color: initial;
        padding: 10px 25px;
        margin-top: 20px;
        font-weight: 400;
        font-size: 26px; 
        // border-radius: 150px;
        // background-color: #FAFAFA;
        position:relative;

        div{
            position:absolute;
            right: -5px;
            top: -5px;
            background-color: ${mainColor};
            border-radius:50%;
            width: 23px;
            height: 23px;
        }
    }
    @media screen and (max-width: 700px) {
        font-size: 23px; 
        p{
            font-size: 16px; 
            // border-radius: 100px;
        }
    }
`

const ThankYouPage = () => {
    
    return (
        <div className="section-frame">
            <StyledContainer>
                Спасибо за проявленный интерес!
                <p>
                    Мы сообщим вам, когда откроемся. Планиурем запуститься 15 августа. На зарегистрированный аккаунт будет предоставлена 15% скидка.
                </p>
            </StyledContainer>
        </div>
    );
};

export default ThankYouPage;
