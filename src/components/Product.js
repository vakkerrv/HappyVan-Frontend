import React, { } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../actions/cartActions'
import { addToWishlist } from '../actions/wishlistActions'

const Product = ({product}) => {
	const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const addToCartHandler = (id) => {
        dispatch(addToCart(id))
    }

    const addToWishlistHandler = (id) => {
        dispatch(addToWishlist(id))
    }


	return(
		<Card 
		style={{ width: '18rem' }}
		className = 'm-2 border-0'>
			<Link to={`/product/${product.id}`} className='d-flex justify-content-center'>
				<Card.Img variant="top" src={product.image[0].image} />	  	
			</Link>

			<Link to={`/product/${product.id}`}>
				<Card.Body>
					<Card.Title>{product.name}</Card.Title>
					{parseFloat(product.price).toFixed(0)} токенов
				</Card.Body>
			</Link>
			
			<Button 
				onClick = {() => addToCartHandler(product.id)} 
				variant="primary" block
			>
				В корзину
			</Button>

			{userInfo ? (
				<Button 
					onClick = {() => addToWishlistHandler(product.id)} 
					variant="primary" block
				>
				В избранное
			</Button>
				) : (
				<div></div>
				)}
			
		</Card>
	)

}

export default Product
