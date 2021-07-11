import React, { useState } from 'react';
import {StyledTable, StyledSubTitle} from './table.styled.js';
import {StyledTabs, StyledTab} from './tabs.styled.js';

const SwapieComparison = () => {
	const [activeTab, setActiveTab] = useState(1)

	const criteria = [
		{id: 0, name: 'Лучшие игрушки по доступным ценам'},
		{id: 1, name: 'Быстрый и удобный обмен'},
		{id: 2, name: 'Игрушки не складируются дома'},
		{id: 3, name: 'Хорошее состояние и чистота игрушек'},
		{id: 4, name: 'Широкий выбор игрушек'},
		{id: 5, name: 'Тестирование игрушки перед покупкой'},
	]

	const columns = [
		{id: 0, name: 'Подписка Swapie'},
		{id: 1, name: 'Обычная аренда'},
		{id: 2, name: 'Покупка'},
		{id: 3, name: 'Поддержанные игрушки'},
	]

	const comparisonList = [
		{id: 0, column_id: 0, 0:true, 1:true, 2:true, 3:true, 4:true, 5:true},
		{id: 1, column_id: 1, 0:false, 1:false, 2:true, 3:true, 4:false, 5:true},
		{id: 2, column_id: 2, 0:false, 1:false, 2:false, 3:true, 4:true, 5:false},
		{id: 3, column_id: 3, 0:true, 1:false, 2:false, 3:false, 4:false, 5:false},
	]

    return (
    	<div className="page-section_grey">
	        <div className="section-frame">
	    		<h2 className="page-title">Почему подписка Swapie это удобно?</h2>
	            <div className="swapie_comparison__content" style={{marginTop: '35px'}}>
					<StyledSubTitle>Сравни наш сервис с альтренативами!</StyledSubTitle>

					<StyledTabs>
						{columns.filter(x=>x.id!=0).map(x => 
							<StyledTab key={x.id} onClick={()=>setActiveTab(x.id)} active={x.id===activeTab}>{x.name}</StyledTab>
						)}
					</StyledTabs>
					<StyledTable className="table"  activeTabId={activeTab}>
						<thead>
							<tr>
								<th className="title"></th>
								{columns.map(column => 
									<th className="title" key={column.id}><div>{column.name}</div></th>
									)}
							</tr>
						</thead>
						<tbody>
							{criteria.map(x => 
								<tr className="subtitle" key={x.id}>
									<td>{x.name}</td>
									{comparisonList.map(value => 
										<td key={value.id}><div className={`${value[x.id] ? "select" : "minus"}`} key={value.id}></div></td>
										)}
								</tr>
							)}
						</tbody>
					</StyledTable>
				</div>
	    	</div>
    	</div>
    );
};

export default SwapieComparison;
