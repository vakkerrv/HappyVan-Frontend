import React, {  } from 'react';

import ContentLoader from 'react-content-loader'

const ProductScreenLoader = () => {
    const { innerWidth: width } = window;

    const title_y = 0
    const title_height = 134
    const title_margin = 36

    const info = {
        y: title_y+title_height+title_margin,
        height: 24,
        margin_y: 25,
    }

    const age = {
        y: info.y + info.height + info.margin_y,
        height: 86,
        margin_y: 35,
    }

    const skills = {
        y: age.y,
        height: 86,
        margin_y: 35,
    }

    const price_token = {
        y: age.y + age.height + age.margin_y,
        height: 30,
        margin_y: 30,
    }

    const price = {
        y: age.y + age.height + age.margin_y,
        height: 30,
        margin_y: 30,
    }

    const buttonToCart = {
        y: price.y + price.height + price.margin_y,
        height: 50,
        margin_y: 0,
    }

    const buttonToWishlist = {
        y: price.y + price.height + price.margin_y,
        height: 50,
        margin_y: 0,
    }

    return (
    	<ContentLoader viewBox='0 0 1140 872'>
    		{/*Image*/}
			<rect x="0" y="0" rx="0" ry="0" width="360" height="375" />
            {/*Carousel*/}
            <rect x="0" y="395" rx="0" ry="0" width="360" height="113" />
    		{/*Title*/}
			<rect x="390" y="0" rx="10" ry="10" width="750" height={title_height} />
            {/*Divider*/}
            <rect x="390" y={title_height+15} rx="0" ry="0" width="750" height="1" />
    		{/*Info1*/}
			<rect x="390" y={info.y} rx="10" ry="10" width="350" height={info.height} />
    		{/*Age*/}
			<rect x="390" y={age.y} rx="20" ry="20" width="97" height={age.height} />
            {/*Skills*/}
            <rect x="536" y={skills.y} rx="20" ry="20" width="331" height={skills.height} />
            {/*Price*/}
            <rect x="390" y={price_token.y} rx="50" ry="50" width="30" height={price_token.height} />
            <rect x="435" y={price.y} rx="0" ry="0" width="200" height={price.height} />
    		
            {/*Button add to cart*/}
			<rect x="390" y={buttonToCart.y} rx="30" ry="30" width="197" height={buttonToCart.height} />		
    		{/*Wishlist button*/}
			<rect x="647" y={buttonToWishlist.y} rx="30" ry="30" width="160" height={buttonToWishlist.height} />

            {/*Divider*/}
            <rect x="0" y="556" rx="0" ry="0" width="1140" height="2" />
    		{/*Product decription*/}
			<rect x="0" y="596" rx="10" ry="10" width="555" height="500" />
            {/*Product decription*/}
            <rect x="700" y="596" rx="10" ry="10" width="440" height="500" />

		</ContentLoader>
    );
};


export default ProductScreenLoader;
