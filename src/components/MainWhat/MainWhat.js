import React, {  } from 'react';
import { Link } from 'react-router-dom';

const MainWhat = () => {
    return (
        <div className="what-subscription">
			<div className="section-frame">
				<h2 className="page-title"><span>Что такое подписка Swapie?</span></h2>
				<div className="what-subscription__list">
					<div className="what-subscription__item">
						<h3></h3>
						<div>Выбирай </div>
						<p>Мы отобрали для вас лучшие игрушки из качественных материалов от надежных производителей</p>
					</div>
					<div className="what-subscription__item">
						<h3></h3>
						<div>Играй </div>
						<p>Вы можете играйть с нашими игрушками сколько захотите и даже оставить навсегда, если не хочется расставаться </p>
					</div>
					<div className="what-subscription__item">
						<h3></h3>
						<div>Меняй </div>
						<p>Меняйте игрушки на любые <br/> другие из нашего каталога когда захотите</p>
					</div>
				</div>
				<Link to="/about" className="what-subscription__btn">Узнать больше</Link>
			</div>
		</div>
    );
};

export default MainWhat;
