import React, { useState } from 'react';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <div className="section-frame">
                <ul className="breadcrumbs-list">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Каталог</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;
