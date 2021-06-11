import React, { PropTypes } from 'react';
import { Col, Row } from 'react-bootstrap';

import ContentLoader from 'react-content-loader'

const ProductScreenLoader = () => {

    return (
    	<ContentLoader viewBox='0 0 1140 872'>
    		{/*Image*/}
			<rect x="12" y="0" rx="0" ry="0" width="546" height="546" />
    		{/*Button get back*/}
			<rect x="582" y="0" rx="0" ry="0" width="179" height="38" />
    		{/*Title*/}
			<rect x="582" y="70" rx="0" ry="0" width="546" height="144" />
    		{/*Price*/}
			<rect x="582" y="246" rx="0" ry="0" width="182" height="24" />
    		{/*Btton add to cart*/}
			<rect x="582" y="294" rx="0" ry="0" width="182" height="38" />
					
    		{/*Product decription*/}
			<rect x="12" y="562" rx="0" ry="0" width="546" height="310" />

    		{/*Product decription*/}
			<rect x="582" y="562" rx="0" ry="0" width="546" height="310" />

		</ContentLoader>
    );
};


export default ProductScreenLoader;
