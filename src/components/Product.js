import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../actions/cartActions'

const Product = ({product}) => {
	const dispatch = useDispatch()

    const addToCartHandler = (sku) => {
        dispatch(addToCart(sku))
    }

	return(
		<Card 
		style={{ width: '18rem' }}
		className = 'm-2 border-0'>
			<Link to={`/product/${product.sku}`} className='d-flex justify-content-center'>
				<Card.Img variant="top" src={product.image[0].image} />	  	
			</Link>

			<Link to={`/product/${product.sku}`}>
				<Card.Body>
						<Card.Title>{product.name}</Card.Title>
				</Card.Body>
			</Link>
			
			<Button 
				onClick = {() => addToCartHandler(product.sku)} 
				variant="primary" block
			>
				Add
			</Button>
			
		</Card>
	)

}

export default Product
