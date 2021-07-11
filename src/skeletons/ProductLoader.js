import React, {  } from 'react';
import ContentLoader from 'react-content-loader'

const ProductLoader = () => {

    return (
		<ContentLoader viewBox='0 0 262 396'>
		    {/* Only SVG shapes */}    
		    <rect x="33" y="10" rx="5" ry="5" width="196" height="180" />
		    <rect x="33" y="209" rx="10" ry="10" width="196" height="36" />
		    <rect x="33" y="250" rx="10" ry="10" width="110" height="18" />
		    <rect x="33" y="278" rx="50" ry="50" width="30" height="30" />
		    <rect x="73" y="278" rx="10" ry="10" width="100" height="30" />
		    <rect x="33" y="323" rx="20" ry="20" width="196" height="40" />
	    </ContentLoader>
    );
};

export default ProductLoader;
