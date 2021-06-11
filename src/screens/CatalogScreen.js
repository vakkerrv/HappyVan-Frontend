import React, { useEffect, useLayoutEffect, useState, useRef, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Row, Col } from 'react-bootstrap';

import { PRODUCT_LIST_RESET } from '../constants/productConstants'
import Product from '../components/Product'
// import { listProducts } from '../actions/productActions'

import ProductLoader from '../skeletons/ProductLoader'
import Paginate from '../components/Paginate'

import '../css/CatalogScreenStyle.css';

import api from "../api";
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    SET_SCROLL_POSITION,
} from '../constants/productConstants'

const CatalogScreen = ({history}) => {
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState(1);

    // const [scrollPosition, setScrollPosition] = useState(useSelector(state => state.scroll));
    // const scrollPosition = window.localStorage.getItem('scroll')
    let keyword = history.location.search
    let page = keyword.split('p=')[1]

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, success } = productList

    useEffect(() => {
        getProductList()

    }, [dispatch, keyword])

  
    const getProductList = async () => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST })

            const response = await api.get(`/items/${keyword}`)

            dispatch({
                type: PRODUCT_LIST_SUCCESS,
            })

            setProducts(response.data.results)
            setPages(response.data.last_page)
        } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
            setProducts([])
        }
    }

    const skeleton = Array(20)

    return (
        <Container>
        	<h1>Каталог</h1>

                <Row>
                	{ loading ? (
                        skeleton.fill().map((item, index) => (
                        <Col
                            className='d-flex justify-content-center'
                            key={index} 
                            sm={12} md={6} lg={4} xl={3}
                        >
                            <ProductLoader/>   
                        </Col>)))
                        : error ? (<div>На текущий момент в каталоге нет товаров</div>)
                            :
                            (
                            products.map(product => (
                                <Col 
                                className='d-flex justify-content-center'
                                key={product.id} 
                                sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                                ))
                            )
                    }


                </Row>

            <Paginate page={page} pages={pages} />
        </Container>
    );
};

export default CatalogScreen;
