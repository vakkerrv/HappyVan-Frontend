import React, {  } from 'react';
import styled from 'styled-components';
import token from "../images/icon/token-solid.svg"

const StyledToken = styled.img.attrs({
	  src: `${token}`
	})
`
	width: ${props => props.size};
`;

const TokenImage = ({size}) =>{
	return( 
		<StyledToken size={size} alt=""/>
	)}

export default TokenImage;
