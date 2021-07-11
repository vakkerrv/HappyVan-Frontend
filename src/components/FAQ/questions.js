import styled from "styled-components";
import {mainColor} from '../../constants/styles';

export const StyledContainer = styled.div`
	padding: 5px 0px;
  	border-bottom: 1px solid #EEEEEE;
`

export const StyledQuestionContainer = styled.div`
	width: 100%;
	height: 60px;
	padding: 10px 15px;
	box-sizing: border-box;
	display: flex;
  	align-items: center;
  	cursor: pointer;

	// background: #FFFFFF;
	// box-shadow: ${({ open }) => open ? '0px 10px 35px rgba(169, 169, 169, 0.5)' : '0px 10px 35px rgba(169, 169, 169, 0.1)'};
	// border-radius: 150px;
	// :hover{
	// 	box-shadow: 0px 10px 35px rgba(169, 169, 169, 0.3);
	// }
`;

export const StyledButton = styled.div`
	background-color: ${mainColor};
	height: 40px;
	width: 40px;
	border-radius: 150px;
	margin-left: auto;
	display:flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ open }) => open ? '#fff' : mainColor};
	box-shadow: ${({ open }) => open && '0px 10px 35px rgba(169, 169, 169, 0.5)'};

	div{
		position:absolute;
		width: 20px;
		height: 2px;
	    transition: all 0.2s linear;

    	background-color: ${({ open }) => open ? mainColor : '#fff' };

		:first-child {
			transform: ${({ open }) => open ? 'rotate(180deg)' : 'rotate(90deg)'};
	    }
	}

	@media screen and (max-width: 700px) {
        height: 30px;
		width: 30px;
		div{
			width: 15px;
		}
    }
`;

export const StyledQuestionNumber = styled.span`
	color: #26929A;
	width: 19px;
	height: 28px;

	line-height: 28px;
	font-weight: bold;
`

export const StyledQuestion = styled.div`
	font-weight: 600;
	// margin-left: 1em;
	max-width: calc(100% - 85px);

`

export const StyledAnswer = styled.div`
	width: 100%;
	padding: 0px 15px;
	margin: 5px 0;
	box-sizing: border-box;

`