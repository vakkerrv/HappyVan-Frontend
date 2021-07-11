import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

// import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import SubscriptionPlansTable from './SubscriptionPlansTable'

SwiperCore.use([Navigation, Pagination]);
const SubscriptionPlans = ({history}) => {
	const [selectedPaymentOption, setSelectedPaymentOption] = useState(1)
	const [selectedPlan, setSelectedPlan] = useState()

	const onSubmit = () =>
		history.push('/register')

    return (
    	<div className="tariffs page-section">
            <div className="section-frame">
                <h1 className="page-title page-title_center tariffs-title">Тарифы</h1>
                <SubscriptionPlansTable 
                    onSubmit={onSubmit}
                    setSelectedPlan={setSelectedPlan} 
                    selectedPlan={selectedPlan} 
                    setSelectedPaymentOption={setSelectedPaymentOption} 
                    selectedPaymentOption={selectedPaymentOption}
                    style_wrapper={{"marginTop":"100px"}}
                    btn_text={"Начать"}
                />
            </div>
        </div>
    );
};

export default withRouter(SubscriptionPlans);
