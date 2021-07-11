import React, { useState } from 'react';
import styled from 'styled-components';
import {subColor} from '../../constants/styles';

const StyledBar = styled.div`
	display: None;
	font-size: 13px;
	font-weight: 400;
	height: 40px;
	max-width: 400px;
	margin: 0 auto;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;

	/* default_link */
	.flex_row {
		position: relative;
		display: flex;
		transition: .3s;
		min-width: 40px;
		width: ${({ activeBar }) => activeBar && "100%"};
	}

	/* SEARCH  */
	.catalog-search__input {
		position: relative;
		top: 0;
		right: 0;
		height: 40px;
		width: ${({ activeBar }) => activeBar ? "100%" : "0"};
		// margin-left: ${({ activeBar }) => activeBar ? "0px" : "-40px"};
		padding: 0 20px;
		padding-left: ${({ activeBar }) => activeBar ? "40px" : "20px"};
		font-size: 13px;
		color: #787878;
		border: 1px solid #f6f6f6;
		border-radius: 40px;
		background: #F6F6F6;
		outline: none;
		visibility: ${({ activeBar }) => activeBar ? "visible" : "hidden"};
		// transition: width .5s, visibility .5s, margin-left .5s;
		transition: .5s;
	}

	.search-arrow{
		position: absolute;
		display:flex;
		justify-content: center;
		align-items: center;

		left:0;
		width: 20px;
		height:100%;
		// top: 12.5px;
		z-index: 2;
		visibility: ${({ activeBar }) => activeBar ? "visible" : "hidden"};
		left: ${({ activeBar }) => activeBar ? "0" : "-20px"};
		padding-left: 12px;
		transition: .5s;
	}

	.search-arrow-icon{
		// position: absolute;
		transform: rotate(180deg);
		color: ${subColor};
	}

	.catalog-search__submit {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 5;
		border-radius: 50%;
		background-color: #26929A;
		transition: margin-left .5s;

		width: 39px;
		height: 39px;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;

		margin-left: ${({ activeBar }) => activeBar ? "calc(100% - 40px)" : "0"};
	}

	/* FILTER */
	.catalog-filter_mob,
	.catalog-sort_mob {
		height: 40px;
		width: 130px;
		margin: ${({ activeBar }) => activeBar ? "0 -5000px 0 0" : "0 5px"};
		background-color: #F6F6F6;
		transition: .5s;
	}

	.catalog-filter_mob{
		display: flex;
		flex-shrink: 0;
		justify-content: center;
		align-items: center;
		background: #F6F6F6;
		cursor: pointer;
	}

	/* SORT */
	.catalog-sort_mob{
		display: flex;
		justify-content: center;
		align-items: center;

		// position: relative;

		// padding: 0 15px;
		// background: #F6F6F6;
		cursor: pointer;

		i {
			color: ${subColor};
			margin-left: 6px;
			transform: rotate(90deg);
			font-size: 10px;
			transform: ${({ activeBar }) => activeBar ? "0 -5000px 0 0" : "0 5px"};
		}
	}

	/* MEDIA */
	@media screen and (max-width: 700px) {
		display: flex;
	}
`;


const CatalogBarMob = ({handleFilterMob, sortDropdownList, search, setSearch, searchHandler}) =>{
	const [activeBar, setActiveBar] = useState(false)

	const searchStartHandler = () => {
		if(activeBar){
			searchHandler()
		}else{
			setActiveBar(true)
		}
	}

	return( 
		<StyledBar activeBar={activeBar}>
			<div className="flex_row">
				<div 
					onClick={searchStartHandler} 
					className="catalog-search__submit"
				>
					<i className="fa-search"></i>
				</div>
				<div 
					className="search-arrow" 
					onClick={()=>setActiveBar(false)}
				>
					<i className="fa-arrow-next search-arrow-icon"></i>
				</div>
				<input 
					onChange={(e)=>setSearch(e.target.value)} 
					onBlur={searchStartHandler}
					value = {search}
					type="text" 
					name="search" 
					className="catalog-search__input" 
					placeholder="Поиск по каталогу" 
					required/>
			</div>
			<div className="catalog-filter_mob" onClick={handleFilterMob}>
                <span>Фильтры</span>
            </div>
            <div className="catalog-sort_mob">
                {sortDropdownList(true)}
                <i className="fa-arrow-next"></i>
            </div>
		</StyledBar>
	)}

export default CatalogBarMob;
