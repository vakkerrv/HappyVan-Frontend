import React, {  } from 'react';
import styled from 'styled-components';
import {mainColor, strongGreyColor} from '../constants/styles';

const StyledStars = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0 5px;

    span {
        font-size: 12px;
        margin-left: 2px;
    }
`;

// const StyledFilledStar = styled.i`
//     font-size: 12px;
//     width: 12px;
//     color: ${ ({filled}) => filled ? mainColor : strongGreyColor};
// `
// const StyledHalfStar = styled.div`
//     font-size: 12px;
//     i{
//         color: ${mainColor};
//     }
//     i{
//         &:nth-child(2){
//             color: ${mainColor};
//             -moz-transform: scaleX(-1);
//             -o-transform: scaleX(-1);
//             -webkit-transform: scaleX(-1);
//             transform: scaleX(-1);
//             filter: FlipH;
//             -ms-filter: "FlipH";
//         }
//     }
// `


const StyledTst = styled.div`
  display: inline-block;
  font-size: 18px;
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;
  
  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, ${mainColor} calc(${({rating})=>rating} / 5 * 100%), ${strongGreyColor} calc(${({rating})=>rating} / 5 * 100%));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const ReviewStars = ({rating}) => {

    const ratingAdj = rating ? rating : 0
    const roundedRating = Math.round(ratingAdj * 10) / 10

    return (
    	<StyledStars>
            <StyledTst rating={ratingAdj}/>
            <span>({roundedRating}/5)</span>
    	</StyledStars>
    );
};

export default ReviewStars;
