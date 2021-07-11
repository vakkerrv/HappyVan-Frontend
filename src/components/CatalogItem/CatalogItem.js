import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../actions/cartActions'
import { addToWishlist } from '../../actions/wishlistActions'
// import { addToWaitlist } from '../../actions/waitlistActions'

import notify from '../notify';

import token from "../../images/icon/token-solid.svg"
// import star from "../../images/icon/star-color.png";
import ReviewStars from '../../components/ReviewStars'

const CatalogItem = ({product, customClassName, isInWishlist}) => {
    const dispatch = useDispatch()
    const [isWished, setIsWished] = useState(isInWishlist)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const addToCartHandler = (id) => {
        dispatch(addToCart(id))
        notify(`Товар добавлен в Корзину`)
    }

    const addToWishlistHandler = (id) => {
        if(userInfo){
            if (isWished){
            notify(`Товар удален из Избранного`)
            }else{
                dispatch(addToWishlist(id))
                notify(`Товар добавлен в Избранное`)
            }
            setIsWished(!isWished)
        }else{           
            notify(`В Избранное могут добавлять только авторизированные пользователи`)
        }
    }

    // const addToWaitlistHandler = (id) => {
    //     dispatch(addToWaitlist(id))
    //     notify(`Товар добавлен в Лист ожидания`)
    // }
    // console.log('product', product)

	return(
		<div className={`product-cart ${customClassName && customClassName}`}>
            <div onClick={()=>addToWishlistHandler(product.id)} className={`product-cart__like ${isWished ? "product-cart__like_active" : ""}`}>
                <i className="fa-like"></i>
                <i className="fa-like-filled"></i>
            </div>
            {product.is_best_seller && (<div className="product-cart_hit">Хит продаж</div>)}
            <Link to={`/product/${product.id}`}>
                <div className="product-cart__photo">
                    <img src={product.image.filter(x=>x.main)[0]&&product.image.filter(x=>x.main)[0].image} className="" alt=""/>
                </div>
            </Link>
            <div className="product-cart__content">
                <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                </Link>
                <ReviewStars rating={product.rating}/>
                <div className="product-cart__tokens">
                    <img className='token' src={token} alt=""/>
                    <p>{product.price && parseFloat(product.price).toFixed(0)} токенов</p>
                </div>
                <div onClick={()=>addToCartHandler(product.id)} className="product-cart__btn-cart">В корзину</div>
            </div>
        </div>
	)
}

export default CatalogItem
