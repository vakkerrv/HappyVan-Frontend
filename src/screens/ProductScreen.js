import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Row, Col, Container, Image, Button } from 'react-bootstrap';

import { detailProduct } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'

const ProductScreen = ({ match, history }) => {
	const dispatch = useDispatch()
	const productDetail = useSelector(state => state.product)
	const { product } = productDetail

	useEffect(() => {
		dispatch(detailProduct(match.params.id))
	}, [dispatch, match])

    const addToCartHandler = (id) => {
        dispatch(addToCart(id))
    }

	return(
		<Container>
			<Row>
				<Col md={6}>
					{product.image ? (
						<Image src={product.image[0].image} alt={'Image'} fluid/>
					) : (
						<Image src={''} alt={'Image'} />
					)}
					
				</Col>

				<Col md={6}>
					<Link to='/catalog' className='btn btn-light my-3'>Вернуться к каталогу</Link>
					<h1>{product.name}</h1>

					<div>
						Price: {product.price} rubles
					</div>

					<Button 
						onClick = {() => addToCartHandler(product.id)} 
						variant="primary" block
						className='col-4 m-auto'
					>
						В корзину
					</Button>
					
				</Col>

			</Row>

			<Row>
				<Col md={6}>
					<div>
						<h2>{product.description_id}</h2>
					</div>
				</Col>

				<Col md={6}>
					<div>
						<h2>Product information</h2>
					</div>
				</Col>
			</Row>

		</Container>
	)

}

export default ProductScreen
