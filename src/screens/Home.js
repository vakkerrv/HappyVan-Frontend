import React, {  } from 'react';
import MainSwapie from '../components/MainSwapie/MainSwapie'
import MainWhat from '../components/MainWhat/MainWhat'
import MainApproach from '../components/MainApproach/MainApproach'
import MainCategory from '../components/MainCategory/MainCategory'
// import MainNew from '../components/MainNew/MainNew'
import MainClose from '../components/MainClose/MainClose'
import FAQ from '../components/FAQ/FAQ'

const HomePage = () => {
    return (
    	<main>
	    	<MainSwapie/>
	    	<MainWhat/>
	    	<MainApproach/>
	    	<MainCategory/>
	    	{/*<MainNew/>*/}
	    	<FAQ  selected_questions={[1, 7, 10, 12, 15, 17]} show_tabs={false} backgroundColorGrey={true}/>
	    	<MainClose/>
    	</main>
    );
};

export default HomePage;
