import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { Range, Handle } from 'rc-slider';

// import CartItem from '../../components/CartItem'
// import BagItem from '../../components/BagItem'
import { fetchCartList } from '../../actions/cartActions'
import { fetchBagList } from '../../actions/bagActions'
// import { createOrder } from '../../actions/orderActions'
import { removeFromCart } from '../../actions/cartActions'

// import { BAG_STATUS_TO_RETURN } from '../../constants/bagConstants'

import token from "../../images/icon/token-solid.svg"
import TokenImage from "../../components/TokenImage"

const CartScreen = (  ) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // const subscription = useSelector(state => state.subscription)
    // const { details: subDetails } = subscription
    const subDetails = {}

    const address = useSelector(state => state.address)
    const { addressInfo } = address

    const bag = useSelector(state => state.bag)
    const { bagItems } = bag

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        // if (userInfo && cartItems.length===0) {
        if (userInfo) {
            console.log('cart fethced')
            dispatch(fetchCartList()) 
        }
        // if (subDetails.id && bagItems.length===0){
        if (subDetails.id){
            dispatch(fetchBagList())
        }
    }, [userInfo, dispatch])

    // const createOrderHandler = () => {
    //     dispatch(createOrder())
    // }
    const removeFromCartHandler = (id) => {
        console.log('dispatched')
        dispatch(removeFromCart(id))
    }

    const nextStepObj = {}
    if (userInfo && subDetails.id && addressInfo.id){
        nextStepObj['link'] = '/placeorder'
    }else if (userInfo && subDetails.id){
        nextStepObj['link'] = '/register/address'       
    }else if (userInfo){
        nextStepObj['link'] = '/register/plan'              
    }else if (userInfo){
            nextStepObj['link'] = '/register'              
    }else{
        nextStepObj['link'] = '/register'
    }

    const {amount} = useSelector(state => state.token)





    const newItems = cartItems.map((itemInfo, index)=>
        <div className="basket-item" key={index}>
            <div className="basket-item__info">
                <div className="basket-item__photo">
                    <img src={itemInfo.item_id.image.filter(x=>x.main)[0].image} alt=""/>
                </div>
                <div className="basket-item__title">
                    <h4>{itemInfo.item_id.name}</h4>
                    <p><img src={token} alt=""/>{itemInfo.item_id.price}</p>
                </div>
            </div>
            <a onClick={()=>removeFromCartHandler(itemInfo.id)} className="basket-item__garbage">
                <i className="fa-garbage"></i>
            </a>
        </div>
    )
    

    const myItems = bagItems.map((itemInfo, index)=>
       <div className="basket-item" key={index}>
            <div className="basket-item__info">
                <div className="basket-item__photo">
                    <img src="images/basket-back.png" alt=""/>
                </div>
                <div className="basket-item__title">
                    <h4>Название игрушки Название игрушки</h4>
                    <p><img src={token} alt=""/> 50</p>
                </div>
            </div>
            <div className="basket-item__type">
                <p className="basket-item__status"><b>Статус:</b> в аренде</p>
                <div className="basket-item__back">
                    <p>Вернуть</p>
                    <i className="fa-check"></i>
                </div>
            </div>
        </div>
    )

    const tokenAllowence = amount.totalTokenAmount + amount.leftTokenAmount
    const totalTokenLength = Math.max(tokenAllowence - amount.leftTokenAmount, tokenAllowence)

    const tokenTagForCounter = (x, index) => 
        (
            <div className="basket-counter__tag">
                {index===0 && <span>Сейчас в аренде</span>}
                {index===1 && <span>Новые игрушки</span>}
                {index===2 && <span>Свободно</span>}
                <TokenImage size='30px'/> {x}
            </div>
        )

    const conditionsForHandlers = (index) => 
        (index===0 
        ? (amount.currentTokenAmount > 0) && tokenTagForCounter(amount.currentTokenAmount, index)
        :  index===1 
            ? (amount.newTokenAmount>0) && tokenTagForCounter(amount.newTokenAmount, index)
            : (index===2) && tokenTagForCounter(tokenAllowence, index)
        )


    const basketContent = (isSbuscribed) => 
        isSbuscribed 
        ? 
            (
            <div className="basket-frame">
                <div className="basket-content" data-basket="1">
                    <h3>Новые игрушки</h3>
                    <div className="basket-list basket-list_new">
                        {cartItems.length >0 ? (
                                newItems
                            ) : <p>Пока вы не добавили игрушки в корзину</p>}
                    </div>                       
                </div>
                <div className="basket-content" data-basket="2">
                    <h3>Мои игрушки</h3>
                    <div className="basket-list">
                        {bagItems.length > 0 ? (
                                myItems
                            ) : <p>У вас нет игрушек в аренде</p>}
                    </div>
                </div>
            </div>
            )
        :
            (
            <Fragment>
                <div className="basket-frame__nogrid">
                    <div className="basket-content" data-basket="1">
                        <div className="basket-list basket-list_new">
                            {cartItems.length >0 ? (
                                    newItems
                                ) : <p>Пока вы не добавили игрушки в корзину</p>}
                        </div>
                    </div>
                </div>
                <div className="basket-total">
                    Итого: 
                    <p><TokenImage size='30px'/> {amount.newTokenAmount} токенов</p>
                </div>
                <Link to='/pricing' className="basket-total__btn">Выбрать тарифный план</Link>
            </Fragment>
            )

    return (
        <Fragment>
        <div className="basket">
            <div className="section-frame">
                <h1 className="page-title">Корзина </h1>
                {subDetails.id &&
                <div className="basket-tabs">
                    <a href="#" className="basket-tab basket-tab_active" data-basket="1">Новые игрушки</a>
                    <a href="#" className="basket-tab" data-basket="2">Мои игрушки</a>
                </div>}
                {basketContent(subDetails.id)}
                {/*<div className="basket-frame">
                    <div className="basket-content" data-basket="1">
                        <h3>Новые игрушки</h3>
                        <div className="basket-list basket-list_new">
                            {cartItems.length >0 ? (
                                    newItems
                                ) : <p>Пока вы не добавили игрушки в корзину</p>}
                        </div>                       
                    </div>
                    {subDetails.id &&
                        <div className="basket-content" data-basket="2">
                            <h3>Мои игрушки</h3>
                            <div className="basket-list">
                                {bagItems.length > 0 ? (
                                        myItems
                                    ) : <p>У вас нет игрушек в аренде</p>}
                            </div>
                        </div>
                    }
                </div>

                {!subDetails.id && (
                    <Fragment>
                        <div className="basket-total">
                            Итого: 
                            <p><TokenImage size='30px'/> {amount.newTokenAmount} токенов</p>
                        </div>
                        <a className="basket-total__btn">Оформить подписку</a>
                    </Fragment>
                    )}*/}
            </div>
        </div>
        {subDetails.id 
            && (
                <div className="basket-counter">
                    <div className="section-frame">
                        <div className="basket-counter__info">
                            <div className="basket-counter__tariff">
                                Ваш тариф: 
                                <p>Базовый <TokenImage size='30px'/> 180</p>
                            </div>
                            <div className="basket-counter__change">
                                <p>Изменить тариф, чтобы получить <br/> больше токенов</p>
                            </div>                    
                        </div>
                        <div className="basket-counter__content">
                            <div className="basket-counter__list">
                                <Range
                                    value={[
                                        0, 
                                        amount.currentTokenAmount > 0 ? Math.max(amount.currentTokenAmount/totalTokenLength*100, 15) : amount.currentTokenAmount, 
                                        amount.newTokenAmount > 0 ? Math.max(Math.min(amount.newTokenAmount/totalTokenLength*100, 85), 15) : amount.newTokenAmount, 
                                        100
                                    ]}
                                    min = {0}
                                    max = {100}
                                    allowCross = {false}
                                    trackStyle = {[amount.currentTokenAmount===totalTokenLength ? {"border-radius": "150px 150px 150px 150px"} : {"border-radius": "150px 0 0 150px"},
                                                    (amount.currentTokenAmount>0 & amount.leftTokenAmount>0) ? {"border-radius": "0 0 0 0"} : 
                                                    (amount.currentTokenAmount>0 & amount.leftTokenAmount===0) ? {"border-radius": "0 150px 150px 0"} :
                                                    (amount.currentTokenAmount===0 & amount.leftTokenAmount>0) ? {"border-radius": "150px 0 0 150px"} : {"border-radius": "150px 150px 150px 150px"},
                                                   amount.leftTokenAmount===totalTokenLength ? {"border-radius": "150px 150px 150px 150px"} : {"border-radius": "0 150px 150px 0"}
                                                ]}
                                    handle={ (handleProps) => {
                                        console.log(handleProps)
                                        return (
                                            <Handle { ...handleProps } style={{"transform":"translateX(50%)"}}>
                                                {conditionsForHandlers(handleProps.index)}
                                            </Handle>
                                        )
                                    }}
                                />
                            </div>
                            <a href="#" className="basket-counter__btn">Выберать другой тарифный план</a>
                        </div>
                    </div>
                </div>
                ) 
            }
        
        </Fragment>
    );
};

export default CartScreen;
