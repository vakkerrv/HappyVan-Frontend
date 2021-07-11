import React, { Fragment } from 'react';
import styled from 'styled-components';


export const StyledSubTitle = styled.span`
	display: none;

	@media only screen and (max-width: 426px) {
		display: block;
		margin-bottom: 50px;
	}
`

export const StyledTable = styled.table`

		/*hide_tabs*/
		border-collapse: collapse;
		// span.view {display: none;}

		th,
		td {
			position: relative;
		}
		/*grey_line_be_table_row*/
		th:before,
		td:before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			height: 1px;
			width: 100%;
			background-color: #EEEEEE;
		}

		tr:last-child th:after,
		tr:last-child td:after {
			width: 0;
		}

		tr th {
			padding: 20px;
		}

		tr td:first-child {
		    padding: 20px 0;
		    width: 440px;
		}

		.title {
			font-weight: 600;
		}
		.subtitle {
			font-weight: 300;
			padding: 30px 0;
		}

		.minus {
			position: relative;
		}

		.minus:after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			height: 2px;
			width: 15px;
			background-color: #000;
		}

		.select {
			position: relative;
		}

		.select:after,
		.select:before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			background-color: #FAFAFA;
		}

		.select:before {
			height: 32px;
			width: 32px;
			border-radius: 50%;
			background-color: #FF774E;
			transform: translate(-50%,-50%);
		}

		.select:after {
			height: 8px;
			width: 12px;
			border-radius: 1px;
			border-left: 2px solid #fff;
			border-bottom: 2px solid #fff;
			background-color: #FF774E;
			transform: translate(-50%,-65%) rotate(315deg);
		}

		@media only screen and (max-width: 769px) {
			tr th {
				padding: 0 10px;
			}


			tr th:nth-child(3),
			tr td:nth-child(3),
			tr th:nth-child(4),
			tr th:nth-child(5),
			tr td:nth-child(4),
			tr td:nth-child(5) {
				display: none;
			}

			${({ activeTabId }) => `
				tr th:nth-child(${activeTabId+2}),
				tr td:nth-child(${activeTabId+2}){
					display: table-cell;
				  	overflow: hidden;
				  	div{
				  		width: 95px;
				  	}
				}
			`
			}

		}

		@media only screen and (max-width: 426px) {

			{
				background-color: #fff;
				padding: 15px;
				// border-radius: 10px;
				box-shadow: 0px 0px 22px -13px;
			}

			${({ activeTabId }) => activeTabId==0 && `
				border-radius: 0 10px 10px 10px;
			`
			}
			${({ activeTabId }) => activeTabId==2 && `
				border-radius: 10px 0 10px 10px;
			`
			}
			${({ activeTabId }) => activeTabId==1 && `
				border-radius: 10px;
			`
			}


			.title,
			.subtitle {
				font-size: 13px;
			}

			tr td:first-child {
				padding: 15px 0 15px 15px;
			}
			
			tr th {
				padding: 14px 10px;
			}

			// > span {
			// 	display: block;
			// 	margin-bottom: 50px;
			// }

			.select:before {
				height: 25px;
				width: 25px;
				border-radius: 50%;
				background-color: #FF774E;
				transform: translate(-50%,-50%);
			}

			.select:after {
				height: 6px;
				width: 10px;
				border-radius: 1px;
				border-left: 2px solid #fff;
				border-bottom: 2px solid #fff;
				background-color: #FF774E;
				transform: translate(-50%,-65%) rotate(315deg);
			}

			.minus:after {
				height: 1px;
				width: 10px;
			}
		}
	`
