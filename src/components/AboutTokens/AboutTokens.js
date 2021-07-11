import React, {  } from 'react';

import about_tokens_1 from "../../images/about_tokens/about_tokens_1.svg";
import about_tokens_2 from "../../images/about_tokens/about_tokens_2.svg";
import arrow from "../../images/arrow.svg";
import token from "../../images/icon/token-solid.svg"

const AboutTokens = () => {
    return (
    	<div className="page-section what-tokens">
            <div className="section-frame">
                <h2 className="page-title">Что такое токены?</h2>
                <div className="what-tokens__content">
                    <div className="what-tokens__info">
                        <h3>Широкий выбор игрушек в рамках подписки</h3>
                        <p>Выбирая тарифный план, вы выбираете на какую сумму вы можете положить игрушки в вашу корзину. 
                        <br/><br/>Стоимость 1 токена эквивалентна ритейловой цене игрушки за 100 рублей.</p>
                        <div className="what-tokens__photo">
                            <p><img src={token} alt=""/> 10 токенов</p>
                            <img src={about_tokens_1} alt=""/>
                        </div>
                        <p>То есть если вы  заказали у нас игрушки на 100 токенов, то это значит что примерная стоимость покупки таких же новых игрушек в магазине вам обойдется в 10 тысяч рублей.</p>
                    </div>
                    
                    <div className="what-tokens__info">
                        <h3>Гибкий обмен старых игрушек на новые </h3>
                        <p>Когда вы решили обменять все или только некоторые игрушки из своей корзины, у вас освобождаются токены. На эти токены вы можете положить новые игрушки в корзину. 
                        <br/><br/>Наш Swapie курьер привезет новые игрушки и заберет старые.</p>
                        <div className="what-tokens__photo">
                            <img src={about_tokens_1} alt=""/>
                            <img src={arrow} alt=""/>
                            <img src={about_tokens_2} alt=""/> 
                        </div>
                       <p>Размер доступных токенов определяется тарифным планом. Токены не добавляются и не обновляются каждый месяц. Если вам понадобится больше токенов, вы всегда можете увеличить тарифный план.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTokens;
