import React, {  } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../images/logo.png";

import pay1 from "../../images/pay/pay-1.png";
import pay2 from "../../images/pay/pay-2.png";
import pay3 from "../../images/pay/pay-3.png";
import pay4 from "../../images/pay/pay-4.png";

// import social_tg from "../../images/icon/social/tg.svg";
// import social_f from "../../images/icon/social/f.svg";
// import social_inst from "../../images/icon/social/inst.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="section-frame">
                <div className="footer__content">
                    <div className="footer__logo">
                        <Link to="/" className="logo">
                            <img src={logo} alt="Logo"/>
                        </Link>
                        <div className="footer__pay footer__pay-pc">
                            <div className="footer__pay-item">
                                <img src={pay1} alt=""/>
                            </div>
                            <div className="footer__pay-item">
                                <img src={pay2} alt=""/>
                            </div>
                            <div className="footer__pay-item">
                                <img src={pay3} alt=""/>
                            </div>
                            <div className="footer__pay-item">
                                <img src={pay4} alt=""/>
                            </div>
                        </div>
                        {/*<div className="footer__social footer__social_mob">
                            <Link to="#" target="_blank">
                                <img src={social_tg} alt=""/>
                            </Link>
                            <Link to="#" target="_blank">
                                <img src={social_f} alt=""/>
                            </Link>
                            <Link to="#" target="_blank">
                                <img src={social_inst} alt=""/>
                            </Link>
                        </div>*/}
                    </div>
                    <div className="footer__nav">
                        <ul className="footer__nav_pc">
                            <li><Link to="/catalog">Каталог</Link></li>
                            <li><Link to="/pricing">Тарифы</Link></li>
                            <li><Link to="/about">Как работает Swapie</Link></li>
                        </ul>
                        <ul className="footer__nav_pc">
                            {/*<li><Link to="/">FAQ</Link></li>*/}
                            <li><Link to="#">Связаться с нами</Link></li>
                        </ul>
                        <ul className="footer__nav_pc">
                            {/*<li><Link to="/">Политика возврата</Link></li>*/}
                            <li><Link to="/">Условия пользования сайтом</Link></li>
                            <Link to="/policy">Политика обработки персональных данных</Link>
                            {/*<li><Link to="#">Условия подписки на сервис</Link></li>*/}
                        </ul>
                        <ul className="footer__nav_mob">
                            <li><Link to="/catalog">Каталог</Link></li>
                            <li><Link to="/pricing">Тарифы</Link></li>
                            <li><Link to="/about">Как работает Swapie</Link></li>
                            {/*<li><Link to="#">FAQ</Link></li>*/}
                        </ul>
                        <ul className="footer__nav_mob">
                            <li><Link to="/">Связаться с нами</Link></li>
                            {/*<li><Link to="#">Политика возврата</Link></li>*/}
                            <li><Link to="#">Условия пользования сайтом</Link></li>
                            <Link to="/policy">Политика обработки персональных данных</Link>
                            {/*<li><Link to="#">Условия подписки на сервис</Link></li>*/}
                        </ul>
                    </div>
                    {/*<div className="footer__social footer__social_pc">
                        <Link to="#" target="_blank">
                            <img src={social_tg} alt=""/>
                        </Link>
                        <Link to="#" target="_blank">
                            <img src={social_f} alt=""/>
                        </Link>
                        <Link to="#" target="_blank">
                            <img src={social_inst} alt=""/>
                        </Link>
                    </div>*/}
                    <div className="footer__pay footer__pay-mob">
                        <div className="footer__pay-item">
                            <img src={pay1} alt=""/>
                        </div>
                        <div className="footer__pay-item">
                            <img src={pay2} alt=""/>
                        </div>
                        <div className="footer__pay-item">
                            <img src={pay3} alt=""/>
                        </div>
                        <div className="footer__pay-item">
                            <img src={pay4} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                <div className="section-frame footer-copy__content">
                    {/*<Link to="#">Политика обработки персональных данных</Link>*/}
                    <p>©Все права защищены</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
