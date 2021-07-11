import React, {  } from 'react';

import WelcomeEmail from '../WelcomeEmail/WelcomeEmail.js';

const MainClose = ({backgroundColorGrey}) => {
    return (
        <div className={`${backgroundColorGrey ? "page-section_grey" : "page-section"}`}>
			<div className="section-frame">
				<h2 className="gift-title">Играйте вместе с Swapie!</h2>
				<WelcomeEmail center/>
			</div>
		</div>
    );
};

export default MainClose;



		