import React, {  } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import RecommendationLine from '../RecommendationLine/RecommendationLine'

const MainNew = () => {

  	return (
        <div className="new">
			<div className="section-frame">
				<h2 className="page-title"><span>Новинки</span></h2>
				<RecommendationLine/>
			</div>
		</div>
    );
};

export default MainNew;
