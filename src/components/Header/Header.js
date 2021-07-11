import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import { logout } from '../../actions/userActions'

import logo from "../../images/logo.png";

import catalog from "../../images/icon/header/menu.svg";
import rate from "../../images/icon/header/rate.svg";
import arrow from "../../images/arrow.svg";

import Burger from './Burger/Burger.js';
import Menu from './Menu/Menu.js';

const Header = ({ history }) => {
    const dispatch = useDispatch()


	// Burger functionality
	const [open, setOpen] = useState(false); 

    // const userLogin = useSelector(state => state.userLogin)
    // const { userInfo } = userLogin
    const userInfo = false


    // const logoutHandler = () => {
    //     dispatch(logout())
    //     history.push('/')
    // }

    const [currentTokenAmount, setCurrentTokenAmount] = useState(0.0)
    const [newTokenAmount, setNewTokenAmount] = useState(0.0)

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const bag = useSelector(state => state.bag)
    const { bagItems } = bag

    const subscription = useSelector(state => state.subscription)
    const { details: {sub_plan_id}} = subscription
    const allowance = sub_plan_id ? sub_plan_id.allowance : 0

    useEffect(() => {
	    if (cartItems){
	    	setNewTokenAmount(Number(
	    		cartItems.reduce(function(acc, item){
	                return acc + (item.item_id ? Number(item.item_id.price) : 0)
	            }, 0).toFixed(0))
			)
	    }


	    if (bagItems){
	    	setCurrentTokenAmount(Number(
	    		bagItems.filter(x => !x.to_return).reduce(function(acc, item){
	                return acc + (item.item_id ? Number(item.item_id.price) : 0)
	            }, 0).toFixed(0))
			)
	    }

	    let totalTokenAmount = Number(newTokenAmount + currentTokenAmount)
	    let leftTokenAmount = Number(allowance - totalTokenAmount)

	    dispatch({
	    	type:'TOKEN_CALC',
	    	payload: {
	    		currentTokenAmount: currentTokenAmount,
	    		newTokenAmount: newTokenAmount,
	    		totalTokenAmount: totalTokenAmount,
	    		leftTokenAmount: leftTokenAmount,
	    	}
	    })

    }, [cartItems, bagItems, currentTokenAmount, newTokenAmount, allowance, dispatch])

    return (
    	<Fragment>
        <header className="header">
			<div className="section-frame">
				<div className="header-bar">
					<div className="header-menu_mob burger_user">
				    	<Burger open={open} setOpen={setOpen}/>
						<p>Меню</p>
					</div>

					<Link to="/catalog" className="catalog-btn catalog-btn_mob"><i className="fa-catalog"></i> Каталог</Link>
					<Link to="/" className="logo logo_pc">
						<img src={logo} alt="Logo"/>
					</Link>

					<nav className="main-menu main-menu_user">
						<ul>
							<li><Link to="/catalog"><img src={catalog} alt=""/> Каталог</Link></li>
							<li><Link to="/pricing"><img src={rate} alt=""/>Тарифы</Link></li>
							<li><Link to="/about"><img src={arrow} alt="" style={{'width': '29px'}}/>Как это работает</Link></li>
						</ul>
					</nav>
					<Link to='/' className="logo logo_mob">
						<img src={logo} alt="Logo"/>
					</Link>
					{/*<div className="header-btn header-btn_user">*/}
						{userInfo 
							? (
								<Fragment>
									<Link to="/wishlist" className="header-like">
										<i className="fa-like"></i>
									</Link>

									<div className="header-cart-icon cart-icon_balance">
										<Link to="/cart" className="header-cart">
											<i className="fa-cart"></i>
											<span>{cartItems.length}</span>
										</Link>
				                        <div className="cart-balance">
				                            <span>183/180</span>
				                        </div>
									</div>
									<Link to="/" className="header-user_active">
										<span>ВВ</span>
				                        <p>Профиль</p>
									</Link>
								</Fragment>
								) 
							: (
								<Fragment>
{/*									<div className="header-cart-icon cart-icon_balance">
										<a to="#" className="header-cart">
											<i className="fa-cart"></i>
											<span>0</span>
										</a>
				                        <div className="cart-name">
				                            <span>Корзина</span>
				                        </div>
									</div>*/}
									<div className="header-cart-icon cart-icon_not-active">
										<Link to="/cart" className="header-cart">
											<i className="fa-cart"></i>
											<span>{cartItems.length}</span>
										</Link>
			                            <p>Корзина</p>
				                        {/*<div className="cart-balance_not-active">
				                            <span>Корзина</span>
				                        </div>*/}
									</div>
									<Link to="/register" className="header-user_active">
										<span><i className="fa-user"></i></span>
				                        <p>Профиль</p>
									</Link>
								</Fragment>
								)
						}
						
												
					{/*</div>*/}
				</div>
			</div>

	    	<Menu open={open} setOpen={setOpen}/>
		</header>
    	</Fragment>
    );
};

export default withRouter(Header);
