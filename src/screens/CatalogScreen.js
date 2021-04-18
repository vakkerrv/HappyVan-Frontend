import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, Col, Image, CardGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const CatalogScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <Container>
        	<h1>Catalog</h1>
                
                <Row>
                	{products.map(product => (
                	<Col 
                		className='d-flex justify-content-center'
                		key={product.sku} 
                		sm={12} md={6} lg={4} xl={3}>
	                        <Product product={product} />
                    </Col>
                    ))}
                </Row>

        </Container>
    );
};

export default CatalogScreen;
