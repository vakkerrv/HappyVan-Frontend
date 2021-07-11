import React, { } from 'react';

import main_img from "../../images/main.png";

import WelcomeEmail from '../WelcomeEmail/WelcomeEmail.js';

const MainSwapie = () => {
    return (
        <div className="swapie">
            <div className="section-frame">
                <div className="swapie-content">
                    <div className="swapie-info">
                        <h1>Swapie</h1>
                        <b>Детские игрушки <br/> по подписке</b>
                        <p>С нами лучшие игрушки доступны каждому</p>
                        <img src={main_img} className="swapie-photo swapie-photo_mob" alt=""/>
                        <WelcomeEmail/>
                    </div>
                    <img src={main_img} className="swapie-photo swapie-photo_pc" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainSwapie;
