import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Row, Col, Container, Image, Button, Carousel } from 'react-bootstrap';

// import { detailProduct } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'

import api from "../api";
import {
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,
} from '../constants/productConstants'

import ProductScreenLoader from '../skeletons/ProductScreenLoader'

// import '../css/ProductScreenStyle.css';

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({ product: {} });
	// const [index, setIndex] = useState(0);

	// const handleSelect = (selectedIndex, e) => {
	// 	setIndex(selectedIndex);
	// };

	const dispatch = useDispatch()
	const productDetail = useSelector(state => state.product)
	const { error, loading, success } = productDetail

	// useEffect(() => {
	// 	dispatch(detailProduct(match.params.id))
	// }, [dispatch, match])

	useEffect(() => {
        getProductDetails()
    }, [dispatch, match])

    const getProductDetails = async () => {
        try {
	        dispatch({ type: PRODUCT_DETAIL_REQUEST })

	        const { data } = await api.get(`/items/${match.params.id}`)

	        dispatch({
	            type: PRODUCT_DETAIL_SUCCESS,
	        })

            setProduct(data)

	    } catch (error) {
	        dispatch({
	            type: PRODUCT_DETAIL_FAIL,
	            payload: error.response && error.response.data.detail
	                ? error.response.data.detail
	                : error.message,
	        })
            setProduct({ product: {} })
	    }
    }

    const addToCartHandler = (id) => {
        dispatch(addToCart(id))
    }

	return(
		<Container>

			{ !loading && (match.params.id == product.id) ? (
				<Fragment>
				<Row>
					<Col md={6}>
						{product.image ? (
							<Carousel fade
								interval={null} 
								className='carousel-dark'
								data-bs-ride="carousel"
							>
								{product.image.map((x, key_index) => (
									<Carousel.Item key={key_index}>
										<img src={x.image} alt={x.image} className='img-fluid'/>
									</Carousel.Item>
								))}

							</Carousel>
							) : 
							(<Image src={''} alt={'Image'} />)
						}


					</Col>

					<Col md={6}>
						<Link to='/catalog' className='btn btn-light my-3'>Вернуться к каталогу</Link>
						<h1>{product.name}</h1>

						<div className='my-4'>
							Price: {product.price} rubles
						</div>

						<Button 
							onClick = {() => addToCartHandler(product.id)} 
							variant="primary" block
							className='col-4'
						>
							В корзину
						</Button>
						
					</Col>

				</Row>

				<Row className='my-3'>
					<Col md={6}>
						<div>
							<h2>Описание</h2>
							{product.description}
						</div>
					</Col>

					<Col md={6}>
						<div>
							<h2>Product information</h2>
						</div>
					</Col>
				</Row>
				</Fragment>
				) : (
					<ProductScreenLoader/>
				)}
			

		</Container>
	)

}

export default ProductScreen;
