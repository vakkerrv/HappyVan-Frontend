import React, {  } from 'react';
import styled from 'styled-components';
import arrow from "../images/arrow_large.svg";

const StyledIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    span{
        // font-size: 67px;
        font: bold 75px/90px 'CenturyGothic', sans-serif;
        font-weight: 700;
    }
    
    img{
        position: absolute;
        width: 220px;
    }

    @media screen and (max-width: 980px) {
        min-height: 150px;

        span{
            font-size: 50px;
        };

        img{
            width: 150px;
        }
    }

    @media screen and (max-width: 700px) {
        min-height: 90px;

        span{
            font-size: 28px;
        };

        img{
            width: 100px;
        }
    }

`

const IntroBanner = ({child}) => 

	<div className="swapie">
        <div className="section-frame">
            <StyledIntro>
                {child}
                <img src={arrow} alt=""/>
            </StyledIntro>
        </div>
    </div>

export default IntroBanner;
