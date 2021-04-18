import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { Row, Col, Button, Container, Image } from 'react-bootstrap';

import { detailProduct } from '../actions/productActions'

const ProductScreen = ({ match, history }) => {
	const dispatch = useDispatch()
	const productDetail = useSelector(state => state.product)
	const { error, loading, product } = productDetail

	console.log('product', product)

	useEffect(() => {
		dispatch(detailProduct(match.params.sku))
	}, [dispatch, match])

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
					<h1>{product.name}</h1>

					<div>
						Price: {product.price} rubles
					</div>

					
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
