import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {  } from 'react-router-dom'
import Slider from "react-slick";
import parse from 'html-react-parser';

import token from "../../images/icon/token-solid.svg"
import notify from '../../components/notify';

import { addToCart } from '../../actions/cartActions'
// import { addToWishlist } from '../../actions/wishlistActions'
// import { addToWaitlist } from '../../actions/waitlistActions'

import api from "../../api";
import {
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,
} from '../../constants/productConstants'
import { strongGreyColor } from '../../constants/styles'

import ProductScreenLoader from '../../skeletons/ProductScreenLoader'

// import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import RecommendationLine from '../../components/RecommendationLine/RecommendationLine'
import ReviewStars from '../../components/ReviewStars'
import CatalogItemSwiper from '../../components/CatalogItemSwiper/CatalogItemSwiper'

const ProductScreen = ({ history, match }) => {
    const [product, setProduct] = useState({ product: {} });
	// const [index, setIndex] = useState(0);

	// const handleSelect = (selectedIndex, e) => {
	// 	setIndex(selectedIndex);
	// };

	const dispatch = useDispatch()
	const productDetail = useSelector(state => state.product)
	const { error, loading, success } = productDetail

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

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
        notify(`Товар добавлен в Корзину`)
    }
    const addToWaitlistHandler = (id) => {
    	if (userInfo){
	        notify(`Товар добавлен в Лист ожидания`)   		
    	}else{
    		notify("", "wishlistAuth")
    	}
    }
    const addToWishlistHandler = (id) => {
    	if (userInfo){
	        notify(`Товар добавлен в Лист ожидания`)   		
    	}else{
    		notify("", "wishlistAuth")
    	}
    }


    // 
    const skillsList = product.skill ? product.skill.map(x => x.name) : []

    const descriptionTable = [
    	{parameter: 'Артикул', value: product.sku}, 
    	{parameter: 'Материал', value: product.material}, 
    	{parameter: 'Производитель', value: product.brand && product.brand.name}, 
    	{parameter: 'Страна', value: product.brand && product.brand.country_id && product.brand.country_id.name}, 
    	{parameter: 'Рекомендуемый возраст', value: product.age}, 
    	{parameter: 'Размер', value: (product.box_width && product.box_height && product.box_depth) && Math.round( product.box_width ) + ' x ' + Math.round( product.box_height ) + ' x ' + Math.round( product.box_depth )}, 
    	{parameter: 'Вес', value: undefined},
    ]

    console.log(product)

    const inStockElement = 
    		<div className="card-availability__type">
                {(product.count_in_stock>0) ? 
                	<Fragment>
	                	<i className="fa-check"></i>
	    				<p>В наличии</p>
    				</Fragment> :
    				<Fragment>
	                	<i className="fa-close" style={{'background-color': strongGreyColor}}></i>
	    				<p>Нет в наличии</p>
    				</Fragment>}
    		</div>

	console.log('product.id', product.id)

	return(
		<Fragment>
			<div className="card page-section">
	            <div className="section-frame">
	            	{ error ? (<div className="error-message">При загрузке информации о товаре произошла ошибка. </div>) : !loading && (match.params.id == product.id) ? (
	            		<Fragment>
                    	<div className="arrow-back card-content_mob" onClick={history.goBack}><i className="fa-arrow-prev"></i> <span>Назад</span></div>
		                <div className="card-content">
		                    <h1 className="card-title card-content_mob">{product.name}</h1>
		                    <div className="card-availability card-content_mob">
		                        <ReviewStars rating={product.rating}/>
	                            {inStockElement}
		                    </div>
		                    <div className="card-photo">
		                        <CatalogItemSwiper listImages={product.image ? product.image.map(x=>x.image) : []} />
		                    </div>
		                    <div className="card-content__info">
		                    	<div className="arrow-back card-content_pc" onClick={history.goBack}><i className="fa-arrow-prev"></i> <span>Назад</span></div>
		                        <h1 className="card-title card-content_pc">{product.name}</h1>
		                        <div className="card-availability card-content_pc">
    		                        <ReviewStars rating={product.rating}/>
	                                {inStockElement}
		                        </div>
		                        <div className="card-tag card-content_pc">
		                            {product.age && <div className="card-tag__age">
		                                <p>Возраст</p>
		                                <div className="card-tag__list">
		                                    <a>{product.age} лет</a>
		                                </div>
		                            </div>}
		                            {skillsList.length > 0 && <div className="card-tag__skills">
		                                <p>Навыки</p>
		                                <div className="card-tag__list">
		                                	{skillsList.map((skill,index)=>{
		                                		return (
		                                			<a key={index}>{skill}</a>
		                                			)
		                                	})}	                                    
		                                </div>
		                            </div>}
		                        </div>
		                        <div className="card-token">
		                            <img className=" token" src={token} alt=""/>
		                            <p>{Math.round( product.price )} токенов</p>
		                        </div>
		                        <div className="card-button">
		                        	{product.count_in_stock>0 
		                        		? (<a onClick={() => addToCartHandler(product.id)} className="card-button__select">В корзину</a>) 
		                        		: (<a onClick={() => addToWaitlistHandler(product.id)} className="card-button__select">В лист ожидания</a>)}
		                            <a onClick={() => addToWishlistHandler(product.id)} className="card-button__like"><i className="fa-like"></i> В избранное</a>
		                            {/*<a href="#" className="card-button__share"><i className="fa-share"></i> Поделиться</a>*/}
		                        </div>
		                        <div className="card-tag card-content_mob">
		                            {product.age && <div className="card-tag__age">
		                                <p>Возраст</p>
		                                <div className="card-tag__list">
		                                    <a>{product.age} лет</a>
		                                </div>
		                            </div>}
		                            {skillsList.length > 0 && <div className="card-tag__skills">
		                                <p>Навыки</p>
		                                <div className="card-tag__list">
		                                    {skillsList.map((skill,index)=>{
		                                		return (
		                                			<a key={index}>{skill}</a>
		                                			)
		                                	})}
		                                </div>
		                            </div>}
		                        </div>
		                    </div>
		                </div>
		                <div className="card-info">
		                    <div className="card-info__frame card-info__content card-info__content_active" data-tab="info">
		                        {product.description && <div className="card-info__description">
		                            <h3>Описание</h3>
		                            <p>{parse(product.description)}</p>
		                        </div>}
		                        <div className="card-info__characteristics">
		                            <h3>Характеристики</h3>
		                            {descriptionTable.map((listValue, index)=> {
		                            	console.log(listValue.value)
		                            	return(
	                        				listValue.value && <div className="card-info__characteristics-item" key={index}>
    								                                <p>{listValue.parameter}</p>
    								                                <span>{listValue.value}</span>
    								                            </div>
			                            )
                            		})}
		                        </div>
		                    </div>
		                </div>
		                </Fragment>
		                 ) : (
					<ProductScreenLoader/>
					)}
	            </div>
	        </div>
				
	        <div className="like">
            	<div className="section-frame">
                	<h2 className="page-title"><span>Вам также может понравиться</span></h2>
                	<RecommendationLine/>
				</div>
            </div>
            <div className="card-request">
	            <div className="section-frame">
	                <h2 className="card-request__title">Не нашли игрушку? Оставьте заявку, и мы добавим ее в наш каталог</h2>
	                <a href="#" className="card-request__btn">Оставить заявку</a>
	            </div>
	        </div>

		</Fragment>
	)

}

export default ProductScreen;
