import React, { Fragment } from 'react';
import styled from 'styled-components';

export const StyledTabs = styled.div`
	display: none;
	
	@media only screen and (max-width: 426px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

export const StyledTab = styled.label`

	@media only screen and (max-width: 426px) {
		height: 50px;
		padding: 10px 12px 0 12px;
		text-align: center;
		font-weight: 500;
		font-size: 14px;

		${({ active }) => active && `
			color: #FF774E;
			background-color: #fff;
			border-radius: 10px 10px 0 0;
			box-shadow: 0px -5px 10px -9px #000};
		`
		}
	}

`