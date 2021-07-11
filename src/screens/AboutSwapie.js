import React, { Fragment } from 'react';
import IntroBanner from '../components/IntroBanner'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import AboutCleaning from '../components/AboutCleaning/AboutCleaning'
import AboutTokens from '../components/AboutTokens/AboutTokens'
import FAQ from '../components/FAQ/FAQ'
import SwapieComparison from '../components/SwapieComparison/SwapieComparison'
import MainClose from '../components/MainClose/MainClose'

const AboutSwapie = () => {

	const Intro = 
		<span>Как это работает</span>

    return (
    	<Fragment>
    		<IntroBanner child={Intro}/>
	    	<HowItWorks/>
	    	<AboutTokens/>
	    	<AboutCleaning/>
	    	{<SwapieComparison/>}
	    	<FAQ/>
	    	<MainClose backgroundColorGrey/>
    	</Fragment>
    );
};

export default AboutSwapie;
