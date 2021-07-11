import React, {  } from 'react';
import { Link } from 'react-router-dom';

import category1 from "../../images/category/category-1.jpg";
import category2 from "../../images/category/category-2.jpg";
import category3 from "../../images/category/category-3.jpg";
import category4 from "../../images/category/category-4.jpg";

const MainCategory = () => {
    return (
        <div className="category">
			<div className="section-frame">
				<h2 className="page-title"><span>Категории игрушек</span></h2>
				<div className="category-content">
					<div className="category-item category-item_left">
						<p className="category-item__title">Развивающие игрушки для малышей</p>
						<img src={category1} alt=""/>
						{/*<Link to="#" className="category-item__btn">Перейти</Link>*/}
					</div>
					<div className="category-list">
						<div className="category-item">
							<p className="category-item__title">Куклы и аксессуары</p>
							<img src={category2} alt=""/>
							{/*<Link to="#" className="category-item__btn">Перейти</Link>*/}
						</div>
						<div className="category-list__sub-list">
							<div className="category-item">
								<p className="category-item__title">Фигурки и аксессуары</p>
								<img src={category3} alt=""/>
								{/*<Link to="#" className="category-item__btn">Перейти</Link>*/}
							</div>
							<div className="category-item">
								<p className="category-item__title">Сюжетно-ролевые игры</p>
								<img src={category4} alt=""/>
								{/*<Link to="#" className="category-item__btn">Перейти</Link>*/}
							</div>
						</div>
					</div>
				</div>
				<Link to="/catalog" className="category__btn">Каталог</Link>
			</div>
		</div>
    );
};

export default MainCategory;
