import React, {  } from 'react';

import about_cleaning_1 from "../../images/about_cleaning/about-cleaning-1.png";
import about_cleaning_2 from "../../images/about_cleaning/about-cleaning-2.png";
import about_cleaning_3 from "../../images/about_cleaning/about-cleaning-3.png";
import about_cleaning_4 from "../../images/about_cleaning/about-cleaning-4.png";

const AboutTokens = () => {
    
    const cleaningSteps = [
        {
            step: 1,
            text: '1. Механическая очистка от грязи',
            img: about_cleaning_1,
        },
        {
            step: 2,
            text: '2. Мойка игрушек с водой и мылом',
            img: about_cleaning_2,
        },
        {
            step: 3,
            text: '3. Обработка дезинфицирующим средством',
            img: about_cleaning_3,
        },
        {
            step: 4,
            text: '4. Обработка УФ-излучением',
            img: about_cleaning_4,
        }
    ]

    return (
    	<div className="page-section about-cleaning">
            <div className="section-frame">
                <h2 className="page-title">Мы заботимся о чистоте и безопасности</h2>
                <div className="about-cleaning__content">
                    <div className="about-cleaning__info">
                        <div className="about-cleaning__info-part">
                            <div>Безопасность</div>
                            <p>Мы заботимся о чистоте и безопасности всех наших игрушек. Все наши товары имеют соответствующие сертификаты безопасности. </p>                           
                        </div>

                        <div className="about-cleaning__info-part">
                            <div>Очистка</div>
                            <p>Мы также проводим тщательный процесс очистки и стерилизации, наши игрушки чище чем из магазина или чем те, с которыми ваш ребенок играет в детском саду. </p>
                        </div>
                        
                    </div>
                    <div className="about-cleaning__steps">
                        {cleaningSteps.map((stepInfo)=>{
                            return(
                                <div className="about-cleaning__step" key={stepInfo.step}>
                                    <img src={stepInfo.img} alt=""/>
                                    <p>{stepInfo.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTokens;
