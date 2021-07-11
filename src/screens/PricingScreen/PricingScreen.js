import React, { Fragment } from 'react';
import FAQ from '../../components/FAQ/FAQ'
import SubscriptionPlans from '../../components/SubscriptionPlans/SubscriptionPlans'
import AboutTokens from '../../components/AboutTokens/AboutTokens'

const PricingScreen = () => {
    return (
    	<Fragment>
	    	<SubscriptionPlans/>
	    	<AboutTokens/>
			<FAQ selected_group={[0]} show_tabs={false}/>
    	</Fragment>
    );
};

export default PricingScreen;
