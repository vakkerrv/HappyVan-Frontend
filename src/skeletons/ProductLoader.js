import React, { PropTypes } from 'react';
import { Card } from 'react-bootstrap';

import ContentLoader from 'react-content-loader'

const ProductLoader = () => {

    return (
    	<Card 
		style={{ width: '18rem' }}
		className = 'm-2 border-0'
		>

			<ContentLoader viewBox='0 0 245 368'>
			    {/* Only SVG shapes */}    
			    <rect x="32.5" y="0" rx="0" ry="0" width="180" height="180" />
			    <rect x="16" y="196" rx="0" ry="0" width="213" height="72" />
			    <rect x="0" y="284" rx="0" ry="0" width="245" height="38" />
			    <rect x="0" y="330" rx="0" ry="0" width="245" height="38" />
		    </ContentLoader>

	    </Card>
    );
};

export default ProductLoader;
