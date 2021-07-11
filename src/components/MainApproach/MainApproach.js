import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import approach1 from "../../images/approach/approach-1.svg";
import approach2 from "../../images/approach/approach-2.svg";
import approach3 from "../../images/approach/approach-3.svg";
import approach4 from "../../images/approach/approach-4.svg";

const MainApproach = () => {
    const { innerWidth: width } = window;

    const listSteps = [
        {img: approach1, title: <h3>Качественные игрушки стоят дорого</h3>, text: 'Получай нужные игрушки по подписке вместо покупки их. Это дешевле.'},
        {img: approach2, title: <h3>Игрушки быстро надоедают ребенку</h3>, text: 'Мы заберем игрушки, которые надоели ребенку и привезем новые. Бесплатно.'},
        {img: approach3, title: <h3>Старые игрушки занимают <br/> много места</h3>, text: 'Все игрушки храним мы, а ребенок играет только с тем, что нравится сейчас.'},
        {img: approach4, title: <h3>Жалко выкидывать почти новые игрушки</h3>, text: 'Swapie дает новую жизнь всем игрушкам.'},
    ]

    const listStepsElement = listSteps.map((listValue, index) => {
        return(
            <Fragment key={index}>
                {(width<700) ? (
                    <div className="approach-item">
                        <div className="approach-item__content">
                            <img src={listValue.img} alt=""/>
                            {listValue.title}
                        </div>
                        <p>{listValue.text}</p>
                    </div>
                    ) : (
                    <div className="approach-item" key={index}>
                        <img src={listValue.img} alt=""/>
                        <div className="approach-item__content">
                            {listValue.title}
                            <p>{listValue.text}</p>
                        </div>
                    </div>
                    )
                }
            </Fragment>
            )
    })

    return (
        <div className="approach">
            <div className="section-frame">
                <h2 className="page-title"><span>Swapie - новый подход к старым проблемам</span></h2>
                <div className="approach-list">
                    {listStepsElement}
                </div>
                <Link to="/about" className="what-subscription__btn">Узнать больше</Link>
            </div>
        </div>
    );
};

export default MainApproach;
