import React, { useState, useEffect, Fragment, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import SlideToggle from "react-slide-toggle";

SwiperCore.use([Navigation, Pagination]);

const SubscriptionPlansTable = ({onSubmit, selectedPlan, setSelectedPlan, selectedPaymentOption, setSelectedPaymentOption, style_wrapper, btn_text}) => {
    const [sortListCollapseEvent, setSortListCollapseEvent] = useState(0);
    const nodeSortList = useRef();
    const handleSortListOutsideClick = e => {
      if (nodeSortList.current.contains(e.target)) {
        return;
      }
      setSortListCollapseEvent(Date.now())
    };
    useEffect(() => {
        // For sort list toggling
        document.addEventListener("mousedown", handleSortListOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleSortListOutsideClick);
          };
    }, [])


	const selectPlanHandler = (plan_id) =>{
		setSelectedPlan(plan_id)
	}

	const selectPaymentOptionHandler = (payment_id, toggle) =>{
		setSelectedPaymentOption(payment_id)
		toggle()
	}

	const plansInfo = [
		{
			id: 0,
			name: 'Базовый',
			tokenAllowance: '100 токенов',
			priceMonth: '1000 рублей',
			deposit: '2000 рублей',
			swapCadence: 'Не ограничено',
			firstDeliveryPrice: 'Бесплатно',
			courierPrice: <Fragment>500 рублей <span>В пределах МКАД, далее 50 р за 10 км</span></Fragment>, 
		},
		{
			id: 1,
			name: 'Стандартный',
			tokenAllowance: '200 токенов',
			priceMonth: '1500 рублей',
			deposit: '3000 рублей',
			swapCadence: 'Не ограничено',
			firstDeliveryPrice: 'Бесплатно',
			courierPrice: <Fragment>500 рублей <span>В пределах МКАД, далее 50 р за 10 км</span></Fragment>, 
		},
		{
			id: 2,
			name: 'Премиум',
			tokenAllowance: '500 токенов',
			priceMonth: '2000 рублей',
			deposit: '4000 рублей',
			swapCadence: 'Не ограничено',
			firstDeliveryPrice: 'Бесплатно',
			courierPrice: <Fragment>500 рублей <span>В пределах МКАД, далее 50 р за 10 км</span></Fragment>, 
		}
	]

	const tableRows = [
		{key: 'tokenAllowance', name: 'Тарифный план'},
		{key: 'priceMonth', name: 'Цена за месяц'},
		{key: 'deposit', name: 'Размер депозита'},
		{key: 'swapCadence', name: 'Частота обмена игрушек'},
		{key: 'firstDeliveryPrice', name: 'Стоимость первой доставки'},
		{key: 'courierPrice', name: 'Стоимость замены игрушек'},
	]

	const paymentOptions = [
		{id: 0, key: 'month', name: 'Оплата ежемесячно', bonus: 'Отмените в любое время'},
		{id: 1, key: 'halfYear', name: 'Оплата раз в пол года', bonus: 'Экономия 10%'},
		{id: 2, key: 'year', name: 'Оплата ежегодно', bonus: 'Экономия 20%'},
	]

	const paymentOptionsElement = 
		paymentOptions.map(desc=>{
			return(
					<Fragment key={desc.id}>
						<div className={`tariffs-tab ${selectedPaymentOption===desc.id ? "tariffs-tab_active" : ""}`}>
				            <p>{desc.bonus}</p>
				            <a onClick={() => setSelectedPaymentOption(desc.id)}>{desc.name}</a>
				        </div>
					</Fragment>	
				)
		})
		

	const slides = plansInfo.map(details => {
		return(
			<SwiperSlide key={details.id}>
				<div className="tariffs-slide">
					<h3>{details.name}</h3>
					<div className="tariffs-slide__list">
						{tableRows.map((row, indexRow)=>{
							return(
								<div className="tariffs-slide__item" key={indexRow}>
									<span>{row.name}</span>
									<p>{details[row.key]}</p>
								</div>)
						})}
					</div>
				</div>
				<div style={{'minHeight':'20px'}}></div>
			</SwiperSlide>
		)
	})

    return (
    		<div className="tariffs-wrapper" style={style_wrapper}>
                <div className="tariffs-tabs">
                    {paymentOptionsElement}
                </div>
				<div className="tariffs-tabs_mob" ref={nodeSortList}>
					<SlideToggle collapsed = {true} collapseEvent={sortListCollapseEvent}>
						{({ toggle, setCollapsibleElement }) => (
						<div>
							<div className="tariffs-tab_mob-active" onClick={toggle}>
		                        <p>{paymentOptions[selectedPaymentOption].name}</p>
		                        <i className="fa-arrow-next"></i>
								<span>{paymentOptions[selectedPaymentOption].bonus}</span>
		                    </div>
							<div className="tariffs-tab__list" ref={setCollapsibleElement}>
		                        {paymentOptions.map(option=>{
		                        	return(
		                        		<a onClick={()=>selectPaymentOptionHandler(option.id, toggle)} className="tariffs-tab" key={option.id}>
											<span>{option.name}</span>
											<p>{option.bonus}</p>
										</a>
		                        		)
		                        })}				
							</div>
						</div>
						)}
                    </SlideToggle>
                    
				</div>
                <table className="tariffs-table">
                    <thead>
                        <tr>
                            <td></td>
                            {plansInfo.map(details=>
                            	<td key={details.id}>{details.name}</td>
                            	)}
                        </tr>
                    </thead>
                    <tbody>
                    	{tableRows.map((row, indexRow)=>{
                    		return(
                    			<tr key={indexRow}>
		                            <td>{row.name}</td>
                    				{plansInfo.map(details=>{
                    					return(
					                            <td key={details.id}>{details[row.key]}</td>
                    						)
                    				})}
                    			</tr>
                    			)
                    	})}
                        
						<tr>
							<td></td>
							{plansInfo.map(details=>{
								return(
									<td key={details.id} className={`tariffs-table_select ${selectedPlan===details.id && "tariffs-table_select__active"}`}>
										<i className="fa-check" onClick={()=>selectPlanHandler(details.id)}></i>
									</td>
								)
							})}
						</tr>
                    </tbody>
                </table>
				<div className="tariffs-wrapp">
					<Swiper
						onSlideChange={(swiper) => selectPlanHandler(swiper.activeIndex)}
				        id="main"
				        navigation
				        pagination
				        spaceBetween={0}
				        slidesPerView={1}
				        className="tariffs-slider"
				    >
				        {slides}
				    </Swiper>
					{/*<Link to='/' className="tariffs-slide__btn">Давайте начнем</Link>*/}
				</div>
                <div className="tariffs-btn">
                    <a onClick={onSubmit}>
                        {btn_text}
                    </a>
                </div>
			</div>
    );
};

export default withRouter(SubscriptionPlansTable);
